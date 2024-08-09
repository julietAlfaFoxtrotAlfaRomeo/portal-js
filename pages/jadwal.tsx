import { SearchIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as React from "react";
import { useEffect, useState } from 'react';
import jadwal from '../data/jadwal'; // Pastikan path ini benar sesuai struktur proyek Anda

type Feature = {
    id: number;
    title: string;
    organizer: string;
    start_date: string;
    end_date: string;
    category: string;
    products: string;
    quota: number;
    location: string;
    city: string;
    province: string;
    pamphlet: string;
};

const FeaturesSection: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        AOS.init({
            duration: 500, // Durasi animasi
            offset: 200, // Offset (dalam px) dari titik pemicu asli
        });
    }, []);

    const filteredFeatures = jadwal.filter(feature =>
        Object.values(feature).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredFeatures.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredFeatures.length / itemsPerPage);

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Box id="features" p={5} className="primary" mt="20">
            <Heading
                lineHeight="short"
                fontSize={["2xl", null, "4xl"]}
                textAlign="center"
                as="p"
                data-aos="fade-right"
                className="primary-heading"
                mt={5}
            >
                Jadwal Kegiatan
            </Heading>
            <Box data-aos="fade-right" data-aos-delay="200" className="primary-description" textAlign="center" mt={2}>
                Berikut adalah jadwal kegiatan dan publikasi yang akan datang.
                <br />
                Untuk informasi lebih lanjut, lihat detail di bawah ini.
            </Box>

            <Box mt={5} mb={5} display="flex" justifyContent="center">
                <FormControl maxWidth="600px" w="full">
                    <FormLabel htmlFor="search" fontWeight="bold">Pencarian Spesifik</FormLabel>
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <SearchIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                            id="search"
                            type="text"
                            placeholder="Tulis kata kunci"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                </FormControl>
            </Box>

            {showAll ? (
                selectedFeature && (
                    <Box display={{ base: 'block', md: 'none' }}>
                        <Box p={4} border="1px solid gray.200" borderRadius="md" mb={4}>
                            <Heading fontSize="xl" mb={2}>{selectedFeature.title}</Heading>
                            <p>Penyelenggara: {selectedFeature.organizer}</p>
                            <p>Waktu Kegiatan (Awal - Akhir): {selectedFeature.start_date} - {selectedFeature.end_date}</p>
                            <p>Pangan non pangan: {selectedFeature.category}</p>
                            <p>Produk yang akan dipamerkan: {selectedFeature.products}</p>
                            <p>Kuota Peserta: {selectedFeature.quota}</p>
                            <p>Lokasi Pameran: {selectedFeature.location}</p>
                            <p>Kota: {selectedFeature.city}</p>
                            <p>Provinsi: {selectedFeature.province}</p>
                            <Image src={selectedFeature.pamphlet} alt="Pamflet" width={400} height={250} />
                            <Button onClick={() => setShowAll(false)} bg="purple.500" color="white">Tutup</Button>
                        </Box>
                    </Box>
                )
            ) : (
                <Box display={{ base: 'block', md: 'none' }}>
                    {currentItems.map((feature, index) => (
                        <Box key={index} p={4} border="1px solid gray.200" borderRadius="md" mb={4}>
                            <Heading fontSize="xl" mb={2}>{feature.title}</Heading>
                            <p>Penyelenggara: {feature.organizer}</p>
                            <Button onClick={() => { setShowAll(true); setSelectedFeature(feature); }} bg="purple.500" color="white">Lihat Selengkapnya</Button>
                        </Box>
                    ))}
                </Box>
            )}
            <Table display={{ base: 'none', md: 'table' }} mt={5}>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Nama Kegiatan</Th>
                        <Th>Penyelenggara</Th>
                        <Th>Waktu Kegiatan (Awal - Akhir)</Th>
                        <Th>Pangan non pangan</Th>
                        <Th>Produk yang akan dipamerkan</Th>
                        <Th>Kuota Peserta</Th>
                        <Th>Lokasi Pameran</Th>
                        <Th>Kota</Th>
                        <Th>Provinsi</Th>
                        <Th>Pamflet</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {currentItems.map((feature, index) => (
                        <Tr key={index}>
                            <Td>{indexOfFirstItem + index + 1}</Td>
                            <Td>{feature.title}</Td>
                            <Td>{feature.organizer}</Td>
                            <Td>{feature.start_date} - {feature.end_date}</Td>
                            <Td>{feature.category}</Td>
                            <Td>{feature.products}</Td>
                            <Td>{feature.quota}</Td>
                            <Td>{feature.location}</Td>
                            <Td>{feature.city}</Td>
                            <Td>{feature.province}</Td>
                            <Td><Image src={feature.pamphlet} alt="Pamflet" width={150} height={90} /></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Box mt={4} textAlign="center">
                <p>Menampilkan {indexOfFirstItem + 1} sampai {Math.min(indexOfLastItem, filteredFeatures.length)} dari {filteredFeatures.length} entri</p>
                <Button
                    onClick={() => handleClick(currentPage - 1)}
                    isDisabled={currentPage === 1}
                    mr={2}
                >
                    Sebelumnya
                </Button>
                {[...Array(totalPages)].map((_, index) => (
                    <Button
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        bg={currentPage === index + 1 ? 'purple.500' : 'gray.200'}
                        color={currentPage === index + 1 ? 'white' : 'black'}
                        mr={2}
                    >
                        {index + 1}
                    </Button>
                ))}
                <Button
                    onClick={() => handleClick(currentPage + 1)}
                    isDisabled={currentPage === totalPages}
                >
                    Selanjutnya
                </Button>
            </Box>
        </Box>
    );
};

export default FeaturesSection;
