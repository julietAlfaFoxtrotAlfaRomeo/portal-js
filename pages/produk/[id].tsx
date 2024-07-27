import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const productDetails = Array.from({ length: 20 }, (_, i) => ({
    id: (i + 1).toString(),
    title: `Produk ${i + 1}`,
    description: `Deskripsi produk ${i + 1}`,
    imageUrl: '/okm.png',
})).reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
}, {});

const ProductDetail: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const product = id ? productDetails[id as string] : null;

    if (!product) {
        return <Box p="4">Produk tidak ditemukan.</Box>;
    }

    return (
        <Container maxW="container.md" py="8" mt="20">
            <Heading mb="4">{product.title}</Heading>
            <Image src={product.imageUrl} alt={product.title} />
            <Box mt="4">
                <Text>{product.description}</Text>
            </Box>
        </Container>
    );
};

export default ProductDetail;
