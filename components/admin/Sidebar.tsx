// components/Sidebar.tsx
import {
    Box,
    CloseButton,
    Drawer,
    DrawerContent,
    Flex,
    Icon,
    Link,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { FiHome, FiMenu, FiSettings, FiUsers } from 'react-icons/fi';

const LinkItems = [
    { name: 'Dashboard', icon: FiHome, href: '/admin' },
    { name: 'Users', icon: FiUsers, href: '/admin/users' },
    { name: 'Settings', icon: FiSettings, href: '/admin/settings' },
];

const Sidebar = ({ ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box
                as="nav"
                pos="fixed"
                top="0"
                left="0"
                h="full"
                pb="10"
                overflowX="hidden"
                overflowY="auto"
                bg={useColorModeValue('white', 'gray.900')}
                borderRightWidth="1px"
                w={{ base: 'full', md: 60 }}
                {...rest}
            >
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Box fontSize="2xl" fontWeight="bold">
                        Admin
                    </Box>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} href={link.href}>
                        {link.name}
                    </NavItem>
                ))}
            </Box>

            <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
                <DrawerContent>
                    <Sidebar />
                </DrawerContent>
            </Drawer>

            <Flex ml={{ base: 0, md: 60 }} p="4" display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
                <Icon as={FiMenu} />
            </Flex>
        </>
    );
};

const NavItem = ({ icon, children, href, ...rest }) => {
    return (
        <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && <Icon mr="4" fontSize="16" as={icon} />}
                {children}
            </Flex>
        </Link>
    );
};

export default Sidebar;
