import { Avatar, Box, Button, Divider, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { getServerSideProps as authMiddleware } from '../api/auth';
import LogoutButton from "./logout";
export default function UserPage({ user }: { user: { username: string, email: string } }) {
    return (
        <Box maxW="auto" mx="auto" mt="20" mb={10} p={4} boxShadow="md" bg="whiteAlpha.200">
            <Flex alignItems="center" justifyContent="center" mb={2}>
                <Avatar name={user.username} src="/avatar.png" size="xl" border="2px solid #D3D3D3" />
            </Flex>
            <Heading textAlign="center" mb={1} fontSize="2xl" fontWeight="bold">Selamat Datang di Dashboard Anda</Heading>
            <Text textAlign="center" mb={2} fontSize="lg">Anda telah berhasil masuk.</Text>
            <VStack spacing={2} mb={2}>
                <Text textAlign="center" mb={2} fontSize="md">Nama Pengguna Anda: {user.username}</Text>
                <Text textAlign="center" mb={2} fontSize="md">Email Anda: {user.email}</Text>
                <Text textAlign="center" mb={2} fontSize="md">Anda dapat mengedit profil Anda dengan menekan tombol di bawah.</Text>
            </VStack>
            <Divider borderColor="gray.200" borderWidth={2} w="100%" my={2} />
            <HStack spacing={2} mt={2} justifyContent="center">
                <Button colorScheme="blue" size="md" _hover={{ bg: 'blue.500' }}>Edit Profil</Button>
                <Button colorScheme="green" size="md" _hover={{ bg: 'green.500' }}>Ganti Password</Button>
                <LogoutButton />
            </HStack>
            <VStack spacing={2} mt={2}>
                <Heading size="md" fontWeight="bold">Riwayat Aktivitas</Heading>
                <Text textAlign="center" mb={2} fontSize="md">Anda belum memiliki riwayat aktivitas.</Text>
            </VStack>
        </Box>
    );
}

export const getServerSideProps = authMiddleware;
