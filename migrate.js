import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL);

async function migrate() {
  try {
    console.log('🚀 Iniciando migración de base de datos...');

    const schemaPath = path.join(process.cwd(), 'sql', 'schema.sql');
    const seedPath = path.join(process.cwd(), 'sql', 'seed.sql');

    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    const seedSql = fs.readFileSync(seedPath, 'utf8');

    console.log('⏳ Creando tablas...');
    // Ejecutamos el schema. Usamos una sola query ya que neon soporta múltiples statements
    await sql(schemaSql);
    console.log('✅ Tablas creadas correctamente.');

    console.log('⏳ Insertando datos de prueba...');
    await sql(seedSql);
    console.log('✅ Datos insertados correctamente.');

    console.log('🎉 ¡Base de datos configurada con éxito!');
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
  }
}

migrate();
