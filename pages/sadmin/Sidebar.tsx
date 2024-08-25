import { Box, Flex, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { FiHome, FiSettings, FiUsers } from 'react-icons/fi';

const LinkItems = [
    { name: 'Dashboard', icon: FiHome, href: '/sadmin/' },
    { name: 'Users', icon: FiUsers, href: '/sadmin/user' },
    { name: 'Settings', icon: FiSettings, href: '/sadmin/settings' },
    { name: 'Settings Admin', icon: FiSettings, href: '/sadmin/admin' },
];

const Sidebar = () => {
    return (
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
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Box fontSize="2xl" fontWeight="bold">Super Admin</Box>
            </Flex>
            {LinkItems.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    style={{ textDecoration: 'none' }}
                    _focus={{ boxShadow: 'none' }}
                >
                    <Flex
                        align="center"
                        p="4"
                        mx="4"
                        borderRadius="lg"
                        role="group"
                        cursor="pointer"
                        _hover={{ bg: 'purple.400', color: 'white' }}
                    >
                        <Icon mr="4" fontSize="16" as={link.icon} />
                        {link.name}
                    </Flex>
                </Link>
            ))}
        </Box>
    );
};

export default Sidebar;
