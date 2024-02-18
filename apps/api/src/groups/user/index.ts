import { Hono } from 'hono'
import { createUserSchema } from './schemas'
import { validator } from '../../utils/validator'
import createUser from './services/create-user'

const userGroup = new Hono<{ Bindings: Env }>()

userGroup.post('/', validator('json', createUserSchema), async (c) => {
	const body = c.req.valid('json')
	const result = await createUser(body, c.env)
	return c.json(result)
})

export default userGroup