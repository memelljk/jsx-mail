import CacheTime from "../../../utils/cacheTime";
import HttpException from "../../../utils/error";
import getPrisma from "../../../utils/prisma";
import HttpStatus from "../../../utils/status";
import { CreateUserSchema } from "../schemas";
import * as bcrypt from 'bcryptjs';

export default async function createUser({ body: { email, name, password }, env, executionCtx }: { body: CreateUserSchema, env: Env, executionCtx: ExecutionContext }) {
	const prisma = getPrisma(env.DATABASE_URL)

	email = email.toLocaleLowerCase().trim();
	name = name.toLocaleLowerCase().trim();

	const userAlreadyExists = await prisma.user.findFirst({
		where: {
			email,
			deletedAt: null,
		},
		cacheStrategy: { swr: CacheTime.ONE_DAY }
	})

	if (userAlreadyExists) {
		throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
	}

	executionCtx.waitUntil(dbCreate({ email, name, password }, prisma));

	return {
		message: 'User created successfully',
	};
}

async function dbCreate({ email, password, name }: CreateUserSchema, prisma: any) {
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);

	await prisma.user.create({
		data: {
			email,
			name,
			password: hashPassword,
		},
	})
}