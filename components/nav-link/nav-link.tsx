import { Button, ButtonProps } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { forwardRef } from "react";

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean;
  href?: string;
  id?: string;
  children?: React.ReactNode; // Make sure children is a ReactNode
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => {
  const { href, isActive, children, ...rest } = props;

  return (
    <Button
      as={NextLink}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      fontWeight="medium"
      _hover={{
        bg: "purple.500",
        color: "white",
      }}
      _active={{
        bg: "purple.600",
        color: "white",
      }}
      {...rest}
    >
      {children} {/* Render children */}
    </Button>
  );
});

NavLink.displayName = "NavLink";
