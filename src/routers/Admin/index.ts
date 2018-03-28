
import ProductsRoute from './Products/ProductsRoute';
import UsersRoute from './Users/UsersRoute';
import AuthRoute from './Auth/AuthRoute';
import CategoryRoute from './Category/CategoryRoute';


const AdminProductsRoute = new ProductsRoute().getRoutes();
const AdminUsersRoute = new UsersRoute().getRoutes();
const AdminAuthRoute = new AuthRoute().getRoutes();
const AdminCategoryRoute = new CategoryRoute().getRoutes();

export {
    AdminProductsRoute,
    AdminUsersRoute,
    AdminAuthRoute,
    AdminCategoryRoute
};