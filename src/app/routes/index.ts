import express from 'express';
import { userRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes

  {
    path: '/auth',
    route: userRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
