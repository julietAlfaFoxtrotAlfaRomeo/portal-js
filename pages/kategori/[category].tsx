import { Box, Heading, Text } from '@chakra-ui/react';
import { SEO } from 'components/seo/seo';
import { useRouter } from 'next/router';

const CategoryPage = () => {
    const router = useRouter();
    const { category } = router.query;

    return (
        <Box mt="20">
            <SEO title={`Kategori: ${category}`} />
            <Heading as="h1">Kategori: {category}</Heading>
            <Text fontSize="lg">
                Menampilkan produk untuk kategori: {category}.
            </Text>
            {/* Tambahkan komponen dan logika lainnya sesuai kebutuhan */}
        </Box>
    );
};

export default CategoryPage;
