import { Box, Button, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
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

const panduan: NextPage = () => {
    return (
        <Box py={10} borderRadius="20px" bg="gray.50">
            <Container maxW="container.xl">
                <VStack spacing={6}>
                    <Heading
                        lineHeight="short"
                        fontSize={["4xl", null, "6xl"]}
                        textAlign="center"
                        as="p"
                        data-aos="fade-right"
                        className="primary-heading"
                        mt={5}
                        mb={5}
                        color="purple.600"
                    >
                        Panduan Pendaftaran
                    </Heading>
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Image src="/panduan.png" alt="UKM Award" width={1000} height={600} objectFit="cover" borderRadius="md" boxShadow="lg" />
                        <ButtonLink href="/panduan.png" mt={7} colorScheme="purple" size="lg">
                            Download Panduan
                        </ButtonLink>
                    </Box>
                    <Text mt={10} textAlign="center" fontSize="lg" color="gray.700">
                        Untuk mendaftar UKM Award, silakan mengisi formulir pendaftaran yang tersedia di website resmi kami. Pastikan Anda telah memenuhi semua kriteria dan persyaratan yang ditentukan.
                    </Text>
                </VStack>
            </Container>
        </Box>
    );
};

export default panduan;
