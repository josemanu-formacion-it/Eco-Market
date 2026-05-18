# EcoMarket - Cliente Frontend 💻

Este es el frontend de la aplicación EcoMarket, construido con tecnologías modernas para ofrecer una experiencia de usuario rápida y fluida.

## 🛠️ Stack Tecnológico

- **React 19**: Biblioteca principal para la interfaz.
- **Vite**: Herramienta de construcción y servidor de desarrollo ultra rápido.
- **TypeScript**: Para un desarrollo seguro y libre de errores de tipo.
- **Tailwind CSS v4**: Estilos modernos con la última versión del motor de CSS.
- **React Router 7**: Gestión de navegación y rutas protegidas.
- **Lucide React**: Set de iconos elegantes y ligeros.
- **Axios**: Cliente HTTP para la comunicación con la API.

## 📁 Estructura de Carpetas

- `src/components`: Componentes UI reutilizables.
- `src/context`: Gestión del estado global (Autenticación).
- `src/layout`: Envolventes de página y estructura visual común.
- `src/pages`: Páginas principales de la aplicación.
- `src/services`: Cliente de API configurado.
- `src/types`: Definiciones de interfaces de TypeScript.

## 🚀 Comandos Disponibles

Desde la carpeta `/client`:

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Compila la aplicación para producción (TypeScript + Vite).
- `npm run lint`: Ejecuta el linter para revisar la calidad del código.
- `npm run preview`: Previsualiza la compilación de producción localmente.

## 🌐 Configuración de API

La URL de la API se configura automáticamente. Para cambiarla en producción, utiliza la variable de entorno `VITE_API_URL`.
Por defecto: `http://localhost:4000/api/v1`
