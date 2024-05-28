// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const account = {
  id: 'account',
  title: 'Account',
  type: 'group',
  children: [
    {
      id: 'profile',
      title: 'Profile',
      type: 'item',
      url: '/user/profile',
      icon: icons.ChromeOutlined
    },
    {
      id: 'toc',
      title: 'Terms and Conditions',
      type: 'item',
      url: '/user/toc',
      icon: icons.ChromeOutlined
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/user/settings',
      icon: icons.ChromeOutlined
    },
    {
      id: 'logout',
      title: 'Log Out',
      type: 'item',
      // url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined
      // external: true,
      // target: false
    }
  ]
};

export default account;
