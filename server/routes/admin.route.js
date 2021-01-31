import Routes from 'express';
import adminController from '../controllers/admin.controller';
import cors from 'cors';

const routes = Routes();

routes.post('/adduser',cors(), adminController.addUser);
routes.get('/getusers',cors(), adminController.getUser);
routes.delete('/user',cors(), adminController.deleteUser);

export default routes;
