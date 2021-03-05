import Routes from 'express';
import adminController from '../controllers/admin.controller';

const routes = Routes();

routes.post('/staff', adminController.addStaff);
routes.get('/staff', adminController.getStaff);
routes.post('/sector', adminController.addSector);
routes.post('/cell', adminController.addCell);
routes.post('/village', adminController.addVillage);
routes.get('/sector', adminController.getSectors);
routes.get('/cell', adminController.getCells);
routes.get('/village', adminController.getVillages);

export default routes;
