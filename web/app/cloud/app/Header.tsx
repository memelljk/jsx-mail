'use client';

import { titleCase } from '@/utils/title-case';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  User,
} from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useCloudAppContext } from './context';
import Link from 'next/link';
import axios from '@/utils/axios';
import { toast } from 'react-toastify';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useCloudAppContext();
  const router = useRouter();

  const logout = useCallback(async () => {
    const toastId = toast.loading('Logging out...');

    try {
      await axios.delete('/session');
      toast.success('Logged out successfully');
      document.cookie = 'token=; path=/; max-age=0;';
      router.push('/cloud/sign-in');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      toast.dismiss(toastId);
    }
  }, [router]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      isBlurred
      shouldHideOnScroll
      maxWidth="full"
    >
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <div>
              <Avatar
                as="button"
                className="flex sm:hidden"
                name={titleCase(user?.name || '')}
                showFallback={false}
              />
              <User
                name={titleCase(user?.name || '')}
                description={user?.email}
                as="button"
                className="hidden sm:flex"
              />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user?.email || 'Loading...'}</p>
            </DropdownItem>
            <DropdownItem key="settings">
              <Link href="/cloud/app/account/settings" className="w-full block">
                My Settings
              </Link>
            </DropdownItem>
            <DropdownItem key="billing">
              <Link href="/cloud/app/account/billing" className="w-full block">
                Billing
              </Link>
            </DropdownItem>
            <DropdownItem key="sessions">
              <Link href="/cloud/app/account/sessions" className="w-full block">
                Sessions
              </Link>
            </DropdownItem>
            <DropdownItem key="domains">
              <Link href="/cloud/app/domains" className="w-full block">
                Domains
              </Link>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={logout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

function Logo() {
  return (
    <Link
      href="/cloud/app"
      aria-label="Go to the home page"
      className="flex items-center gap-2"
    >
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />
    </Link>
  );
}