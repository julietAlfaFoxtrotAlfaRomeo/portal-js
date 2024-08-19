// pages/etalase.tsx
import { Box, Button, Container, Grid, Heading, HStack } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CategoryButtons from 'components/etalase/CategoryButtons';
import ProductCard from 'components/etalase/ProductCard';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { products } from '../data/products';

const ITEMS_PER_PAGE = 10;

const Pagination: React.FC<{ currentPage: number, totalPages: number, onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <Box textAlign="center" mt="6">
            <HStack spacing="4" justifyContent="center">
                <Button
                    onClick={() => onPageChange(currentPage - 1)}
                    isDisabled={currentPage === 1}
                >
                    Previous
                </Button>
                {pageNumbers.map((page) => (
                    <Button
                        key={page}
                        onClick={() => onPageChange(page)}
                        variant={page === currentPage ? 'solid' : 'outline'}
                        colorScheme={page === currentPage ? 'primary' : 'gray'}
                    >
                        {page}
                    </Button>
                ))}
                <Button
                    onClick={() => onPageChange(currentPage + 1)}
                    isDisabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </HStack>
        </Box>
    );
};

const Etalase: NextPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('SEMUA PRODUK');
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const filteredProducts = selectedCategory === 'SEMUA PRODUK'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const currentProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <Container maxW="container.xl" py="8" mt="20">
            <Heading
                mb="6"
                textAlign="center"
                size="8xl"
                data-aos="fade-up"
            >
                Etalase Produk
            </Heading>
            <CategoryButtons selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap="6"
            >
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </Grid>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </Container>
    );
};

export default Etalase;
