import CacheTime from "../../../utils/cacheTime";
import HttpException from "../../../utils/error";
import getPrisma from "../../../utils/prisma";
import HttpStatus from "../../../utils/status";
import { CreateUserSchema } from "../schemas";
import * as bcrypt from 'bcryptjs';
import { Prisma } from '@prisma/client/edge';

export default async function createUser({ email, name, password }: CreateUserSchema, env: Env) {
	const prisma = getPrisma(env.DATABASE_URL)

	email = email.toLocaleLowerCase().trim();
	name = name.toLocaleLowerCase().trim();

	const userExists = await prisma.user.findFirst({
		where: {
			email: email,
			deletedAt: null
		},
		cacheStrategy: { swr: CacheTime.ONE_MINUTE },
	});

	if (userExists) {
		throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
	}

	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);

	try {
		const user: any = await prisma.user.create({
			data: {
				email,
				name,
				password: hashPassword,
			},
		});

		delete user.password;
		delete user.deletedAt;

		return {
			message: 'User created successfully',
			user,
		};
	} catch (error: any) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === 'P2002') {
				throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
			}
		}

		throw error;
	}
}