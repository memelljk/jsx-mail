import { Hono } from 'hono'
import HttpException from './utils/error'
import HttpStatus from './utils/status'
import userGroup from './groups/user'

const app = new Hono<{ Bindings: Env }>()

app.route('/users', userGroup)

app.get('/', (c) => {
  return c.json({
    message: 'Welcome to JSX Mail API!',
    timestamp: new Date(),
    path: c.req.path
  })
})

app.notFound(() => {
  throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
})

app.onError((err, c) => {
  let status = HttpStatus.INTERNAL_SERVER_ERROR
  let message = 'Internal Server Error'

  if (err instanceof HttpException) {
    status = err.status
    message = err.message
  } else {
    console.log(`Unknown error: ${err}`)
  }

  return c.json({
    message,
    timestamp: new Date(),
    path: c.req.path
  },
    {
      status: status,
    }
  )
})

export default app
