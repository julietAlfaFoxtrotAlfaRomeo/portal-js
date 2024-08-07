// components/features-section.js
import {
    Box,
    Heading,
    Icon,
    SimpleGrid,
    Text
} from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ButtonLink } from "components/button-link/button-link";
import jadwal from "data/jadwal";
import * as React from "react";
import { useEffect } from 'react';

const FeaturesSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 500, // Durasi animasi
            offset: 200, // Offset (dalam px) dari titik pemicu asli
        });
    }, []);

    const layoutConfig = {
        columns: [1, 2, 3],
        iconSize: 5,
        gap: 5,
    };

    // Ambil 6 acara terbaru dari data jadwal
    const latestFeatures = jadwal.slice(0).map(feature => ({
        ...feature,
        icon: feature.icon as React.ElementType
    }));

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
            <SimpleGrid columns={layoutConfig.columns} spacing={layoutConfig.gap} mt={5}>
                {latestFeatures.map((feature, index) => (
                    <Box
                        key={index}
                        p={5}
                        shadow="md"
                        borderWidth="1px"
                        borderRadius="md"
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100}`}
                        className="primary-feature"
                        bg="white"
                    >
                        <Box
                            bg="var(--chakra-colors-primary-100)" // Warna background logo
                            borderRadius="full"
                            p={4}
                            display="inline-block"
                        >
                            <Icon as={feature.icon} boxSize={layoutConfig.iconSize} color="var(--chakra-colors-primary-700)" />
                        </Box>
                        <Text mt={4} fontWeight="bold" fontSize="xl" className="primary-title">
                            {feature.title}
                        </Text>
                        <Box textAlign="right" mt={2}>
                            <ButtonLink href={`/jadwal/${feature.id}`} className="primary-readmore" colorScheme="purple" size="sm">
                                Baca Selengkapnya
                            </ButtonLink>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default FeaturesSection;
