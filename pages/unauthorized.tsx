// pages/unauthorized.tsx

import { Box, Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Unauthorized = () => {
    const router = useRouter();

    return (
        <Box textAlign="center" p={5} mt={20} mb={20}>
            <Text fontSize="2xl" mb={4}>Akses Ditolak</Text>
            <Text mb={6}>Anda tidak memiliki izin untuk mengakses halaman ini.</Text>
            <Button colorScheme="blue" onClick={() => router.push('/login')}>
                Kembali ke Halaman Login
            </Button>
        </Box>
    );
};

export default Unauthorized;
