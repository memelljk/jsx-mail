import { z } from 'zod'

export const sendEmailSchema = z.object({
	from: z.object({
		email: z.string().email({ message: 'Invalid email address' }),
		name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
	}),
	to: z.array(z.string().email({ message: 'Invalid email address' })),
	subject: z.string(),
	html: z.string(),
})

export type SendEmailSchema = z.infer<typeof sendEmailSchema>