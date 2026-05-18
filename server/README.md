# EcoMarket - API Backend ⚙️

Servidor de EcoMarket construido con Node.js y Express, siguiendo una arquitectura por capas y tipado fuerte con TypeScript.

## 🛠️ Stack Tecnológico

- **Node.js**: Entorno de ejecución.
- **Express**: Framework web para la API.
- **TypeScript**: Lenguaje para un código robusto y mantenible.
- **JWT (JSON Web Token)**: Seguridad para la autenticación.
- **Nodemon**: Herramienta para recarga automática en desarrollo.

## 🏗️ Arquitectura por Capas

El servidor está organizado para ser escalable y fácil de testear:

1. **Routes**: Define los endpoints y conecta con los controladores.
2. **Controllers**: Gestiona las peticiones HTTP y las respuestas.
3. **Services**: Contiene la lógica de negocio pura y acceso a datos.
4. **Middleware**: Validaciones de seguridad y autenticación.
5. **Types**: Contratos de datos compartidos.

## 🚀 Comandos Disponibles

Desde la carpeta `/server`:

- `npm run dev`: Inicia el servidor con Nodemon y soporte para TypeScript.
- `npm run build`: Compila el código a JavaScript puro en la carpeta `/dist`.
- `npm start`: Ejecuta el código compilado (para producción).

## 🔌 Endpoints Principales

- `POST /api/v1/auth/login`: Autenticación de usuarios.
- `GET /api/v1/products`: Listado de todos los productos.
- `POST /api/v1/products`: Creación de un nuevo producto.
- `PUT /api/v1/products/:id`: Actualización de un producto existente.
- `DELETE /api/v1/products/:id`: Eliminación de un producto.
- `GET /health`: Comprobación del estado del servidor.
