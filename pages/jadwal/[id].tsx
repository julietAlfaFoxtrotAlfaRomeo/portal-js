// pages/jadwal/[id].js
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiClock, FiUser } from 'react-icons/fi';
import jadwal from '../../data/jadwal';

const JadwalDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const item = jadwal.find(jadwalItem => jadwalItem.id.toString() === id);

    if (!item) {
        return <Box p={5}>Jadwal tidak ditemukan</Box>;
    }

    // Split the description by newline characters
    const descriptionParagraphs = item.description.split('\n');

    return (
        <Box mt="20" p={5} maxW="container.md" mx="auto">
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={5}>{item.title}</Heading>
            <Flex alignItems="center" mb={4}>
                <Icon mb="4" as={FiUser} mr={2} />
                <Text fontSize="lg" mr={4}>{item.author || "Admin"}</Text>
                <Icon mb="4" as={FiClock} mr={2} />
                <Text fontSize="lg">{item.date}</Text>
            </Flex>
            {descriptionParagraphs.map((paragraph, index) => (
                <Text fontSize="lg" mb={2} key={index}>
                    {paragraph}
                </Text>
            ))}
        </Box>
    );
};

export default JadwalDetail;
