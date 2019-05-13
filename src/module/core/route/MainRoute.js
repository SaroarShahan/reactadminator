import DashboardRoute from '../../dashboard/route';
import ChartsRoute from '../../charts/route/ChartsRoute';
import CalenadrRoute from './../../calendar/route/index';
import FormRoute from './../../forms/route/FormRoute';

export const MainRoute = [
  {
    path: '/dashboard',
    component: DashboardRoute
  },
  {
    path: '/calendar',
    component: CalenadrRoute
  },
  {
    path: '/charts',
    component: ChartsRoute
  },
  {
    path: '/forms',
    component: FormRoute
  },

  {path: '/', component: DashboardRoute, exact: true}
];
