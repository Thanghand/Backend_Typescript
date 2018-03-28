/**
 * application main router
 */
import * as express from 'express';

import AuthRouter from './Auth';
import ProductsRoute from './Products';
import CategoryRoute from './Category';
import {AdminProductsRoute, AdminUsersRoute, AdminAuthRoute, AdminCategoryRoute} from './Admin';

const api = express.Router();

// normal users
api.use('/auth', AuthRouter);
api.use('/product', ProductsRoute);
api.use('/category', CategoryRoute);

// admin
api.use('/admin/product', AdminProductsRoute);
api.use('/admin/user', AdminUsersRoute);
api.use('/admin/auth', AdminAuthRoute);
api.use('/admin/category', AdminCategoryRoute);
export default api;