import { Box, Button, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Publikasi = () => {
    return (
        <Container maxW="container.xl" py={8} mt={20}>
            <Heading as="h1" mb={6}>
                JADWAL KEGIATAN DAN PUBLIKASI
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
                    <Heading as="h2" size="lg" mb={4}>
                        Kegiatan - Jadwal Pameran
                    </Heading>
                    <Text fontSize="md" mb={4}>
                        Dapatkan informasi seputar kegiatan dan jadwal pameran
                    </Text>
                    <NextLink href="/jadwal" passHref>
                        <Button colorScheme="primary" size="md">
                            Lihat Detail
                        </Button>
                    </NextLink>
                </Box>
                <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
                    <Heading as="h2" size="lg" mb={4}>
                        Peraturan - Regulasi
                    </Heading>
                    <Text fontSize="md" mb={4}>
                        Informasi seputar Tatacara, Perizinan, dan Peraturan terkait produk dalam negeri
                    </Text>
                    <NextLink href="/Peraturan" passHref>
                        <Button colorScheme="primary" size="md">
                            Lihat Detail
                        </Button>
                    </NextLink>
                </Box>
                <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
                    <Heading as="h2" size="lg" mb={4}>
                        Video Produk Indonesia
                    </Heading>
                    <Text fontSize="md" mb={4}>
                        Daftar video produk Indonesia
                    </Text>
                    <NextLink href="/video" passHref>
                        <Button colorScheme="primary" size="md">
                            Lihat Detail
                        </Button>
                    </NextLink>
                </Box>
            </SimpleGrid>
        </Container>
    );
};

export default Publikasi;
