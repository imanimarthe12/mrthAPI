import Router from 'express';
import userController from '../controllers/auth.controller';

const routes = Router();

routes.post('/signin', userController.signIn);
routes.patch('/password', userController.changePassword);

export default routes;
