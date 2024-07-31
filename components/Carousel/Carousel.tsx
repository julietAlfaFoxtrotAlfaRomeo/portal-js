// components/Carousel/Carousel.tsx
import { Box } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import styles from './Carousel.module.css';

const Carousel: React.FC = () => {
    return (
        <Box mt="20">
            <BootstrapCarousel>
                <BootstrapCarousel.Item>
                    <Image
                        src="/w.png"
                        alt="First slide"
                        layout="responsive"
                        width={1200}
                        height={500}
                    />
                    <BootstrapCarousel.Caption className={styles.caption}>
                        <h3>Etalase Produk UMKM</h3>
                        <p className="d-none d-md-block">Portal ini diperuntukan bagi semua pelaku usaha di Indonesia yang berkeinginan untuk mempromosikan produknya melalui internet. Registrasi dilakukan oleh pelaku usaha sendiri tanpa di pungut bayaran.</p>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                    <Image
                        src="/w.png"
                        alt="Second slide"
                        layout="responsive"
                        width={1200}
                        height={500}
                    />
                    <BootstrapCarousel.Caption className={styles.caption}>
                        <h3>Second Slide</h3>
                        <p className="d-none d-md-block">Portal ini diperuntukan bagi semua pelaku usaha di Indonesia yang berkeinginan untuk mempromosikan produknya melalui internet. Registrasi dilakukan oleh pelaku usaha sendiri tanpa di pungut bayaran.</p>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
                <BootstrapCarousel.Item>
                    <Image
                        src="/w.png"
                        alt="Third slide"
                        layout="responsive"
                        width={1200}
                        height={500}
                    />
                    <BootstrapCarousel.Caption className={styles.caption}>
                        <h3>Third Slide</h3>
                        <p className="d-none d-md-block">Portal ini diperuntukan bagi semua pelaku usaha di Indonesia yang berkeinginan untuk mempromosikan produknya melalui internet. Registrasi dilakukan oleh pelaku usaha sendiri tanpa di pungut bayaran.</p>
                    </BootstrapCarousel.Caption>
                </BootstrapCarousel.Item>
            </BootstrapCarousel>
        </Box>
    );
};

export default Carousel;
