'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './menuLink.module.css';

interface MenuLinkItem {
  item: {
    title: string;
    path: string;
    icon: any;
  };
}
const MenuLink = ({ item: { title, path, icon } }: MenuLinkItem) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${styles.container} ${pathname === path && styles.active}`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
