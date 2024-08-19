import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";


const ButtonLink = ({ href, children, ...props }: { href: string; children: React.ReactNode;[key: string]: any }) => {
    return (
        <Link href={href} passHref>
            <Button {...props}>
                {children}
            </Button>
        </Link>
    );
};

const panduan = () => {
    return (
        <Box py={10} borderRadius="20px">
            <Container maxW="container.xl">
                <Heading
                    lineHeight="short"
                    fontSize={["4xl", null, "6xl"]}
                    textAlign="center"
                    as="p"
                    data-aos="fade-right"
                    className="primary-heading"
                    mt={5}
                    mb={20}
                >
                    Panduan Pendaftaran
                </Heading>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Image src="/panduan.png" alt="UKM Award" width={750} height={300} objectFit="fill" />
                    <ButtonLink href="/panduan.png" mt={4} colorScheme="purple" size="lg">
                        Download Panduan
                    </ButtonLink>
                </Box>
                <Text mt={10} textAlign="center">
                    Untuk mendaftar UKM Award, silakan mengisi formulir pendaftaran yang tersedia di website resmi kami. Pastikan Anda telah memenuhi semua kriteria dan persyaratan yang ditentukan.
                </Text>
            </Container>
        </Box>
    );
};

export default panduan;
