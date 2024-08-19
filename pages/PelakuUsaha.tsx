import { Button, Container, FormControl, FormLabel, Grid, Heading, Input, Select, Stack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

const categories = ['Semua Kategori', 'Produk A', 'Produk B']; // Tambahkan kategori sesuai kebutuhan
const provinces = ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah']; // Tambahkan provinsi sesuai kebutuhan
const cities = ['Jakarta Selatan', 'Bandung', 'Semarang']; // Tambahkan kabupaten/kota sesuai kebutuhan

const businesses = [
    { id: '1', name: 'Usaha 1', product: 'Produk A', address: 'Alamat 1', city: 'Jakarta Selatan', province: 'DKI Jakarta', phone: '08123456789', email: 'email1@example.com' },
    { id: '2', name: 'Usaha 2', product: 'Produk B', address: 'Alamat 2', city: 'Bandung', province: 'Jawa Barat', phone: '08234567890', email: 'email2@example.com' },
    { id: '3', name: 'Usaha 3', product: 'Produk A', address: 'Alamat 3', city: 'Semarang', province: 'Jawa Tengah', phone: '08345678901', email: 'email3@example.com' },
    // Tambahkan data usaha lainnya di sini
];

const PelakuUsaha: NextPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
    const [selectedProvince, setSelectedProvince] = useState('Semua Provinsi');
    const [selectedCity, setSelectedCity] = useState('Semua Kabupaten / Kota');
    const [companyName, setCompanyName] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProvince(e.target.value);
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(e.target.value);
    };

    const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value);
    };

    const filteredBusinesses = businesses.filter(business => {
        const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Semua Kategori' || business.product === selectedCategory;
        const matchesProvince = selectedProvince === 'Semua Provinsi' || business.province === selectedProvince;
        const matchesCity = selectedCity === 'Semua Kabupaten / Kota' || business.city === selectedCity;
        const matchesCompanyName = companyName === '' || business.name.toLowerCase().includes(companyName.toLowerCase());

        return matchesSearch && matchesCategory && matchesProvince && matchesCity && matchesCompanyName;
    });

    return (
        <Container maxW={{ base: 'full', md: 'container.xl' }} py="8" mt="20">
            <Heading
                mb="6"
                textAlign="center"
                size="6xl"
                data-aos="fade-up"
            >
                Pencarian Pelaku Usaha
            </Heading>
            <Stack spacing="6" mb="8">
                <FormControl id="search">
                    <FormLabel>Pencarian Spesifik</FormLabel>
                    <Input
                        type="text"
                        placeholder="Tulis kata"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </FormControl>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap="8">
                    <FormControl id="category">
                        <FormLabel>Kategori</FormLabel>
                        <Select value={selectedCategory} onChange={handleCategoryChange}>
                            {categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl id="province">
                        <FormLabel>Provinsi</FormLabel>
                        <Select value={selectedProvince} onChange={handleProvinceChange}>
                            <option value="Semua Provinsi">Semua Provinsi</option>
                            {provinces.map(province => (
                                <option key={province} value={province}>
                                    {province}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl id="city">
                        <FormLabel>Kabupaten / Kota</FormLabel>
                        <Select value={selectedCity} onChange={handleCityChange}>
                            <option value="Semua Kabupaten / Kota">Semua Kabupaten / Kota</option>
                            {cities.map(city => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl id="companyName">
                        <FormLabel>Nama Perusahaan</FormLabel>
                        <Input
                            type="text"
                            placeholder="Nama Perusahaan"
                            value={companyName}
                            onChange={handleCompanyNameChange}
                        />
                    </FormControl>
                </Grid>
                <Stack spacing="20" align="flex-end">
                    <Button
                        colorScheme="purple"
                        size="sm"
                        mt="4"
                    >
                        Cari
                    </Button>
                </Stack>

                <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 400px)' }}>
                    <Table variant="simple" size="md">
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Nama Usaha</Th>
                                <Th>Produk</Th>
                                <Th>Alamat</Th>
                                <Th>Kabupaten / Kota</Th>
                                <Th>Provinsi</Th>
                                <Th>No. Telepon/HP</Th>
                                <Th>Email</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredBusinesses.map(business => (
                                <Tr key={business.id}>
                                    <Td>{business.id}</Td>
                                    <Td>{business.name}</Td>
                                    <Td>{business.product}</Td>
                                    <Td>{business.address}</Td>
                                    <Td>{business.city}</Td>
                                    <Td>{business.province}</Td>
                                    <Td>{business.phone}</Td>
                                    <Td>{business.email}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </Stack>
        </Container>
    );
};

export default PelakuUsaha;
