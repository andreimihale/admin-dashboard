import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Layers, LayoutDashboard, LogOut, Tag } from 'lucide-react';
import MenuLink from './menuLink/MenuLink';
import styles from './sidebar.module.css';

interface MenuItemProps {
  title: string;
  list: {
    title: string;
    path: string;
    icon: any;
  }[];
}
interface MenuItemsProps extends Array<MenuItemProps> {}

const Sidebar = () => {
  const menuItems: MenuItemsProps = [
    {
      title: 'Analytics',
      list: [
        { title: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard /> },
      ],
    },
    {
      title: 'Blog',
      list: [
        {
          title: 'Posts',
          path: '/dashboard/blog',
          icon: <Layers />,
        },
        {
          title: 'Categories',
          path: '/dashboard/blog/tags',
          icon: <Tag />,
        },
      ],
    },
    {
      title: 'User',
      list: [],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Avatar className='select-none'>
          <AvatarImage src='/avatar.jpg' alt='avatar' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className={styles.userDetails}>
          <h3 className={styles.username}>John Doe</h3>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <LogOut />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
