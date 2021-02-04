import Router from 'express';
import weekPlan from '../controllers/weekplan.controller';

const routes = Router();

routes.post('/weekplan', weekPlan.addPlan);
routes.patch('/weekplan', weekPlan.updatePlan);
routes.get('/weekplani', weekPlan.filterDate);
routes.get('/weekplan', weekPlan.getAllWeekPlan);
export default routes;
