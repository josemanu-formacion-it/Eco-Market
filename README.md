# EcoMarket

Sistema de gestión de inventario para pequeños negocios locales.

## Estructura del Proyecto

Este repositorio es un monorepo que contiene tanto el frontend como el backend:

- **/client**: Aplicación frontend construida con React, TypeScript, Tailwind CSS y Vite.
- **/server**: API Backend construida con Node.js, Express y TypeScript.
- **/docs**: Documentación detallada del proyecto (arquitectura, diseño, idea).

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- npm (incluido con Node.js)

## Instalación

Para instalar todas las dependencias (raíz, cliente y servidor), ejecuta desde la raíz:

```bash
npm run install:all
```

## Desarrollo

Para ejecutar tanto el cliente como el servidor simultáneamente en modo desarrollo:

```bash
npm run dev
```

- El frontend estará disponible en: `http://localhost:5173`
- El backend estará disponible en: `http://localhost:4000`

## Documentación

Puedes encontrar más detalles sobre el proyecto en la carpeta `/docs`:
- [Idea del Proyecto](./docs/idea.md)
- [Diseño y Arquitectura](./docs/design.md)
- [API Endpoints](./docs/api.md)
