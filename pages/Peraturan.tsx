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
        <Container maxW="container.xl" py={8} mt={20}>
            <Heading as="h1" mb={6}>
                TATA CARA, PERIZINAN, DAN PERATURAN
            </Heading>
            <VStack spacing={4} align="start">
                <Input
                    placeholder="Pencarian spesifik"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    mb={6}
                />
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Judul</Th>
                            <Th>Kategori</Th>
                            <Th>File</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentData.map((item) => (
                            <Tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td>{item.title}</Td>
                                <Td>{item.category}</Td>
                                <Td>
                                    <Button as="a" href="#" colorScheme="primary" size="sm">
                                        {item.file}
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Box mt={4}>
                    <Text>Menampilkan {currentData.length} dari {filteredData.length} entri</Text>
                </Box>
                <HStack spacing={4} mt={4}>
                    <Button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Sebelumnya
                    </Button>
                    <Text>{currentPage} / {totalPages}</Text>
                    <Button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Selanjutnya
                    </Button>
                </HStack>
            </VStack>
        </Container>
    );
};

export default Peraturan;
