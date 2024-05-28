import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
// const Dashboard = Loadable(lazy(() => import('pages/user/dashboard')));
const Dashboard = Loadable(lazy(() => import('pages/admin-dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// Tables
const MealPlans = Loadable(lazy(() => import('pages/user/MealPlan')));
const HTrack = Loadable(lazy(() => import('pages/user/HealthTrack')));
const ATrack = Loadable(lazy(() => import('pages/user/ActivityTrack')));
const Feedback = Loadable(lazy(() => import('pages/user/Feedback')));
const Blog = Loadable(lazy(() => import('pages/user/Blogs')));
const Profile = Loadable(lazy(() => import('pages/user/Profile')));

// // render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const UserRoutes = {
  path: '/user',
  element: <MainLayout />,
  children: [
    {
      path: '/user',
      element: <Dashboard />
    },
    {
      path: '/user/dashboard',
      element: <Dashboard />
    },
    {
      path: '/user/mealplan',
      element: <MealPlans />
    },
    {
      path: '/user/healthtrack',
      element: <HTrack />
    },
    {
      path: '/user/activitytrack',
      element: <ATrack />
    },
    {
      path: '/user/feedback',
      element: <Feedback />
    },
    {
      path: '/user/blogs',
      element: <Blog />
    },
    {
      path: '/user/profile',
      element: <Profile />
    }
  ]
};

export default UserRoutes;
