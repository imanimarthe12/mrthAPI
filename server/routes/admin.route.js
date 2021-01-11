import Routes from 'express';
import adminController from '../controllers/admin.controller';

const routes = Routes();

routes.post('/adduser', adminController.addUser);
routes.get('/getusers', adminController.getUser);
routes.delete('/user', adminController.deleteUser);

export default routes;
