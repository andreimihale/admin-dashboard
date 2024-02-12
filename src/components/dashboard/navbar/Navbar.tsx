'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <Search />
          <Input type='text' placeholder='Search...' className={styles.input} />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer select-none'>
              <AvatarImage src='/avatar.jpg' alt='avatar' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel className='scroll-m-20 font-semibold tracking-tight'>
                John Doe
              </DropdownMenuLabel>
              <DropdownMenuLabel className='text-xs font-medium leading-none text-muted-foreground'>
                alex_andrei200@yahoo.com
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
