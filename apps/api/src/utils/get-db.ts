import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

export default function getDb(uri: string) {
  const sql = neon(uri);
  return drizzle(sql);
}