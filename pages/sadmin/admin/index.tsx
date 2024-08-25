import { Box, Button, Flex, FormControl, FormLabel, Input, useBreakpointValue } from '@chakra-ui/react';
import { parse } from 'cookie';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
    const cookies = parse(req.headers.cookie || '');
    const userSession = cookies['user-session'];

    if (!userSession) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const sessionData = JSON.parse(userSession);

    if (sessionData.role !== 'super_admin') {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};

interface Admin {
    id: number;
    email: string;
    role: string;
}

const AdminManagement = () => {
    const sidebarWidth = useBreakpointValue({ base: 'full', md: '60' });
    const [admins, setAdmins] = useState<Admin[]>([]);
    const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        fetch('/api/users?role=admin')
            .then((response) => response.json())
            .then((data) => setAdmins(data))
            .catch((error) => console.error('Error fetching admins:', error));
    }, []);

    const handleEditClick = (admin: Admin) => {
        setSelectedAdmin(admin);
        setEmail(admin.email);
        setRole(admin.role);
    };

    const handleUpdate = () => {
        if (selectedAdmin) {
            fetch(`/api/users/${selectedAdmin.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, role }),
            })
                .then((response) => response.json())
                .then((updatedAdmin) => {
                    setAdmins((prev) =>
                        prev.map((admin) =>
                            admin.id === updatedAdmin.id ? updatedAdmin : admin
                        )
                    );
                    setSelectedAdmin(null);
                    setEmail('');
                    setRole('');
                })
                .catch((error) => console.error('Error updating admin:', error));
        }
    };

    return (
        <Flex>
            <Sidebar />
            <Box ml={{ base: 0, md: sidebarWidth }} p="4" flex="1">
                <h1>Admin Management</h1>
                <p>Manage what admins can do.</p>
                <Box>
                    {admins.map((admin) => (
                        <Box key={admin.id} p="4" borderWidth="1px" borderRadius="lg" mb="4">
                            <h2>{admin.email}</h2>
                            <p>Role: {admin.role}</p>
                            <Button onClick={() => handleEditClick(admin)}>Edit</Button>
                        </Box>
                    ))}
                </Box>
                {selectedAdmin && (
                    <Box mt="4" p="4" borderWidth="1px" borderRadius="lg">
                        <h2>Edit Admin</h2>
                        <FormControl mb="4">
                            <FormLabel>Email</FormLabel>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl mb="4">
                            <FormLabel>Role</FormLabel>
                            <Input value={role} onChange={(e) => setRole(e.target.value)} />
                        </FormControl>
                        <Button onClick={handleUpdate}>Update</Button>
                    </Box>
                )}
            </Box>
        </Flex>
    );
};

export default AdminManagement;
