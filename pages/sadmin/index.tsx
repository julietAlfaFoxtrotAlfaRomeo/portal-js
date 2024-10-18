import { Box, Flex, Select, Spinner, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import ProductAnalytics from 'components/sadmin/ProductAnalytics';
import { parse } from 'cookie';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Sidebar from './Sidebar';

interface User {
    id: string;
    username?: string;
    email: string;
    role: string;
    createdAt: string;
}

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
        props: {}, // Hanya jika valid, lanjutkan dengan halaman
    };
};

const SuperAdminDashboard = () => {
    const sidebarWidth = useBreakpointValue({ base: 'full', md: '60' });
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [timeRange, setTimeRange] = useState('monthly'); // Default to monthly
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                if (!response.ok) {
                    throw new Error('Gagal mengambil data');
                }
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <Flex justify="center" align="center" height="100vh">
                <Spinner size="xl" />
            </Flex>
        );
    }


interface TransformedData {
    month?: string;
    date?: string;
    hour?: number;
    year?: number;
    count: number;
}

const transformData = (data: User[]): TransformedData[] => {
    if (timeRange === 'daily') {
        return data.map(user => ({
            date: user.createdAt.split('T')[0],
            count: 1,
        }));
    } else if (timeRange === 'hourly') {
        return data.map(user => ({
            hour: new Date(user.createdAt).getHours(),
            count: 1,
        }));
    } else if (timeRange === 'yearly') {
        return data.map(user => ({
            year: new Date(user.createdAt).getFullYear(),
            count: 1,
        }));
    } else {
        // Default to monthly
        return data.reduce<TransformedData[]>((acc, user) => {
            const month = new Date(user.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' });
            const existing = acc.find(item => item.month === month);
            if (existing) {
                existing.count += 1;
            } else {
                acc.push({ month, count: 1 });
            }
            return acc;
        }, []);
    }
};


    const registrationData = transformData(users);

    // Data untuk grafik pie
    const roleData = [
        { name: 'Admin', value: users.filter(user => user.role === 'ADMIN').length },
        { name: 'Super Admin', value: users.filter(user => user.role === 'SUPER_ADMIN').length },
        { name: 'Other Users', value: users.length - (users.filter(user => user.role === 'ADMIN').length + users.filter(user => user.role === 'SUPER_ADMIN').length) }
    ];

    // Warna untuk setiap sektor pie chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <Flex>
            <Sidebar />
            <Box ml={{ base: 0, md: sidebarWidth }} p="4" flex="1">
                <h1>Dashboard Super Admin</h1>
                <p>Selamat datang di panel super admin.</p>
                <ProductAnalytics />
                <Stack spacing={2} my={6}>
                    <Text fontSize="xl" fontWeight="bold">Ringkasan Analitik</Text>
                    <Flex justifyContent="space-around">
                        <Box bg="blue.100" p="4" borderRadius="md">
                            <Text>Total Pengguna</Text>
                            <Text fontSize="2xl" fontWeight="bold">{users.length}</Text>
                        </Box>
                        <Box bg="green.100" p="4" borderRadius="md">
                            <Text>Total Admin</Text>
                            <Text fontSize="2xl" fontWeight="bold">{users.filter(user => user.role === 'ADMIN').length}</Text>
                        </Box>
                        <Box bg="red.100" p="4" borderRadius="md">
                            <Text>Total Super Admin</Text>
                            <Text fontSize="2xl" fontWeight="bold">{users.filter(user => user.role === 'SUPER_ADMIN').length}</Text>
                        </Box>
                    </Flex>

                    <Flex mb={4} justify="center">
                        <Select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} placeholder="Pilih Rentang Waktu" width="200px">
                            <option value="daily">Harian</option>
                            <option value="hourly">Per Jam</option>
                            <option value="monthly">Bulanan</option>
                            <option value="yearly">Tahunan</option>
                        </Select>
                    </Flex>

                    {timeRange === 'monthly' && (
                        <LineChart width={500} height={300} data={registrationData}>
                            <Line type="monotone" dataKey="count" stroke="#8884d8" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                    )}

                    {timeRange === 'daily' && (
                        <LineChart width={500} height={300} data={registrationData}>
                            <Line type="monotone" dataKey="count" stroke="#8884d8" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                    )}

                    {timeRange === 'hourly' && (
                        <BarChart width={500} height={300} data={registrationData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="hour" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    )}

                    {timeRange === 'yearly' && (
                        <BarChart width={500} height={300} data={registrationData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    )}

                    <Flex my={6} direction="column" align="center">
                        <Text fontSize="xl" fontWeight="bold">Distribusi Pengguna Berdasarkan Peran</Text>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={roleData}
                                    dataKey="value"
                                    nameKey="name"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {roleData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Flex>

                    <Text fontSize="xl" fontWeight="bold">Data Pengguna</Text>
                    <Table variant="striped" colorScheme="primary">
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Nama Pengguna</Th>
                                <Th>Email</Th>
                                <Th>Peran</Th>
                                <Th>Dibuat Pada</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {users.map((user) => (
                                <Tr key={user.id}>
                                    <Td>{user.id}</Td>
                                    <Td>{user.username || 'N/A'}</Td>
                                    <Td>{user.email}</Td>
                                    <Td>{user.role}</Td>
                                    <Td>{new Date(user.createdAt).toLocaleDateString()}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Stack>
            </Box>
        </Flex>
    );
};

export default SuperAdminDashboard;
