import { AiFillHome } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { RiContactsFill, RiDashboardFill } from 'react-icons/ri';
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';

export const menuItem = [
  {
    path: '/',
    icon: <AiFillHome />,
    name: 'Home',
  },

  {
    path: '/about',
    name: 'About',
    icon: <FaInfoCircle />,
  },

  {
    path: '/contact',
    name: 'Contact',
    icon: <RiContactsFill />,
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <RiDashboardFill />,
  },

  {
    path: '/login',
    name: 'Login',
    icon: <BiLogInCircle />,
  },

  {
    path: '/logout',
    name: 'Logout',
    icon: <BiLogOutCircle />,
  },
];
