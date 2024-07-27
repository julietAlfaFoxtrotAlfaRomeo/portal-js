import { Button, ButtonGroup } from '@chakra-ui/react';

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
    'MULTIPRODUK'
];

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ selectedCategory, handleCategoryChange }) => {
    return (
        <ButtonGroup mb="6" spacing="4">
            {categories.map(category => (
                <Button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    colorScheme={selectedCategory === category ? 'purple' : 'gray'}
                    size="sm"
                >
                    {category}
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default CategoryButtons;
