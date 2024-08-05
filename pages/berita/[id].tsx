// pages/berita/[id].js
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiClock, FiUser } from 'react-icons/fi';
import { news } from '../../data/newsData';

const BeritaDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const item = news.find(newsItem => newsItem.id === id);

    if (!item) {
        return <Box p={5}>Berita tidak ditemukan</Box>;
    }

    return (
        <Box mt="20" p={5} maxW="container.md" mx="auto">
            <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={5}>{item.title}</Heading>
            <Flex alignItems="center" mb={4}>
                <Icon mb="4" as={FiUser} mr={2} />
                <Text fontSize="lg" mr={4}>{item.author}</Text>
                <Icon mb="4" as={FiClock} mr={2} />
                <Text fontSize="lg">{item.date}</Text>
            </Flex>
            <Text fontSize="lg" mb={5}>{item.description}</Text>
        </Box>
    );
};

export default BeritaDetail;
