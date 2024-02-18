import { z } from 'zod'

export const createUserSchema = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
	email: z.string().email({ message: 'Invalid email address' }),
	password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})

export const createSecurityCodeSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
})

export type CreateUserSchema = z.infer<typeof createUserSchema>
export type CreateSecurityCodeSchema = z.infer<typeof createSecurityCodeSchema>