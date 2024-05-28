import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/admin-dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// Tables
const User = Loadable(lazy(() => import('pages/admin/User')));
const Food = Loadable(lazy(() => import('pages/admin/Food')));
const Dish = Loadable(lazy(() => import('pages/admin/Dish')));
const Feedback = Loadable(lazy(() => import('pages/admin/Feedback')));
const Blog = Loadable(lazy(() => import('pages/admin/Blog')));
const Userlog = Loadable(lazy(() => import('pages/admin/Userlog')));

// // render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
  path: '/admin',
  element: <MainLayout />,
  children: [
    {
      path: '/admin',
      element: <DashboardDefault />
    },
    {
      path: '/admin/dashboard',
      element: <DashboardDefault />
    },
    {
      path: '/admin/users',
      element: <User />
    },
    {
      path: '/admin/food',
      element: <Food />
    },
    {
      path: '/admin/dish',
      element: <Dish />
    },
    {
      path: '/admin/feedback',
      element: <Feedback />
    },
    {
      path: '/admin/blog',
      element: <Blog />
    },
    {
      path: '/admin/Userlog',
      element: <Userlog />
    }
    // {
    //   path: 'color',
    //   element: <Color />
    // }
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // },
    // {
    //   path: 'shadow',
    //   element: <Shadow />
    // },
    // {
    //   path: 'typography',
    //   element: <Typography />
    // },
    // {
    //   path: 'icons/ant',
    //   element: <AntIcons />
    // }
  ]
};

export default AdminRoutes;
