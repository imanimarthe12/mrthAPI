import Router from 'express';
import userController from '../controllers/auth.controller';

const routes = Router();

routes.post('/register', userController.signUp);
routes.get('/signin', userController.signIn);

export default routes;
