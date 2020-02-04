import App from './../App';
import ShopPage from './../components/ShopComponent';

const ROUTES_CONFIG = [
    {
        path:'/',
        component: App,
    },

    {
        path:'/shop',
        component: ShopPage,
    }
];

export default ROUTES_CONFIG;