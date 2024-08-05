import { Box, Container, Heading, Image, Text, VStack } from '@chakra-ui/react';
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
        return <Box mt="20" p="4">Produk tidak ditemukan.</Box>;
    }

    return (
        <Container maxW="container.md" py={{ base: '6', md: '8' }} mt={{ base: '10', md: '20' }}>
            <VStack spacing={{ base: '4', md: '6' }} alignItems="start">
                <Heading mb="4" fontSize={{ base: '2xl', md: '4xl' }}>
                    {product.title}
                </Heading>
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={{ base: '100%', md: '75%' }}
                    borderRadius="md"
                    objectFit="cover"
                />
                <Box mt="4">
                    <Text fontSize={{ base: 'md', md: 'lg' }}>
                        {product.description}
                    </Text>
                </Box>
            </VStack>
        </Container>
    );
};

export default ProductDetail;
