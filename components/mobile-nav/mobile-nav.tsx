import {
  Box,
  CloseButton,
  Collapse,
  Flex,
  HStack,
  IconButton,
  IconButtonProps,
  LinkProps,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { Logo } from 'components/layout/logo'
import siteConfig from 'data/config'
import { AnimatePresence, motion } from 'framer-motion'
import useRouteChanged from 'hooks/use-route-changed'
import { useRouter } from 'next/router'
import * as React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { RemoveScroll } from 'react-remove-scroll'

interface NavLinkProps extends LinkProps {
  label: string
  href?: string
  isActive?: boolean
  subLinks?: { label: string, href?: string, id: string }[]
}

function NavLink({ href, children, isActive, subLinks, ...rest }: NavLinkProps) {
  const { pathname } = useRouter()
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false)
  const bgActiveHoverColor = useColorModeValue('gray.100', 'whiteAlpha.100')

  const [, group] = href?.split('/') || []
  isActive = isActive ?? pathname.includes(group)

  const handleToggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen)
  }

  return (
    <Box>
      <Link
        href={href}
        display="inline-flex"
        flex="1"
        minH="40px"
        px="8"
        py="3"
        transition="0.2s all"
        fontWeight={isActive ? 'semibold' : 'medium'}
        borderColor={isActive ? 'purple.400' : undefined}
        borderBottomWidth="1px"
        color={isActive ? 'purple.500' : undefined}
        _hover={{
          bg: isActive ? 'purple.500' : bgActiveHoverColor,
        }}
        {...rest}
        onClick={subLinks ? handleToggleSubMenu : undefined}
      >
        {children}
      </Link>
      {subLinks && (
        <Collapse in={isSubMenuOpen}>
          <Box mt="2" pl="8">
            {subLinks.map((subLink) => (
              <Link
                key={subLink.id}
                href={subLink.href || "#"}
                display="block"
                px="8"
                py="2"
                _hover={{ bg: 'purple.50' }}
              >
                {subLink.label}
              </Link>
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  )
}

interface MobileNavContentProps {
  isOpen?: boolean
  onClose?: () => void
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose = () => { } } = props
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  const { pathname } = useRouter()
  const bgColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')

  useRouteChanged(onClose)

  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false })

  React.useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose()
    }
  }, [showOnBreakpoint, onClose])

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus()
      })
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Flex
              direction="column"
              w="100%"
              bg={bgColor}
              h="100vh"
              overflow="auto"
              pos="absolute"
              top="0"
              left="0"
              zIndex="modal"
              pb="8"
              backdropFilter="blur(5px)"
            >
              <Box>
                <Flex justify="space-between" px="8" pt="4" pb="4">
                  <Logo />
                  <HStack spacing="5">
                    <CloseButton ref={closeBtnRef} onClick={onClose} />
                  </HStack>
                </Flex>
                <Stack alignItems="stretch" spacing="0">
                  {siteConfig.header.links.map(({ href, id, label, subLinks, ...props }, i) => (
                    <NavLink
                      href={href || `/#${id}`}
                      key={i}
                      subLinks={subLinks}
                      {...(props as any)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </Stack>
              </Box>
            </Flex>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  )
}

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: 'flex', md: 'none' }}
        fontSize="20px"
        color={useColorModeValue('gray.800', 'inherit')}
        variant="ghost"
        icon={<AiOutlineMenu />}
        {...props}
        aria-label="Open menu"
      />
    )
  }
)

MobileNavButton.displayName = 'MobileNavButton'
