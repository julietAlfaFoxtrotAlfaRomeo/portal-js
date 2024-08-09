import { Button, ButtonGroup, Center, Text } from "@chakra-ui/react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <Center mt="8">
            <ButtonGroup isAttached spacing="4">
                <Button
                    onClick={() => onPageChange(currentPage - 1)}
                    isDisabled={currentPage === 1}
                >
                    Back
                </Button>
                <Button
                    onClick={() => onPageChange(currentPage + 1)}
                    isDisabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </ButtonGroup>
            <Text ml="4">Page {currentPage} of {totalPages}</Text>
        </Center>
    );
};

export default Pagination;
