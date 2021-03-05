import Router from 'express';
import commanderControllwe from '../controllers/commander.controller';

const routes = Router();

routes.post('/incident', commanderControllwe.addIncident);
routes.get('/incident', commanderControllwe.incident);
routes.post('/daily', commanderControllwe.addPatrolReport);
routes.get('/daily', commanderControllwe.getDaily);
routes.get('/month', commanderControllwe.getMonthlyReport);
routes.get('/week', commanderControllwe.getWeeklyReport);
routes.get('/guard', commanderControllwe.getGuards);
routes.post('/guard', commanderControllwe.addGuard);


export default routes;
