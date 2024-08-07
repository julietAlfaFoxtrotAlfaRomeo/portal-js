import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";
import Link from "next/link";

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean;
  href?: string;
  id?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { href, isActive, ...rest } = props;

  return (
    <Button
      as={Link}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      fontWeight="medium"
      _hover={{
        bg: "purple.500", // Background color on hover
        color: "white",   // Text color on hover
      }}
      _active={{
        bg: "purple.600", // Background color when active
        color: "white",   // Text color when active
      }}
      {...rest}
    />
  );
});

NavLink.displayName = "NavLink";
