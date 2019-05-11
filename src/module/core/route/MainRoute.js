import DashboardRoute from '../../dashboard/route';
import ChartsRoute from '../../charts/route/ChartsRoute';

export const MainRoute = [
  {
    path: '/dashboard',
    component: DashboardRoute
  },
  {
    path: '/charts',
    component: ChartsRoute
  },

  {path: '/', component: DashboardRoute, exact: true}
];
