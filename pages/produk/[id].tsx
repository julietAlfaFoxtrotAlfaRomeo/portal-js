import { Box, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { products } from '../../data/products'; // Update path sesuai lokasi file products

interface ProductProps {
    product: {
        id: string;
        title: string;
        description: string;
        imageUrl: string;
        category: string;
        posted: string;
        location: string;
        contact: string;
        email: string;
    } | null;
}

const ProductDetail: NextPage<ProductProps> = ({ product }) => {
    const router = useRouter();
    const { id } = router.query;

    if (!product) {
        return <Box mt="20" p="4">Produk tidak ditemukan.</Box>;
    }

    return (
        <Container maxW="container.md" py={{ base: '6', md: '8' }} mt={{ base: '10', md: '20' }}>
            <VStack spacing={{ base: '4', md: '6' }} alignItems="start">
                <Heading mb="4" fontSize={{ base: '2xl', md: '4xl' }}>
                    {product.title}
                </Heading>
                <Flex direction={{ base: 'column', md: 'row' }} align="flex-start">
                    <Box flex="1" mr={{ base: '0', md: '10' }} mb={{ base: '4', md: '0' }}>
                        <Image
                            src={product.imageUrl}
                            alt={product.title}
                            width="100%"
                            borderRadius="md"
                            objectFit="cover"
                        />
                    </Box>
                    <Box flex="2">
                        <Text fontSize={{ base: 'md', md: 'lg' }} mb="2">{product.description}</Text>
                        <Text fontSize={{ base: 'md', md: 'lg' }} mb="2">Kategori: {product.category}</Text>
                        <Text fontSize={{ base: 'md', md: 'lg' }} mb="2">Diposting: {product.posted}</Text>
                        <Text fontSize={{ base: 'md', md: 'lg' }} mb="2">Lokasi: {product.location}</Text>
                        <Text fontSize={{ base: 'md', md: 'lg' }} mb="2">Kontak: {product.contact}</Text>
                        <Text fontSize={{ base: 'md', md: 'lg' }}>Email: {product.email}</Text>
                    </Box>
                </Flex>
            </VStack>
        </Container>
    );
};

// Fetch data for static paths
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = products.map(product => ({
        params: { id: product.id }
    }));
    return { paths, fallback: false };
};

// Fetch product details for static props
export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params!;
    const product = products.find(product => product.id === id) || null;

    return { props: { product } };
};

export default ProductDetail;
