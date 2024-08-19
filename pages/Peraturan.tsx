import { Box, Button, Container, Heading, HStack, Input, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { peraturanData } from "../data/peraturan"; // Import data

const Peraturan = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredData = peraturanData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <Container maxW="container.xl" py={8} mt={{ base: 10, md: 20 }} px={{ base: 4, md: 0 }}>
            <Heading as="h1" mb={6} fontSize={{ base: '2xl', md: '4xl' }} textAlign={{ base: 'center', md: 'left' }}>
                TATA CARA, PERIZINAN, DAN PERATURAN
            </Heading>
            <VStack spacing={4} align="stretch" w="full">
                <Input
                    placeholder="Pencarian spesifik"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    mb={6}
                    w="full"
                    size={{ base: 'sm', md: 'md' }}
                />
                <Box overflowX="auto">
                    <Table variant="simple" size={{ base: 'sm', md: 'md' }}>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Judul</Th>
                                <Th>Kategori</Th>
                                <Th>File</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {currentData.map((item, index) => (
                                <Tr key={index}>
                                    <Td>{item.id}</Td>
                                    <Td>{item.title}</Td>
                                    <Td>{item.category}</Td>
                                    <Td>
                                        <Button as="a" href="#" colorScheme="primary" size="xs">
                                            {item.file}
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
                <Box mt={4} textAlign="center">
                    <Text fontSize={{ base: 'sm', md: 'md' }}>Menampilkan {currentData.length} dari {filteredData.length} entri</Text>
                </Box>
                <HStack spacing={4} mt={4} justify="center" w="full">
                    <Button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        size={{ base: 'sm', md: 'md' }}
                    >
                        Sebelumnya
                    </Button>
                    <Text fontSize={{ base: 'sm', md: 'md' }}>{currentPage} / {totalPages}</Text>
                    <Button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        size={{ base: 'sm', md: 'md' }}
                    >
                        Selanjutnya
                    </Button>
                </HStack>
            </VStack>
        </Container>
    );
};

export default Peraturan;
