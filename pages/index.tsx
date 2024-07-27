import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
  useClipboard,
  VStack,
  Wrap
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";

import { Br } from "@saas-ui/react";
import Carousel from "components/Carousel/Carousel";
import { ButtonLink } from "components/button-link/button-link";
import { Faq } from "components/faq";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Hero } from "components/hero";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import { ChakraLogo, NextjsLogo } from "components/logos";
import { FallInPlace } from "components/motion/fall-in-place";
import { Testimonial, Testimonials } from "components/testimonials";
import faq from "data/faq";
import testimonials from "data/testimonials";
import { useRouter } from 'next/router'; // Import useRouter
import {
  FiArrowRight,
  FiBox,
  FiCode,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus
} from "react-icons/fi";
import EtalaseHome from "./EtalaseHome";
const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="webpass"
        description=""
      />
      <Box>
        <Carousel />
        <HeroSection />
        {/* <Mentri /> */}
        <EtalaseHome />
        <HighlightsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 10, lg: 20 }} pb="5">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Selamat Datang di <span style={{ color: "#d9232d" }}>Kementerian Perdagangan</span>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Kami adalah lembaga pemerintah yang bertanggung jawab atas pengelolaan perdagangan, kebijakan, dan pengembangan sektor perdagangan di Indonesia. <Br />
                Temukan informasi terkini tentang kebijakan, layanan publik, dan program-program kami di sini.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Daftar
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
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
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
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
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

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
            delay: 0.6,
          },
          {
            title: "Layanan Publik",
            icon: FiSliders,
            description:
              "Akses berbagai layanan publik yang disediakan oleh Kementerian Perdagangan untuk mempermudah proses administrasi.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Program Pemerintah",
            icon: FiGrid,
            description:
              "Ikuti program-program pemerintah yang ditawarkan untuk mendukung pengembangan sektor perdagangan dan industri.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Pengembangan Sektor",
            icon: FiThumbsUp,
            description:
              "Temukan informasi tentang upaya Kementerian Perdagangan dalam mengembangkan sektor perdagangan di Indonesia.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};
<EtalaseHome />
// const Mentri = () => {
//   return (
//     <Highlights>
//       <HighlightsItem colSpan={[1, null, 2]} title="Profil Menteri Perdagangan">
//         <VStack alignItems="flex-start" spacing="12" pb="">
//           <HStack spacing="8">
//             <Image src="/mentri.png" alt="Profil Menteri Perdagangan" width={200} height={200} />
//             <Text color="muted" fontSize="xl">
//               DR. (H.C). Zulkifli Hasan, S.E., M.M. yang akrab disapa Bang Zul dilantik sebagai Menteri Perdagangan Republik Indonesia pada 15 Juni 2022 oleh Presiden Joko Widodo. Sebelum dilantik, ia menjabat sebagai Wakil Ketua MPR periode 2019 hingga 2022. Sebelumnya, ia juga menjabat sebagai Ketua MPR periode 2014 hingga 2019.
//             </Text>
//           </HStack>
//         </VStack>
//       </HighlightsItem>
//     </Highlights>
//   )
// }
const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");
  const router = useRouter(); // Initialize useRouter

  const handleTagClick = (category: string) => {
    router.push(`/etalase/`);
  };

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, 2, 3]} title="Etalase Produk UMKM">
        <VStack alignItems="flex-start" spacing="8">
          <HStack spacing="15">
            <Image src="/okm.png" alt="Etalase Produk UMKM" width={350} height={200} />
            <Text color="muted" fontSize="xl" text-align="center">
              Portal ini diperuntukan bagi semua pelaku usaha di Indonesia yang
              <br />berkeinginan untuk mempromosikan produknya melalui Internet.
              <br />Registrasi dilakukan oleh Pelaku usaha sendiri tanpa dipungut bayaran.
            </Text>
          </HStack>
          <Box display="flex" justifyContent="flex-end" gap="3" width="100%">
            <ButtonLink colorScheme="primary" size="lg" href="/signup">
              Daftar
            </ButtonLink>
            <ButtonLink colorScheme="secondary" size="lg" href="/signup">
              Daftar
            </ButtonLink>
          </Box>
        </VStack>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="FAQ"
        description="FREQUENTLY ASKED QUESTIONS"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        Silakan buka halaman berikut  Bagaimana cara mendaftarkan produk? Silakan buka halaman berikut Bagaimana cara mendaftarkan  Bagaimana cara mendaftarkan produk? Silakan buka halaman berikut
      </HighlightsTestimonialItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        UKM Pangan Award mengakui usaha kecil dan menengah yang luar biasa dalam berbagai kategori. Jelajahi berbagai kategori dan temukan keunggulan di setiap bidang:
      </HighlightsTestimonialItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        UKM Pangan Award mengakui usaha kecil dan menengah yang luar biasa dalam berbagai kategori. Jelajahi berbagai kategori dan temukan keunggulan di setiap bidang:
      </HighlightsTestimonialItem>
      <HighlightsItem colSpan={[1, 2, 3]} title="Kategori UKM Pangan Award">
        <Box width="100%" p={4}>
          <Text
            color="muted"
            fontSize="lg"
            mb={2}
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
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Jadwal
          <Br /> Kegiatan
        </Heading>
      }
      description={
        <>
          Berikut adalah jadwal kegiatan dan publikasi yang akan datang.
          <Br />
          Untuk informasi lebih lanjut, lihat detail di bawah ini.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "13th Jakarta International Jewellery Fair",
          icon: FiBox,
          description: "Penyelenggara: Asosiasi Pengusaha Emas dan Permata Indonesia. Waktu Kegiatan: 18 August 2022 - 21 August 2022.",
          variant: "inline",
        },
        {
          title: "8th Jogja Expo 2022",
          icon: FiLock,
          description: "Penyelenggara: Pemerintah Kota Yogyakarta. Waktu Kegiatan: 25 August 2022 - 28 August 2022.",
          variant: "inline",
        },
        {
          title: "Health Expo 2022",
          icon: FiSearch,
          description: "Penyelenggara: Palang Merah Indonesia (PMI) Jawa Tengah. Waktu Kegiatan: 14 September 2022 - 18 September 2022.",
          variant: "inline",
        },
        {
          title: "Kriyanusa",
          icon: FiUserPlus,
          description: "Penyelenggara: Dewan Kerajinan Nasional. Waktu Kegiatan: 21 September 2022 - 25 September 2022.",
          variant: "inline",
        },
        {
          title: "Sail Tidore Expo 2022",
          icon: FiFlag,
          description: "Penyelenggara: Kementerian / Lembaga RI. Waktu Kegiatan: 24 November 2022 - 29 November 2022.",
          variant: "inline",
        },
        {
          title: "14th Jakarta International Jewellery Fair",
          icon: FiTrendingUp,
          description: "Penyelenggara: Asosiasi Pengusaha Emas dan Permata Indonesia. Waktu Kegiatan: 16 February 2023 - 19 February 2023.",
          variant: "inline",
        },
        {
          title: "Inacraft 2023",
          icon: FiToggleLeft,
          description: "Penyelenggara: Asosiasi Eksportir dan Produsen Handicraft Indonesia. Waktu Kegiatan: 01 March 2023 - 05 March 2023.",
          variant: "inline",
        },
        {
          title: "Festival Kab. Semarang UKM Expo 2023",
          icon: FiTerminal,
          description: "Penyelenggara: Pemerintah Kabupaten Semarang. Waktu Kegiatan: 15 March 2023 - 19 March 2023.",
          variant: "inline",
        },
        {
          title: "Deep and Extreme Indonesia",
          icon: FiCode,
          description: "Penyelenggara: PT Exhibition Network Indonesia. Waktu Kegiatan: 01 June 2023 - 04 June 2023.",
          variant: "inline",
        },
        {
          title: "Kebumen International Expo 2023",
          icon: FiBox,
          description: "Penyelenggara: Pemkab Kebumen, Jawa Tengah. Waktu Kegiatan: 17 June 2023 - 24 June 2023.",
          variant: "inline",
        },
        {
          title: "Pameran Hari Keluarga Nasional",
          icon: FiLock,
          description: "Penyelenggara: BKKBN. Waktu Kegiatan: 04 July 2023 - 06 July 2023.",
          variant: "inline",
        },
        {
          title: "Festival Indonesia: Pesta Anak Bangsa",
          icon: FiSearch,
          description: "Penyelenggara: idEA. Waktu Kegiatan: 08 July 2023 - 09 July 2023.",
          variant: "inline",
        },
        {
          title: "Indonesia City Expo 2023 (Rakernas APEKSI)",
          icon: FiUserPlus,
          description: "Penyelenggara: APEKSI. Waktu Kegiatan: 12 July 2023 - 14 July 2023.",
          variant: "inline",
        },
        {
          title: "Hari UMKM Nasional Expo 2023",
          icon: FiFlag,
          description: "Penyelenggara: Pemkot Surakarta. Waktu Kegiatan: 10 August 2023 - 13 August 2023.",
          variant: "inline",
        },
        {
          title: "Partisipasi Pameran TEI 2023 Pada Hall 3A",
          icon: FiTrendingUp,
          description: "Penyelenggara: Kemendag. Waktu Kegiatan: 18 October 2023 - 22 October 2023.",
          variant: "inline",
        },
        {
          title: "Muhammadiyah Expo 3 Jogja 2023",
          icon: FiToggleLeft,
          description: "Penyelenggara: Muhammadiyah. Waktu Kegiatan: 24 November 2023 - 26 November 2023.",
          variant: "inline",
        },
        {
          title: "Inacraft 2024",
          icon: FiTerminal,
          description: "Penyelenggara: Asosiasi Eksportir dan Produsen Handicraft Indonesia. Waktu Kegiatan: 28 February 2024 - 03 March 2024.",
          variant: "inline",
        },
        {
          title: "Kegiatan Baru",
          icon: FiCode,
          description: "Penyelenggara: Kemendag. Waktu Kegiatan: 09 May 2024 - 09 May 2024.",
          variant: "inline",
        },
        {
          title: "MUFEST (Muslim Fashion Festival) 2024",
          icon: FiBox,
          description: "Penyelenggara: Gemalindo. Waktu Kegiatan: 08 August 2024 - 11 August 2024.",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};



const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;
