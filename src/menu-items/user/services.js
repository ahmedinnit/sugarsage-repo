// assets
// import { UserOutlined } from '@ant-design/icons';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { RiFeedbackLine } from 'react-icons/ri';
import { TfiWrite } from 'react-icons/tfi';
import { BiDish } from 'react-icons/bi';
import { FaRegFileCode } from 'react-icons/fa';
// import Breadcrumbs from 'components/@extended/Breadcrumbs';

// icons
const icons = {
  HiOutlineUsers,
  IoFastFoodOutline,
  BiDish,
  RiFeedbackLine,
  FaRegFileCode,
  TfiWrite
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const services = {
  id: 'services',
  title: 'Services',
  type: 'group',
  children: [
    {
      id: 'getmealplan',
      title: 'Get Meal Plan',
      type: 'item',
      url: '/user/mealplan',
      icon: icons.HiOutlineUsers
      // breadcrumbs: false
      // target: true
    },
    {
      id: 'healthtracker',
      title: 'Health Tracker',
      type: 'item',
      url: '/user/healthtrack',
      icon: icons.IoFastFoodOutline
      // breadcrumbs: false
      // target: true
    },
    {
      id: 'activitytracker',
      title: 'Activity Tracker',
      type: 'item',
      url: '/user/activitytrack',
      icon: icons.BiDish
      // breadcrumbs: false
      // target: true
    },
    {
      id: 'feedback',
      title: 'Feedback',
      type: 'item',
      url: '/user/feedback',
      icon: icons.RiFeedbackLine
      // breadcrumbs: false
      // target: true
    },
    {
      id: 'blogs',
      title: 'Blogs',
      type: 'item',
      url: '/user/blogs',
      icon: icons.FaRegFileCode
      // breadcrumbs: false
      // target: true
    }
  ]
};

export default services;
