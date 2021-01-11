import Router from 'express';
import guardController from '../controllers/guard.conntroller';

const routes = Router();

routes.post('/guard', guardController.addGuard);
routes.get('/guard', guardController.getGuards);
routes.delete('/guard', guardController.deleteGuard);
routes.patch('/password', guardController.changePassword);

export default routes;