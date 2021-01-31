import Router from 'express';
import reportController from '../controllers/report.controller';
import cors from 'cors'

const routes = Router();

routes.post('/report',cors(), reportController.addReport);
routes.get('/report',cors(), reportController.getAllReports);
routes.get('/reporti',cors(), reportController.getOneReport);

export default routes;
