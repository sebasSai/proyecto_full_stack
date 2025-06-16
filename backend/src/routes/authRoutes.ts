import { Router } from 'express';
import { register } from '../controllers/authController';

// PRIMERO crea el router
const router = Router();

// Luego usa el router para definir las rutas
router.post('/register', register);

export default router;
