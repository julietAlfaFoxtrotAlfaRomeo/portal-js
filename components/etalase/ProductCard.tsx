import { Box, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    title: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageUrl }) => {
    return (
        <Link href={`/produk/${id}`} passHref>
            <Box
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
                cursor="pointer"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                    transform: 'scale(1.05)',
                    boxShadow: 'lg',
                }}
            >
                <Image src={imageUrl} alt={title} />
                <Box p="4">
                    <Heading size="md">{title}</Heading>
                </Box>
            </Box>
        </Link>
    );
};

export default ProductCard;
