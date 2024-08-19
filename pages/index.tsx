import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useClipboard,
  VStack,
  Wrap
} from "@chakra-ui/react";
import { Br } from "@saas-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from "components/Carousel/Carousel";
import { ButtonLink } from "components/button-link/button-link";
import { Faq } from "components/faq";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import {
  Highlights,
  HighlightsItem
} from "components/highlights";
import { NextjsLogo } from "components/logos";
import { SEO } from "components/seo/seo";
import faq from "data/faq";
import jadwal from "data/jadwal";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from 'next/router';
import * as React from "react";
import { useEffect } from 'react';
import {
  FiArrowRight,
  FiGrid,
  FiSliders,
  FiSmile,
  FiThumbsUp,
} from "react-icons/fi";
import { MdArrowForward } from "react-icons/md";
import Etalase from "./etalasehome";



const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box>
      <SEO
        title="webpass"
        description=""
      />
      <Box>
        <Carousel />
        <HeroSection />
        <HighlightsSection />
        <Etalase />
        <FeaturesSection />
        <UkmAwardSection />
        <FaqSection />
      </Box>
    </Box>
  );
};


const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden" mt={-2}>
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 10, lg: 20 }} pb="5">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <div data-aos="fade-right" data-aos-delay="250">
                Selamat Datang di <span style={{ color: "#d9232d" }}>Kementerian Perdagangan</span>
              </div>
            }
            description={
              <div data-aos="fade-right" data-aos-delay="500">
                Kami adalah lembaga pemerintah yang bertanggung jawab atas pengelolaan perdagangan, kebijakan, dan pengembangan sektor perdagangan di Indonesia. <Br />
                Temukan informasi terkini tentang kebijakan, layanan publik, dan program-program kami di sini.
              </div>
            }
          >
            <div data-aos="fade-up" data-aos-delay="750">
              <HStack pt="6" pb="12" spacing="8">
                <NextjsLogo height="58px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/registrasi">
                  Daftar
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://webpas.my.id"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Hubungi Kami
                </ButtonLink>
              </ButtonGroup>
            </div>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <Box overflow="hidden" height="100%">
              <Image
                src="/okm.png"
                layout="fixed"
                width={500}
                height={762}
                alt="Screenshot of Kementerian Perdagangan"
                quality="75"
                priority
              />
            </Box>
          </Box>
        </Stack>
      </Container>

      <div>
        <Features
          id="benefits"
          columns={[1, 2, 4]}
          iconSize={4}
          innerWidth="container.xl"
          pt="10"
          features={[
            {
              title: "Kebijakan Terbaru",
              icon: FiSmile,
              description: "Dapatkan informasi terkini mengenai kebijakan perdagangan dan regulasi dari Kementerian Perdagangan.",
              iconPosition: "left",
            },
            {
              title: "Layanan Publik",
              icon: FiSliders,
              description:
                "Akses berbagai layanan publik yang disediakan oleh Kementerian Perdagangan untuk mempermudah proses administrasi.",
              iconPosition: "left",
            },
            {
              title: "Program Pemerintah",
              icon: FiGrid,
              description:
                "Ikuti program-program pemerintah yang ditawarkan untuk mendukung pengembangan sektor perdagangan dan industri.",
              iconPosition: "left",
            },
            {
              title: "Pengembangan Sektor",
              icon: FiThumbsUp,
              description:
                "Temukan informasi tentang upaya Kementerian Perdagangan dalam mengembangkan sektor perdagangan di Indonesia.",
              iconPosition: "left",
            },
          ]}
          data-aos="fade-left"
          data-aos-delay="800"
        />
      </div>
    </Box>
  );
};
<Etalase />


const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  const router = useRouter();

  const handleTagClick = (category: string) => {
    router.push(`/etalase/`);
  };

  return (
    <Highlights data-aos="fade-up" data-aos-delay="200">
      <HighlightsItem colSpan={[1, 2, 3]} border="none">
        <VStack alignItems="center" spacing="8">
          <Heading
            lineHeight="short"
            fontSize={["4xl", "6xl"]}
            textAlign="center"
            as="p"
            data-aos="fade-right"
            className="primary-heading"
            mt={5}
            mb={-5}
          >

            Etalase Produk UMKM
          </Heading>
          <HStack spacing="15" display={{ base: "block", md: "flex" }} data-aos="zoom-in">
            <Box display={{ base: "none", md: "block" }}>
              <Image src="/100.png" alt="Etalase Produk UMKM" width={500} height={150} />
            </Box>
            <Text color="muted" fontSize="xl" text-align="center" textAlign="center">
              Portal ini diperuntukan bagi semua pelaku usaha di Indonesia yang
              <br />berkeinginan untuk mempromosikan produknya melalui Internet.
              <br />Registrasi dilakukan oleh Pelaku usaha sendiri tanpa dipungut bayaran.
            </Text>
          </HStack>
          <Box
            display="flex"
            justifyContent={{ base: "center", md: "flex-end" }} // Tengah di perangkat mobile dan kanan di desktop
            alignItems="center" // Menyelaraskan tombol secara vertikal
            gap="3"
            width="100%"
            mr={{ base: "0", md: "0" }} // Menghilangkan margin kanan di perangkat mobile
            data-aos="zoom-in"
          >
            <ButtonLink colorScheme="primary" size={{ base: "sm", md: "lg" }} href="/berita/2">
              Baca Selengkapnya
            </ButtonLink>
            <ButtonLink colorScheme="secondary" size={{ base: "sm", md: "lg" }} href="/berita">
              List Berita
            </ButtonLink>
          </Box>

        </VStack>
      </HighlightsItem>
      <HighlightsItem colSpan={[1, 2, 3]} data-aos="fade-up" data-aos-delay="200" textAlign="center" border="none">
        <Box width="100%" p={4} textAlign="center">
          <Heading
            lineHeight="short"
            fontSize={["4xl", null, "6xl"]}
            textAlign="center"
            as="p"
            data-aos="fade-right"
            className="primary-heading"
            mt={5}
            mb={10}
          >
            Jelajahi Kategori Kami
          </Heading>
          <Text
            color="muted"
            fontSize="lg"
            mb={2}
            textAlign="center"
          >
            UKM Pangan Award mengakui usaha kecil dan menengah yang luar biasa dalam berbagai kategori. Jelajahi berbagai kategori dan temukan keunggulan di setiap bidang:
          </Text>
          <Wrap
            mt={4}
            justify="center"
            spacing="4"
          >
            {[
              "SEMUA PRODUK TERBARU",
              "MAKANAN & MINUMAN",
              "FASHION",
              "KOSMETIK",
              "KERAJINAN",
              "JASA",
              "DEKORASI",
              "AKSESORIS",
              "MULTIPRODUK",
            ].map((value) => (
              <Tag
                key={value}
                variant="subtle"
                colorScheme="purple"
                rounded="full"
                px="3"
                py="1.5"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{ bg: "purple.200", transform: "scale(1.05)" }}
                _active={{ bg: "purple.300" }}
                onClick={() => handleTagClick(value)}
                data-aos="flip-up"
                data-aos-delay="200"
              >
                {value}
              </Tag>
            ))}
          </Wrap>
        </Box>
      </HighlightsItem>
    </Highlights>
  );
};


const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 200,
    });
  }, []);

  const layoutConfig = {
    columns: [1, 2, 3],
    iconSize: 5,
    gap: 5,
  };

  // Ambil 6 acara terbaru dari data jadwal
  const latestFeatures = jadwal.slice(0, 6).map(feature => ({
    ...feature,
  }));

  return (
    <Box id="features" p={5} className="primary">
      <Heading
        lineHeight="short"
        fontSize={["4xl", null, "6xl"]}
        textAlign="center"
        as="p"
        data-aos="fade-right"
        className="primary-heading"
        mt={5}
        mb={10}
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
            shadow="lg"
            borderWidth="1px"
            borderRadius="md"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            className="primary-feature"
            bg="white"
            position="relative"
            overflow="hidden"
            _hover={{
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5 )",
              transform: "translateY(-10px)",
              zIndex: 1,
              bg: "purple.100",
            }}
          >
            <Box display="flex" alignItems="center">
              <Icon as={MdArrowForward} w={6} h={6} color="purple.500" mr={3} />
              <Text mt={4} fontWeight="bold" fontSize="xl" className="primary-title" position="relative" zIndex={1}>
                {feature.title}
              </Text>
            </Box>
            <Box textAlign="right" mt={2} position="relative" zIndex={1}>
              <Button as="a" href="/jadwal" className="primary-readmore" colorScheme="purple" size="sm">
                Baca Selanjutnya
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center" mt={5}>
        <Button as="a" href="/jadwal" className="primary-readmore" colorScheme="purple" size="lg">
          Baca Selanjutnya
        </Button>
      </Box>
    </Box>
  );
};

// const TestimonialsSection = () => {
//   const columns = React.useMemo(() => {
//     return testimonials.items.reduce<Array<typeof testimonials.items>>(
//       (columns, t, i) => {
//         columns[i % 3].push(t);

//         return columns;
//       },
//       [[], [], []]
//     );
//   }, []);

//   return (
//     <Testimonials
//       title={testimonials.title}
//       columns={[1, 2, 3]}
//       innerWidth="container.xl"
//     >
//       <>
//         {columns.map((column, i) => (
//           <Stack key={i} spacing="8">
//             {column.map((t, i) => (
//               <Testimonial key={i} {...t} />
//             ))}
//           </Stack>
//         ))}
//       </>
//     </Testimonials>
//   );
// };
const UkmAwardSection = () => {
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
        {/* <Text mb={8} textAlign="center">
          UKM Award adalah penghargaan yang diberikan kepada pelaku usaha kecil dan menengah yang telah menunjukkan prestasi dan kontribusi yang signifikan dalam meningkatkan perekonomian nasional.
        </Text> */}
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Image src="/panduan.png" alt="UKM Award" width={800} height={350} objectFit="cover" />
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



const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;
