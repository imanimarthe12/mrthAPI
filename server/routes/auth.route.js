import Router from 'express';
import userController from '../controllers/auth.controller';

const routes = Router();

routes.post('/signin', userController.signIn);

export default routes;
