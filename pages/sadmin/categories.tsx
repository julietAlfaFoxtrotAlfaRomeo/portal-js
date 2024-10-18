import {
    Box,
    Button,
    Flex,
    Heading,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';


interface Category {
    id: number;
    name: string;
    businessGroup: string;
}

const AdminCategories = () => {
    // Berikan tipe Category[] untuk state categories
    const [categories, setCategories] = useState<Category[]>([]);
    const toast = useToast();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('/api/categories');
                setCategories(response.data);
            } catch (error) {
                toast({
                    title: 'Error loading categories',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        };

        fetchCategories();
    }, []);

    return (
        <Box p={4}>
            <Sidebar />
            <Flex justify="space-between" align="center" mb={4}>
                <Heading size="lg">Manage Categories</Heading>
                <Link href="/sadmin/add-category">
                    <Button colorScheme="teal">Add New Category</Button>
                </Link>
            </Flex>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>No</Th>
                        <Th>Kategori</Th>
                        <Th>Kelompok Usaha</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {categories.map((category, index) => (
                        <Tr key={category.id}>
                            <Td>{index + 1}</Td>
                            <Td>{category.name}</Td>
                            <Td>{category.businessGroup}</Td>
                            <Td>
                                <Link href={`/sadmin/edit-category/${category.id}`}>
                                    <Button colorScheme="blue" size="sm" mr={2}>
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    colorScheme="red"
                                    size="sm"
                                    onClick={async () => {
                                        try {
                                            await axios.delete(`/api/categories/${category.id}`);
                                            toast({
                                                title: 'Category deleted successfully',
                                                status: 'success',
                                                duration: 3000,
                                                isClosable: true,
                                            });
                                            setCategories(categories.filter(cat => cat.id !== category.id));
                                        } catch (error) {
                                            toast({
                                                title: 'Error deleting category',
                                                status: 'error',
                                                duration: 3000,
                                                isClosable: true,
                                            });
                                        }
                                    }}
                                >
                                    Delete
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default AdminCategories;
