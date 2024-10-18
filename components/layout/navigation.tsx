import { HStack, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import axios from 'axios';
import { MobileNavButton, MobileNavContent } from "components/mobile-nav";
import { NavLink } from "components/nav-link";
import siteConfig from "data/config";
import { useScrollSpy } from "hooks/use-scrollspy";
import { useRouter } from "next/router";
import React from "react";

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure();
  const router = useRouter();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userRole, setUserRole] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Cek apakah user sudah login dan dapatkan role mereka
    axios.get('/api/check-auth')
      .then(response => {
        if (response.status === 200 && response.data.message === 'Sudah login') {
          setIsLoggedIn(true);
          setUserRole(response.data.role); // Dapatkan role dari respons API
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Redirect sesuai dengan role
      if (userRole === 'admin') {
        router.push('/admin');
      } else if (userRole === 'super_admin') {
        router.push('/sadmin');
      } else {
        router.push('/user'); // Default ke halaman user
      }
    } else {
      router.push('/login'); // Jika belum login, arahkan ke halaman login
    }
  };

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ href, id, subLinks, ...props }, i) => {
        if (subLinks) {
          return (
            <Menu key={i}>
              <MenuButton
                as={NavLink}
                aria-label={props.label}
                isActive={!!(id && activeId === id)}
                href={href}
              >
                {props.label}
              </MenuButton>
              <MenuList>
                {subLinks.map((subLink) => (
                  <MenuItem key={subLink.id}>
                    <NavLink href={subLink.href || "/katalog/kuiner"}>{subLink.label}</NavLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          );
        }
        return (
          <NavLink
            display={["none", null, "block"]}
            href={href || `/#${id}`}
            key={i}
            isActive={
              !!(
                (id && activeId === id) ||
                (href && !!router.asPath.match(new RegExp(href)))
              )
            }
            {...props}
          >
            {props.label}
          </NavLink>
        );
      })}

      <NavLink
        display={["none", null, "block"]}
        onClick={handleAuthAction}
        key="auth"
        variant="primary"
      >
        {isLoggedIn ? "Dashboard" : "Login"}
      </NavLink>

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  );
};

export default Navigation;
