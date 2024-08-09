import { Box, Button, Collapse, Container, Grid, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const faqs = [
    {
        question: "Bagaimana cara mendaftarkan produk?",
        answer: "Silakan buka halaman berikut : https://portal-indonesia.id/panduan untuk informasi lebih lanjut tentang pendaftaran produk."
    },
    {
        question: "Apa syarat untuk mendaftar?",
        answer: "Syarat untuk mendaftar termasuk memiliki dokumen identitas yang valid dan informasi lengkap tentang produk yang ingin didaftarkan."
    },
    {
        question: "Berapa biaya pendaftaran produk?",
        answer: "Biaya pendaftaran produk dapat bervariasi tergantung pada jenis produk dan kategori. Silakan cek halaman pendaftaran untuk detail lebih lanjut."
    },
    {
        question: "Apa yang harus dilakukan jika ada masalah saat pendaftaran?",
        answer: "Jika Anda mengalami masalah saat pendaftaran, silakan hubungi layanan pelanggan kami di email support@portal-indonesia.id atau melalui telepon di 021-12345678."
    },
    {
        question: "Kapan pendaftaran produk ditutup?",
        answer: "Pendaftaran produk biasanya ditutup satu bulan sebelum acara berlangsung. Pastikan Anda memeriksa tenggat waktu di halaman pendaftaran kami."
    },
    {
        question: "Bagaimana cara mengubah informasi produk setelah pendaftaran?",
        answer: "Untuk mengubah informasi produk setelah pendaftaran, silakan hubungi tim dukungan kami di email support@portal-indonesia.id dengan rincian perubahan yang diperlukan."
    },
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box py={10} bg="gray.50" mt={20}>
            <Container maxW="container.lg">
                <Heading as="h1" fontSize="4xl" textAlign="center" mb={10} color="purple.600">
                    FREQUENTLY ASKED QUESTIONS
                </Heading>
                <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
                    {faqs.map((faq, index) => (
                        <Box key={index} borderWidth={1} borderRadius="md" overflow="hidden" shadow="md">
                            <Button
                                width="100%"
                                textAlign="left"
                                p={4}
                                bg="white"
                                _hover={{ bg: "purple.50" }}
                                onClick={() => toggleAnswer(index)}
                                mt={3}
                            >
                                <Text fontSize="lg" fontWeight="bold">{faq.question}</Text>
                            </Button>
                            <Collapse in={openIndex === index}>
                                <Box p={4} bg="white">
                                    <Text>{faq.answer}</Text>
                                </Box>
                            </Collapse>
                        </Box>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default FAQPage;
