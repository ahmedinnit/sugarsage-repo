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
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
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
