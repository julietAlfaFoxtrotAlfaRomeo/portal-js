import { Box, Button, Container, FormControl, FormLabel, Grid, Heading, Input, Stack, Text, Textarea } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

const ContactUs: NextPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <Container maxW="container.xl" py="8" mt="20">
            {/* Map Section */}
            <Box mb="8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12603.973641684603!2d106.83095164318844!3d-6.280651195469875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40e827a01c3007%3A0x2d05a3b5ccf14b7e!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1635419022345!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
            </Box>

            {/* Contact Form and Info Section */}
            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap="8"
            >
                {/* Contact Form Section */}
                <Box>
                    <Heading mb="4">Kontak Kami</Heading>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing="4">
                            <FormControl id="name" isRequired>
                                <FormLabel>Nama</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="message" isRequired>
                                <FormLabel>Pesan</FormLabel>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="primary" size="lg">
                                Kirim Pesan
                            </Button>
                        </Stack>
                    </form>
                </Box>
                <Box>
                    <Heading size="md" mb="4">Informasi Kontak</Heading>
                    <Text fontSize="xl" mb="6">
                        <strong>Location:</strong><br />
                        Jalan M. I. Ridwan Rais No. 5
                        Jakarta Pusat 10110
                        DKI Jakarta, Indonesia
                    </Text>
                    <Text fontSize="lg" mb="6">
                        <strong>Email:</strong><br />
                        <a href="mailto:info@portal-indonesia.id">info@portal-indonesia.id</a>
                    </Text>
                    <Text fontSize="lg">
                        <strong>Call:</strong><br />
                        (021) 7987772
                    </Text>
                </Box>
            </Grid>
        </Container>
    );
};

export default ContactUs;
