// components/Carousel/Carousel.tsx
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <Box width="100%" maxW="100vw" mt={20}>
      <Slider {...settings}>
        {[1, 2].map((_, index) => (
          <Box position="relative" width="100vw" height="80vh" key={index}>
            <Image
              src={`/${index + 1}.png`}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
            {currentSlide === index && (
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                color="white"
                px={[4, 6]}
                py={[4, 6]}
              >
                <MotionBox
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.7 }}
                >
                  <MotionBox
                    variants={fadeInUp}
                    transition={{ duration: 0.7 }}
                    as="div"
                  >
                    <Heading
                      fontSize={['xl', '2xl', '3xl', '4xl', '6xl']}
                      mb={2}
                    >
                      Etalase Produk <span style={{ color: "#d9232d" }}>UMKM</span>
                    </Heading>
                  </MotionBox>

                  <MotionBox
                    variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                    transition={{ duration: 0.7 }}
                    as="div"
                  >
                    <Text
                      fontSize={['sm', 'md', 'lg', 'xl']}
                      mb={4}
                      width={{ base: "350px", md: "auto" }}
                      maxWidth="none"
                      mx="auto"
                      textAlign="center"
                    >
                      Portal ini diperuntukan bagi semua pelaku usaha di Indonesia yang berkeinginan untuk mempromosikan produknya melalui internet. Registrasi dilakukan oleh pelaku usaha sendiri tanpa di pungut bayaran.
                    </Text>
                  </MotionBox>
                  <Box>
                    <MotionBox
                      href="/registrasi"
                      variants={fadeInLeft}
                      transition={{ duration: 0.7 }}
                      as="a"
                    >
                      <Button
                        colorScheme="primary"
                        size="lg"
                        className="px-4 py-sm-2 px-sm-4 rounded-pill"
                      >
                        Registrasi
                      </Button>
                    </MotionBox>
                  </Box>
                </MotionBox>
              </Box>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
