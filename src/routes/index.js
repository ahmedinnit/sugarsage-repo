import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AdminRoutes, LoginRoutes, UserRoutes]);
}
