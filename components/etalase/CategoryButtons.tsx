import { Tag, Wrap } from '@chakra-ui/react';

interface CategoryButtonsProps {
    selectedCategory: string;
    handleCategoryChange: (category: string) => void;
}

const categories = [
    'SEMUA PRODUK',
    'TERBARU',
    'MAKANAN & MINUMAN',
    'FASHION',
    'KOSMETIK',
    'KERAJINAN',
    'JASA',
    'DEKORASI',
    'AKSESORIS',
    'MULTIPRODUK',
];

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ selectedCategory, handleCategoryChange }) => {
    return (
        <Wrap
            mt={4}
            justify="center"
            spacing="4"
        >
            {categories.map(category => (
                <Tag
                    key={category}
                    variant="subtle"
                    colorScheme={selectedCategory === category ? 'purple' : 'gray'}
                    rounded="full"
                    px="3"
                    py="1.5"
                    cursor="pointer"
                    transition="all 0.3s ease"
                    _hover={{ bg: "purple.200", transform: "scale(1.05)" }}
                    _active={{ bg: "purple.300" }}
                    onClick={() => handleCategoryChange(category)}
                >
                    {category}
                </Tag>
            ))}
        </Wrap>
    );
};

export default CategoryButtons;
