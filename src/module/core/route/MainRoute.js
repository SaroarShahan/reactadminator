import DashboardRoute from '../../dashboard/route';
import ChartsRoute from '../../charts/route/ChartsRoute';
import CalenadrRoute from './../../calendar/route/index';

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

  {path: '/', component: DashboardRoute, exact: true}
];
