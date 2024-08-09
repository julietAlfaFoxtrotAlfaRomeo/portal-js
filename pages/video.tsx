import { Box, Button, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { videos } from "../data/videos"; // Impor data video

const VideoProdukIndonesia = () => {
    return (
        <Container maxW="container.xl" py={8} mt={20}>
            <Heading as="h1" mb={6}>
                VIDEO PRODUK INDONESIA
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {videos.map(video => (
                    <Box
                        key={video.id}
                        display="flex"
                        flexDirection={{ base: "column", md: "row" }}
                        bg="gray.100"
                        borderRadius="md"
                        overflow="hidden"
                        boxShadow="md"
                        p={4}
                    >
                        <Box flexShrink={0} width={{ base: "100%", md: "60%" }}>
                            <iframe
                                width="100%"
                                height="180" // Ukuran iframe lebih kecil
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Box>
                        <Box ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }} flex="1">
                            <Heading as="h2" size="md" mb={2}>
                                {video.title}
                            </Heading>
                            <Text fontSize="sm" mb={4}>
                                {video.description}
                            </Text>
                            <Button
                                as="a"
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                colorScheme="primary"
                                size="md"
                            >
                                Tonton Video
                            </Button>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default VideoProdukIndonesia;
