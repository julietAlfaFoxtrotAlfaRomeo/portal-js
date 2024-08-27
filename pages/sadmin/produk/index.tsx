// pages/products/index.tsx
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    List,
    ListItem,
    Select,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    username: string;
    email: string;
    businessName: string;
    status: string;
    categoryId?: number;
    photoUrl?: string;
}

interface Category {
    id: number;
    name: string;
}

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [form, setForm] = useState<Partial<Product>>({});
    const router = useRouter();

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        const res = await fetch('/api/product');
        const data = await res.json();
        setProducts(data);
    };

    const fetchCategories = async () => {
        const res = await fetch('/api/category');
        const data = await res.json();
        setCategories(data);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (form.id) {
            await fetch('/api/product', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
        } else {
            await fetch('/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
        }
        setForm({});
        fetchProducts();
    };

    const handleDelete = async (id: number) => {
        await fetch(`/api/product?id=${id}`, {
            method: 'DELETE',
        });
        fetchProducts();
    };

    const handleEdit = (product: Product) => {
        setForm(product);
    };

    const updateStatus = async (id: number, status: string) => {
        await fetch(`/api/product`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, status }),
        });
        fetchProducts();
    };

    return (
        <Box>
            <Sidebar />
            <Box p={8} maxWidth="900px" mx="auto">
                <Heading as="h1" mb={6}>Product Management</Heading>
                <Box as="form" onSubmit={handleSubmit} mb={8}>
                    <Stack spacing={4}>
                        <FormControl id="name" isRequired>
                            <FormLabel>Product Name</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                value={form.name || ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl id="description">
                            <FormLabel>Description</FormLabel>
                            <Input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={form.description || ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl id="price" isRequired>
                            <FormLabel>Price</FormLabel>
                            <Input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={form.price || ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl id="stock" isRequired>
                            <FormLabel>Stock</FormLabel>
                            <Input
                                type="number"
                                name="stock"
                                placeholder="Stock"
                                value={form.stock || ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl id="categoryId">
                            <FormLabel>Category</FormLabel>
                            <Select
                                name="categoryId"
                                placeholder="Select category"
                                value={form.categoryId || ''}
                                onChange={handleInputChange}
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <Button type="submit" colorScheme="blue">
                            {form.id ? 'Update' : 'Create'}
                        </Button>
                    </Stack>
                </Box>

                <List spacing={3}>
                    {products.map((product) => (
                        <ListItem key={product.id} p={4} borderWidth="1px" borderRadius="md">
                            <Text fontWeight="bold">{product.name}</Text>
                            <Text>Description: {product.description}</Text>
                            <Text>Price: {product.price}</Text>
                            <Text>Stock: {product.stock}</Text>
                            <Text>Category ID: {product.categoryId}</Text>
                            <Text>Username: {product.username}</Text>
                            <Text>Email: {product.email}</Text>
                            <Text>Business Name: {product.businessName}</Text>
                            <Text>Status: {product.status}</Text>
                            <Stack direction="row" spacing={4} mt={4}>
                                <Button colorScheme="teal" onClick={() => handleEdit(product)}>Edit</Button>
                                <Button colorScheme="red" onClick={() => handleDelete(product.id)}>Delete</Button>
                                <Button colorScheme="yellow" onClick={() => updateStatus(product.id, 'review')}>Review</Button>
                                <Button colorScheme="green" onClick={() => updateStatus(product.id, 'approved')}>Approved</Button>
                            </Stack>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default ProductsPage;
