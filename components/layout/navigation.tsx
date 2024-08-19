import { HStack, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
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
