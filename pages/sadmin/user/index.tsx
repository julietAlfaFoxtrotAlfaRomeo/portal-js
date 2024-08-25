import {
    Box,
    Button,
    Flex,
    Input,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';

const UserManagement = () => {
    const sidebarWidth = useBreakpointValue({ base: 'full', md: '60' });
    const [users, setUsers] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isEditing, setIsEditing] = useState<number | null>(null);

    useEffect(() => {
        // Fetch data from API
        fetch('/api/penguna')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    const handleEdit = (id: number) => {
        setIsEditing(id);
    };

    const handleSave = (id: number) => {
        // Logic to save the updated user data goes here
        setIsEditing(null);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter((user) =>
        user.businessName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Flex>
            <Sidebar />
            <Box ml={{ base: 0, md: sidebarWidth }} p="6" flex="1">
                <Flex mb="4">
                    <Input
                        placeholder="Search by business name"
                        value={searchTerm}
                        onChange={handleSearch}
                        width="300px"
                    />
                </Flex>
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Business Name</Th>
                                <Th>PIRT Number</Th>
                                <Th>Responsible Person</Th>
                                <Th>NIK</Th>
                                <Th>Business Address</Th>
                                <Th>Net Worth</Th>
                                <Th>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredUsers.map((user, index) => (
                                <Tr key={user.id}>
                                    <Td>{index + 1}</Td>
                                    <Td>
                                        {isEditing === user.id ? (
                                            <Input
                                                value={user.businessName}
                                                onChange={(e) =>
                                                    setUsers(users.map((u) =>
                                                        u.id === user.id
                                                            ? { ...u, businessName: e.target.value }
                                                            : u
                                                    ))
                                                }
                                            />
                                        ) : (
                                            user.businessName
                                        )}
                                    </Td>
                                    <Td>
                                        {isEditing === user.id ? (
                                            <Input
                                                value={user.pirtNumber}
                                                onChange={(e) =>
                                                    setUsers(users.map((u) =>
                                                        u.id === user.id
                                                            ? { ...u, pirtNumber: e.target.value }
                                                            : u
                                                    ))
                                                }
                                            />
                                        ) : (
                                            user.pirtNumber
                                        )}
                                    </Td>
                                    <Td>
                                        {isEditing === user.id ? (
                                            <Input
                                                value={user.responsiblePerson}
                                                onChange={(e) =>
                                                    setUsers(users.map((u) =>
                                                        u.id === user.id
                                                            ? { ...u, responsiblePerson: e.target.value }
                                                            : u
                                                    ))
                                                }
                                            />
                                        ) : (
                                            user.responsiblePerson
                                        )}
                                    </Td>
                                    <Td>
                                        {isEditing === user.id ? (
                                            <Input
                                                value={user.nik}
                                                onChange={(e) =>
                                                    setUsers(users.map((u) =>
                                                        u.id === user.id
                                                            ? { ...u, nik: e.target.value }
                                                            : u
                                                    ))
                                                }
                                            />
                                        ) : (
                                            user.nik
                                        )}
                                    </Td>
                                    <Td>
                                        {isEditing === user.id ? (
                                            <Input
                                                value={user.businessAddress}
                                                onChange={(e) =>
                                                    setUsers(users.map((u) =>
                                                        u.id === user.id
                                                            ? { ...u, businessAddress: e.target.value }
                                                            : u
                                                    ))
                                                }
                                            />
                                        ) : (
                                            user.businessAddress
                                        )}
                                    </Td>
                                    <Td>
                                        {isEditing === user.id ? (
                                            <Input
                                                value={user.netWorth}
                                                onChange={(e) =>
                                                    setUsers(users.map((u) =>
                                                        u.id === user.id
                                                            ? { ...u, netWorth: e.target.value }
                                                            : u
                                                    ))
                                                }
                                            />
                                        ) : (
                                            user.netWorth
                                        )}
                                    </Td>
                                    <Td>
                                        {isEditing === user.id ? (
                                            <Button
                                                colorScheme="green"
                                                size="sm"
                                                onClick={() => handleSave(user.id)}
                                            >
                                                Save
                                            </Button>
                                        ) : (
                                            <Button
                                                colorScheme="blue"
                                                size="sm"
                                                onClick={() => handleEdit(user.id)}
                                            >
                                                Edit
                                            </Button>
                                        )}
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Flex>
    );
};

export default UserManagement;
