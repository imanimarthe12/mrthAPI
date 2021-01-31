import Router from 'express';
import weekPlan from '../controllers/weekplan.controller';
import cors from 'cors';

const routes = Router();

routes.post('/weekplan',cors(), weekPlan.addPlan);
routes.patch('/weekplan',cors(), weekPlan.updatePlan);
routes.get('/weekplani',cors(), weekPlan.filterDate);
routes.get('/weekplan',cors(), weekPlan.getAllWeekPlan);
export default routes;
