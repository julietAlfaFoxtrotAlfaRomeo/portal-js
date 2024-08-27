import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    useToast,
    VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Sidebar from '../Sidebar';

const AddCategory = () => {
    const [name, setName] = useState('');
    const [businessGroup, setBusinessGroup] = useState('industri');
    const toast = useToast();
    const router = useRouter();

    const handleSave = async () => {
        if (!name.trim()) {
            toast({
                title: 'Nama Kategori tidak boleh kosong',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        try {
            await axios.post('/api/categories', {
                name,
                businessGroup,
            });
            toast({
                title: 'Kategori berhasil ditambahkan',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            router.push('/admin/categories');
        } catch (error) {
            toast({
                title: 'Gagal menambahkan kategori',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Flex direction={{ base: 'column', md: 'row' }} minH="100vh">
            <Sidebar />
            <Box flex="1" p={{ base: 4, md: 8 }}>
                <Heading mb={6}>Tambah Kategori</Heading>
                <VStack spacing={4} align="stretch">
                    <FormControl>
                        <FormLabel>Nama Kategori</FormLabel>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukkan nama kategori"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Kelompok Usaha</FormLabel>
                        <Select
                            value={businessGroup}
                            onChange={(e) => setBusinessGroup(e.target.value)}
                        >
                            <option value="industri">Industri</option>
                            <option value="non_industri">Non Industri</option>
                        </Select>
                    </FormControl>
                    <Button colorScheme="teal" onClick={handleSave} alignSelf="flex-start">
                        Tambah Kategori
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
};

export default AddCategory;
