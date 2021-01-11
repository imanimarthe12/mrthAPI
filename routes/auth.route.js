import Router from 'express';
import userController from '../controllers/auth.controller';

const routes = Router();

routes.get('/signin', userController.signIn);

export default routes;
