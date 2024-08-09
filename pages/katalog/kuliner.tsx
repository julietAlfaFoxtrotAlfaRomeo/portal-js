import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Text
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { products } from "../../data/kuliner";
import { provincesAndCities } from "../../data/provincesAndCities";

const ITEMS_PER_PAGE = 4;

const CatalogPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProvince(e.target.value);
        setSelectedCity(""); // Reset city when province changes
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(e.target.value);
    };

    const resetFilters = () => {
        setSearchTerm("");
        setSelectedProvince("");
        setSelectedCity("");
    };

    const filteredProducts = products.filter((product) => {
        return (
            (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedProvince === "" || product.province === selectedProvince) &&
            (selectedCity === "" || product.city === selectedCity)
        );
    });

    const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    return (
        <Container maxW="container.xl" py={8} mt={20}>
            <Heading mb={6} textAlign="center">Katalog Kuliner Nusantara</Heading>
            <Flex
                mb={6}
                justify="center"
                align="center"
                direction={{ base: "column", md: "row" }}
                gap={4}
            >
                <FormControl width={{ base: "100%", md: "auto" }} mr={{ base: 0, md: 2 }}>
                    <FormLabel htmlFor="search" srOnly>Temukan Sesuatu</FormLabel>
                    <Input
                        id="search"
                        type="text"
                        placeholder="Cari produk..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </FormControl>
                <FormControl width={{ base: "100%", md: "auto" }} mr={{ base: 0, md: 2 }}>
                    <FormLabel htmlFor="province" srOnly>Provinsi</FormLabel>
                    <Select
                        id="province"
                        placeholder="Pilih Provinsi"
                        value={selectedProvince}
                        onChange={handleProvinceChange}
                    >
                        {Object.keys(provincesAndCities).map((province) => (
                            <option key={province} value={province}>
                                {province}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <FormControl width={{ base: "100%", md: "auto" }} mr={{ base: 0, md: 2 }}>
                    <FormLabel htmlFor="city" srOnly>Kota</FormLabel>
                    <Select
                        id="city"
                        placeholder="Pilih Kota"
                        value={selectedCity}
                        onChange={handleCityChange}
                        isDisabled={!selectedProvince} // Disable city select if no province selected
                    >
                        {selectedProvince && provincesAndCities[selectedProvince]?.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </Select>
                </FormControl>
                <Button colorScheme="primary" onClick={resetFilters}>Cari</Button>
            </Flex>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={8}>
                {paginatedProducts.map((product, index) => (
                    <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                        <Box
                            position="relative"
                            width="100%"
                            height="0"
                            paddingBottom="100%" // This creates the 1:1 aspect ratio
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </Box>
                        <Text fontWeight="bold" mt={2}>{product.name}</Text>
                        <Text fontSize="sm" color="gray.600">{product.address}</Text>
                        <Text fontSize="sm" color="gray.600">Buka: {product.hours}</Text>
                        <Text fontSize="sm" color="gray.600">Kategori: {product.category}</Text>
                        <Text mt={2}>{product.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
            <Flex mt={6} justify="center">
                <Box>
                    <Flex mb={4} justify="center">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i}
                                mx={1}
                                onClick={() => setCurrentPage(i + 1)}
                                colorScheme={currentPage === i + 1 ? "primary" : "gray"}
                            >
                                {i + 1}
                            </Button>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </Container>
    );
};

export default CatalogPage;
