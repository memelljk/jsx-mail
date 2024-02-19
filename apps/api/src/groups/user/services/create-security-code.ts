import getPrisma from "../../../utils/prisma";
import { titleCase } from "../../../utils/title-case";
import sendEmail from "../../email/services/send-email";
import { CreateSecurityCodeSchema } from "../schemas";

export default async function createSecurityCode({ body, executionCtx, env }: { body: CreateSecurityCodeSchema, env: Env, executionCtx: ExecutionContext }) {
	const prisma = getPrisma(env.DATABASE_URL)

	executionCtx.waitUntil(sendAndDbCreateSecurityCode({ email: body.email }, prisma, env));

	return {
		message: 'Security code sent successfully',
	}
}

async function sendAndDbCreateSecurityCode({ email }: CreateSecurityCodeSchema, prisma: any, env: Env) {
	const user = await prisma.user.findFirst({
		where: {
			email: email,
			deletedAt: null,
		},
	});

	if (!user) {
		console.log(`[sendAndDbCreateSecurityCode] User not found: ${email}`);
		return;
	}

	const code = Math.floor(100000 + Math.random() * 900000).toString();

	await prisma.securityCode.create({
		data: {
			userId: user.id,
			code,
			expiresAt: new Date(new Date().getTime() + 1000 * 60 * 5), // 5 minutes
		},
	});

	await sendEmail({
		body: {
			from: {
				name: 'JSX Mail Cloud',
				email: `jsxmail@${env.DEFAULT_EMAIL_DOMAIN_NAME}`,
			},
			to: [user.email],
			subject: 'Your security code',
			html: `
				<div>
					<p>Hi, ${titleCase(user.name)}!</p>
					<p>Your security code is: <strong>${code}</strong></p>
				</div>
			`,
		},
		env
	});
}