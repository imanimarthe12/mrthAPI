import Router from 'express';
import collectorController from '../controllers/collector.controller';

const routes = Router();

routes.post('/citizen', collectorController.addCitizen);
routes.get('/citizen', collectorController.getCitizen);
routes.post('/payment', collectorController.addPayment);
routes.get('/payment', collectorController.getPayment);

export default routes;
