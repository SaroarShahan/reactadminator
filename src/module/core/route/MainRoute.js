import DashboardRoute from '../../dashboard/route';
import ChartsRoute from '../../charts/route/ChartsRoute';
import CalenadrRoute from './../../calendar/route/index';
import FormRoute from './../../forms/route/FormRoute';
import mapRoute from '../../maps/route/mapRoute';

export const MainRoute = [
  {
    path: '/readminator/dashboard',
    component: DashboardRoute
  },
  {
    path: '/readminator/calendar',
    component: CalenadrRoute
  },
  {
    path: '/readminator/charts',
    component: ChartsRoute
  },
  {
    path: '/readminator/forms',
    component: FormRoute
  },
  {
    path: '/readminator/map',
    component: mapRoute
  },

  {path: '/readminator', component: DashboardRoute, exact: true}
];
