// pages/berita.js
import { Box, Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { FiClock, FiUser } from 'react-icons/fi';
import { news } from '../data/newsData';

const Berita = () => {
    const [isPc, setIsPc] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setIsPc(window.innerWidth > 768);
            handleResize(); // Set initial state
            window.addEventListener('resize', handleResize);
            if (window.innerWidth > 768) {
                const AOS = require('aos');
                AOS.init();
            }
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <Box mt="20" p={5}>
            <Heading fontSize="3xl" ml="5" mb={5} data-aos={isPc ? 'fade-up' : ''}>Berita</Heading>
            <Flex direction={{ base: 'column', md: 'row' }} gap={5} wrap="wrap">
                {news.map((item, index) => (
                    <Box
                        key={index}
                        p={5}
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="md"
                        mb={5}
                        flexBasis={{ base: '100%', md: 'calc(50% - 10px)' }}
                        data-aos={isPc ? 'fade-up' : ''}
                        data-aos-delay={isPc ? index * 100 : ''}
                    >
                        <Flex direction={{ base: 'column', md: 'row' }} gap={5}>
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                boxSize={{ base: '100%', md: '150px' }}
                                borderRadius="md"
                                mb={{ base: 4, md: 0 }}
                                mr={{ md: 4 }}
                                data-aos={isPc ? 'zoom-in' : ''}
                            />
                            <Box>
                                <Flex alignItems="center" mb={2} data-aos={isPc ? 'fade-right' : ''}>
                                    <Icon mb="4" as={FiUser} mr={2} />
                                    <Text fontSize="lg" mr={4}>{item.author}</Text>
                                    <Icon mb="4" as={FiClock} mr={2} />
                                    <Text fontSize="lg">{item.date}</Text>
                                </Flex>
                                <Heading fontSize="xl" mb={2} data-aos={isPc ? 'fade-left' : ''}>{item.title}</Heading>
                                <Text fontSize="lg" mb={2} color="gray.500" data-aos={isPc ? 'fade-up' : ''}>{item.category}</Text>
                                <Button fontSize="lg" colorScheme="primary" as="a" href={item.link} data-aos={isPc ? 'zoom-in' : ''}>
                                    Baca selengkapnya
                                </Button>
                            </Box>
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Berita;
