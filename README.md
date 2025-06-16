# Proyecto Full Stack

Este repositorio contiene una aplicación con un backend en Express y un frontend en React.

## Desarrollo

1. Instala las dependencias de cada proyecto:

   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. Copia `backend/.env.example` a `backend/.env` y proporciona valores para
   `DATABASE_URL`, `PORT` y `JWT_SECRET`. Opcionalmente ejecuta:

   ```bash
   npx prisma migrate dev
   ```

3. Ejecuta los servidores de desarrollo:

   ```bash
   cd backend && npm run dev
   cd ../frontend && npm run dev
   ```

El backend utiliza `nodemon` con la configuración del archivo `nodemon.json`.
