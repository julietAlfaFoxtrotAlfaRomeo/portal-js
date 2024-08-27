import { Box, Flex, Icon, Link, useColorModeValue } from '@chakra-ui/react';
import { FiActivity, FiAward, FiBarChart, FiBell, FiCheckCircle, FiCheckSquare, FiClipboard, FiClock, FiCommand, FiHome, FiPackage, FiSettings, FiSliders, FiUser, FiUsers } from 'react-icons/fi';

const LinkItems = [
    { name: 'Dashboard', icon: FiHome, href: '/sadmin/' },
    { name: 'Master', icon: FiSettings, href: '/sadmin/master' },
    { name: 'Produk', icon: FiUsers, href: '/sadmin/produk' },
    { name: 'Kategori Produk', icon: FiActivity, href: '/sadmin/categories' },
    { name: 'Menu', icon: FiBell, href: '/sadmin/menu' },
    { name: 'User', icon: FiUser, href: '/sadmin/user' },
    { name: 'List Peserta', icon: FiClipboard, href: '/sadmin/list-peserta' },
    { name: 'Produk Peserta', icon: FiPackage, href: '/sadmin/produk-peserta' },
    { name: 'Tahap 1', icon: FiAward, href: '/sadmin/tahap-1' },
    { name: 'Tahap 2', icon: FiBarChart, href: '/sadmin/tahap-2' },
    { name: 'Hasil 1', icon: FiCheckCircle, href: '/sadmin/hasil-1' },
    { name: 'Hasil 2', icon: FiCheckSquare, href: '/sadmin/hasil-2' },
    { name: 'Hasil Tahap 1', icon: FiClock, href: '/sadmin/hasil-tahap-1' },
    { name: 'Hasil Tahap 2', icon: FiCommand, href: '/sadmin/hasil-tahap-2' },
    { name: 'Konfigurasi Kegiatan', icon: FiSettings, href: '/sadmin/konfigurasi-kegiatan' },
    { name: 'Konfigurasi HomePage', icon: FiSliders, href: '/sadmin/konfigurasi-homepage' },
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
                <Box fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">Super Admin</Box>
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
                        <Icon mr="4" fontSize={{ base: '18', md: '20' }} as={link.icon} />
                        {link.name}
                    </Flex>
                </Link>
            ))}
        </Box>
    );
};

export default Sidebar;
