// pages/etalase.tsx
import { Container, Grid, Heading } from '@chakra-ui/react';
import ProductCard from 'components/etalase/ProductCard';
import { NextPage } from 'next';
import { useState } from 'react';
import { products } from '../data/products';

const ITEMS_PER_PAGE = 6; // Mengatur maksimal 6 produk per kategori

const Etalase: NextPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('SEMUA PRODUK');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    // Filter produk berdasarkan kategori
    const filteredProducts = selectedCategory === 'SEMUA PRODUK'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const displayedProducts = filteredProducts.slice(0, ITEMS_PER_PAGE);

    return (
        <Container maxW="container.xl" py="8" >
            <Heading
                lineHeight="short"
                fontSize={["4xl", "6xl"]}
                textAlign="center"
                as="p"
                data-aos="fade-right"
                className="primary-heading"
                mb={6}
            >
                Etalase
            </Heading>
            <Grid
                templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap="4"
            >
                {displayedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </Grid>

        </Container>
    );
};

export default Etalase;
