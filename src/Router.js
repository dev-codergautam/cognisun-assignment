import AddOrder from "./view/page/AddOrder";
import Home from "./view/page/Home";


export const MainRouter = [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
        path: '/add-order',
        component: AddOrder,
        exact: true,
    },
]