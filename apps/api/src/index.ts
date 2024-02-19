import { Hono } from 'hono';
import getDb from './utils/get-db';
import { users } from './db/schema';

const app = new Hono<{ Bindings: Env }>();

app.get('/', async (c) => {
  const db = getDb(c.env.DATABASE_URL);

  const allUsers = await db
    .select({
      id: users.id,
    })
    .from(users);

  console.log(`All users: ${JSON.stringify(allUsers)}`);

  return c.json({
    message: 'Hello World!',
  });
});

export default app;