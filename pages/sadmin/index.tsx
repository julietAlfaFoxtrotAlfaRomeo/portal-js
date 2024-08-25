import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { parse } from 'cookie';
import { GetServerSideProps } from 'next';
import Sidebar from './Sidebar';

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

const SuperAdminDashboard = () => {
    const sidebarWidth = useBreakpointValue({ base: 'full', md: '60' });

    return (
        <Flex>
            <Sidebar />
            <Box ml={{ base: 0, md: sidebarWidth }} p="4" flex="1">
                <h1>Super Admin Dashboard</h1>
                <p>Welcome to the super admin panel.</p>
            </Box>
        </Flex>
    );
};

export default SuperAdminDashboard;
