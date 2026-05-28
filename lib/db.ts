import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

/**
 * Cliente de base de datos Neon (PostgreSQL)
 * Utiliza el driver serverless para optimizar conexiones en entornos como Vercel Edge.
 */
export const sql = neon(process.env.DATABASE_URL);
