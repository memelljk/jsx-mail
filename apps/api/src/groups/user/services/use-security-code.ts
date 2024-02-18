import { CreateSecurityCodeSchema } from "../schemas";

export default async function createSecurityCode({ email }: CreateSecurityCodeSchema, env: Env) {
	return {
		ok: true
	}
}