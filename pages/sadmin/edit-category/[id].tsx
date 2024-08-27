import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
const EditCategory = () => {
    const router = useRouter();
    const { id } = router.query;
    const [name, setName] = useState('');
    const [businessGroup, setBusinessGroup] = useState('industri');
    const toast = useToast();

    useEffect(() => {
        const fetchCategory = async () => {
            if (!id) return;
            try {
                const response = await axios.get(`/api/categories/${id}`);
                setName(response.data.name);
                setBusinessGroup(response.data.businessGroup);
            } catch (error) {
                toast({
                    title: 'Error loading category',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        };

        fetchCategory();
    }, [id]);

    const handleSave = async () => {
        try {
            await axios.put(`/api/categories/${id}`, {
                name,
                businessGroup,
            });
            toast({
                title: 'Category updated successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            router.push('/sadmin/categories');
        } catch (error) {
            toast({
                title: 'Error updating category',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box p={4}>
            <Sidebar />
            <FormControl>
                <FormLabel>Nama Kategori</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Kelompok Usaha</FormLabel>
                <Select value={businessGroup} onChange={(e) => setBusinessGroup(e.target.value)}>
                    <option value="industri">Industri</option>
                    <option value="non_industri">Non Industri</option>
                </Select>
            </FormControl>
            <Button mt={4} colorScheme="teal" onClick={handleSave}>
                Save
            </Button>
        </Box>
    );
};

export default EditCategory;
