import Router from 'express';
import reportController from '../controllers/report.controller';

const routes = Router();

routes.post('/report', reportController.addReport);
routes.get('/report', reportController.getAllReports);
routes.get('/reporti', reportController.getOneReport);

export default routes;
