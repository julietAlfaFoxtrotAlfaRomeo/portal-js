// components/Header.tsx
import { Avatar, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react';
import { FiBell, FiChevronDown } from 'react-icons/fi';

const Header = () => {
    return (
        <Flex as="header" align="center" justify="space-between" p="4" borderBottomWidth="1px" w="full">
            <IconButton aria-label="Notifications" icon={<FiBell />} size="lg" />
            <HStack spacing="4">
                <Flex align="center">
                    <Menu>
                        <MenuButton as={IconButton} icon={<FiChevronDown />} variant="link">
                            <Avatar size="sm" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuDivider />
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default Header;
