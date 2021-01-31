import Router from 'express';
import userController from '../controllers/auth.controller';
import cors from 'cors';

const routes = Router();

routes.post('/signin',cors(), userController.signIn);

export default routes;
