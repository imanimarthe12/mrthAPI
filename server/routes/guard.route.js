import Router from 'express';
import guardController from '../controllers/guard.conntroller';
import cors from 'cors';

const routes = Router();

routes.post('/guard',cors(), guardController.addGuard);
routes.get('/guard',cors(), guardController.getGuards);
routes.delete('/guard',cors(), guardController.deleteGuard);
routes.patch('/password',cors(), guardController.changePassword);

export default routes;
