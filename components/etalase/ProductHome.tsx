import { Box, Image, Link, Text } from "@chakra-ui/react";
import NextLink from 'next/link'; // Import Next.js Link component
import React from "react";

interface ProductCardProps {
    id: string;
    title: string;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, imageUrl }) => {
    return (
        <NextLink href={`/etalase`} passHref>
            <Link
                _hover={{ textDecoration: 'none' }} // Menghilangkan underline saat hover
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
                display="block"
                transition="all 0.3s ease" // Transisi halus untuk efek hover
            >
                <Box
                    width="100%"
                    height="0"
                    paddingBottom="100%" // Membuat aspek rasio 1:1
                    position="relative"
                >
                    <Image
                        src={imageUrl}
                        alt={title}
                        objectFit="cover" // Memastikan gambar mengisi area tanpa distorsi
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                    />
                </Box>
                <Box p="6">
                    <Text fontWeight="bold" fontSize="lg">{title}</Text>
                </Box>
            </Link>
        </NextLink>
    );
};

export default ProductCard;
