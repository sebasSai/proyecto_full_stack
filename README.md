# Proyecto Full Stack

Este repositorio contiene una aplicación con un backend en Express y un frontend en React.

## Desarrollo

1. Instala las dependencias de cada proyecto:

   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. Ejecuta los servidores de desarrollo:

   ```bash
   cd backend && npm run dev
   cd ../frontend && npm run dev
   ```

El backend utiliza `nodemon` con la configuración del archivo `nodemon.json`.

## Docker

Para construir la imagen del backend ejecuta:

```bash
cd backend
docker build -t backend-app .
```

La imagen instala las dependencias, compila el proyecto TypeScript y arranca `node dist/app.js`.
