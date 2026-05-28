# Learning Inventory - Fase 6 🚀

Este proyecto es una aplicación de gestión de inventario diseñada para dominar las bases de datos relacionales con **PostgreSQL** y **Neon**.

## 🛠️ Stack Tecnológico
- **Base de Datos:** PostgreSQL (Serverless via [Neon](https://neon.tech))
- **Backend:** Next.js (App Router)
- **Frontend:** React + Tailwind CSS
- **Despliegue:** Vercel

## 📂 Estructura del Proyecto
- `/sql`: Scripts de base de datos (Esquema y Semillas).
- `/docs`: Documentación técnica y análisis.
- `/lib`: Configuración de la conexión a la DB y utilidades.
- `/app`: Rutas y lógica de la aplicación (Next.js).

## 🚀 Pasos para Empezar

### 1. Configuración de Base de Datos (Neon)
1. Regístrate en [Neon.tech](https://neon.tech).
2. Crea un proyecto llamado `learning-inventory`.
3. En el panel de control, copia tu **Connection String** (ej: `postgresql://user:password@host/dbname?sslmode=require`).
4. Ve a la sección **SQL Editor** en Neon y pega el contenido de `sql/schema.sql` para crear las tablas.
5. (Opcional) Ejecuta `sql/seed.sql` para cargar datos iniciales de prueba.

### 2. Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto y añade tu cadena de conexión:
```env
DATABASE_URL=tu_cadena_de_conexion_aqui
```

### 3. Instalación de Dependencias
```bash
npm install @neondatabase/serverless
```

## 📖 Documentación Requerida
- [Diseño de Arquitectura](./docs/arquitectura-datos.md)
- [Análisis SQL (Joins)](./docs/analisis-sql.md)
- [Seguridad y Prevención de Inyección SQL](./docs/seguridad-db.md) (Pendiente)
