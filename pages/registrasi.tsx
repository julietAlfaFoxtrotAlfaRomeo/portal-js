import { Box, Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Input, Select, Text, Textarea, VStack, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import { useState } from "react";

const provinces = [
    { name: "Aceh", cities: ["Banda Aceh", "Langsa", "Lhokseumawe", "Sabang", "Subulussalam"] },
    { name: "Bali", cities: ["Denpasar"] },
    { name: "Banten", cities: ["Cilegon", "Serang", "Tangerang Selatan", "Tangerang"] },
    { name: "Bengkulu", cities: ["Bengkulu"] },
    { name: "DI Yogyakarta", cities: ["Yogyakarta"] },
    { name: "DKI Jakarta", cities: ["Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara"] },
    { name: "Gorontalo", cities: ["Gorontalo"] },
    { name: "Jambi", cities: ["Jambi"] },
    { name: "Jawa Barat", cities: ["Bandung", "Bekasi", "Bogor", "Cimahi", "Cirebon", "Depok", "Sukabumi", "Tasikmalaya"] },
    { name: "Jawa Tengah", cities: ["Magelang", "Pekalongan", "Salatiga", "Semarang", "Surakarta", "Tegal"] },
    { name: "Jawa Timur", cities: ["Batu", "Blitar", "Kediri", "Madiun", "Malang", "Mojokerto", "Pasuruan", "Probolinggo", "Surabaya"] },
    { name: "Kalimantan Barat", cities: ["Pontianak", "Singkawang"] },
    { name: "Kalimantan Selatan", cities: ["Banjarbaru", "Banjarmasin"] },
    { name: "Kalimantan Tengah", cities: ["Palangka Raya"] },
    { name: "Kalimantan Timur", cities: ["Balikpapan", "Bontang", "Samarinda"] },
    { name: "Kalimantan Utara", cities: ["Tarakan"] },
    { name: "Kepulauan Bangka Belitung", cities: ["Pangkal Pinang"] },
    { name: "Kepulauan Riau", cities: ["Batam", "Tanjung Pinang"] },
    { name: "Lampung", cities: ["Bandar Lampung", "Metro"] },
    { name: "Maluku", cities: ["Ambon", "Tual"] },
    { name: "Maluku Utara", cities: ["Ternate", "Tidore Kepulauan"] },
    { name: "Nusa Tenggara Barat", cities: ["Bima", "Mataram"] },
    { name: "Nusa Tenggara Timur", cities: ["Kupang"] },
    { name: "Papua", cities: ["Jayapura"] },
    { name: "Papua Barat", cities: ["Sorong"] },
    { name: "Riau", cities: ["Dumai", "Pekanbaru"] },
    { name: "Sulawesi Barat", cities: ["Mamuju"] },
    { name: "Sulawesi Selatan", cities: ["Makassar", "Palopo", "Parepare"] },
    { name: "Sulawesi Tengah", cities: ["Palu"] },
    { name: "Sulawesi Tenggara", cities: ["Bau-Bau", "Kendari"] },
    { name: "Sulawesi Utara", cities: ["Bitung", "Kotamobagu", "Manado", "Tomohon"] },
    { name: "Sumatera Barat", cities: ["Bukittinggi", "Padang", "Padangpanjang", "Pariaman", "Payakumbuh", "Sawahlunto", "Solok"] },
    { name: "Sumatera Selatan", cities: ["Lubuklinggau", "Pagar Alam", "Palembang", "Prabumulih"] },
    { name: "Sumatera Utara", cities: ["Binjai", "Medan", "Padang Sidempuan", "Pematangsiantar", "Sibolga", "Tanjungbalai", "Tebing Tinggi"] },
];

const Register: NextPage = () => {
    const toast = useToast();
    const [formData, setFormData] = useState({
        companyName: "",
        certificateNo: "",
        responsiblePersonName: "",
        nik: "",
        address: "",
        netWorth: "",
        businessType: "",
        province: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        mobileNumber: "",
        website: "",
        email: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedProvince = e.target.value;
        setFormData((prev) => ({
            ...prev,
            province: selectedProvince,
            city: "", // Reset the city when province changes
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Registrasi Berhasil",
            description: "Informasi registrasi telah dikirim.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Box maxW="3xl" mx="auto" p="6" mt={10}>
            <Flex direction="column" align="center" mb={6}>
                <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={2}>
                    REGISTER
                </Heading>
                <Flex alignItems="center" mb={4}>
                    <Text fontSize="2xl" fontWeight="bold" mr={1}>
                        REGISTRASI
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold" ml={1}>
                        PELAKU USAHA
                    </Text>
                </Flex>
            </Flex>
            <VStack spacing="4" align="stretch">
                <form onSubmit={handleSubmit}>
                    <VStack spacing="4" align="stretch">
                        <FormControl isRequired>
                            <FormLabel>Nama Kelompok Usaha/Perusahaan</FormLabel>
                            <Input name="companyName" value={formData.companyName} onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>No. Sertifikat PIRT</FormLabel>
                            <Input name="certificateNo" value={formData.certificateNo} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Nama Penanggung Jawab</FormLabel>
                            <Input name="responsiblePersonName" value={formData.responsiblePersonName} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>NIK (No.KTP Penanggung Jawab)</FormLabel>
                            <Input name="nik" value={formData.nik} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Alamat Usaha</FormLabel>
                            <Textarea name="address" value={formData.address} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Kekayaan Bersih yang dimiliki</FormLabel>
                            <Input name="netWorth" value={formData.netWorth} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Jenis Usaha</FormLabel>
                            <Select name="businessType" value={formData.businessType} onChange={handleChange}>
                                <option value="">-Pilih-</option>
                                <option value="Produsen">Produsen</option>
                                <option value="Distributor">Distributor</option>
                                <option value="Agen">Agen</option>
                                <option value="Exportir">Exportir</option>
                                <option value="Pengecer">Pengecer</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Upload Identitas</FormLabel>
                            <Input type="file" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Provinsi</FormLabel>
                            <Select name="province" value={formData.province} onChange={handleProvinceChange}>
                                <option value="">-Pilih-</option>
                                {provinces.map((province) => (
                                    <option key={province.name} value={province.name}>
                                        {province.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Kota/Kabupaten</FormLabel>
                            <Select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                isDisabled={!formData.province}
                            >
                                <option value="">-Pilih-</option>
                                {provinces
                                    .find((prov) => prov.name === formData.province)
                                    ?.cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Kodepos</FormLabel>
                            <Input name="postalCode" value={formData.postalCode} onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>No Telepon</FormLabel>
                            <Input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>No HP</FormLabel>
                            <Input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Website</FormLabel>
                            <Input name="website" value={formData.website} onChange={handleChange} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </FormControl>
                        <FormControl>
                            <HStack spacing="4">
                                <Checkbox isRequired>
                                    Kami menyatakan bahwa semua informasi yang kami sampaikan adalah benar. Jika tidak sesuai maka kami akan bertanggung jawab sesuai dengan ketentuan hukum yang berlaku.
                                </Checkbox>
                            </HStack>
                        </FormControl>
                        <Button colorScheme="blue" type="submit">
                            Daftar
                        </Button>
                    </VStack>
                </form>
            </VStack>
        </Box>
    );
};

export default Register;
