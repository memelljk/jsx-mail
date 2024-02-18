import { Hono } from 'hono'
import { createSecurityCodeSchema, createUserSchema } from './schemas'
import { validator } from '../../utils/validator'
import createUser from './services/create-user'
import createSecurityCode from './services/use-security-code'

const userGroup = new Hono<{ Bindings: Env }>()

userGroup.post('/', validator('json', createUserSchema), async (c) => {
	const body = c.req.valid('json')
	const result = await createUser(body, c.env)
	return c.json(result)
})

userGroup.post('/security-code', validator('json', createSecurityCodeSchema), async (c) => {
	const body = c.req.valid('json')
	const result = await createSecurityCode(body, c.env)
	return c.json(result)
})

export default userGroup