import { validator as honoValidator } from 'hono/validator'
import { z } from 'zod'
import HttpException from './error'
import HttpStatus from './status'

export function validator(type: 'json' | 'form', schema: z.Schema) {

	return honoValidator(type, (value) => {
		const parsed = schema.safeParse(value)

		if (!parsed.success) {
			const errors = parsed.error.issues.map((issue) => issue.message).join(', ')
			throw new HttpException(errors, HttpStatus.BAD_REQUEST);
		}

		return parsed.data
	})
}