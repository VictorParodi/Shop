import App from './../App';
import ShopPage from './../components/ShopComponent';
import SignInUp from './../pages/SignInUp';

const ROUTES_CONFIG = [
    {
        path:'/',
        component: App,
    },

    {
        path:'/shop',
        component: ShopPage,
    },

    {
        path:'/signIn',
        component: SignInUp,
    }
];

export default ROUTES_CONFIG;