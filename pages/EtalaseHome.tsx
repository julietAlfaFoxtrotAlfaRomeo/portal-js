import { Button, Center, Container, Grid, Heading, Link } from "@chakra-ui/react";
import CategoryButtons from "components/etalase/CategoryButtons";
import ProductCard from "components/etalase/ProductCard";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useState } from "react";

const products = Array.from({ length: 9 }, (_, i) => ({
    id: (i + 1).toString(),
    title: `Produk ${i + 1}`,
    description: `Deskripsi produk ${i + 1}`,
    imageUrl: "/okm.png",
    category: [
        "SEMUA PRODUK",
        "TERBARU",
        "MAKANAN & MINUMAN",
        "FASHION",
        "KOSMETIK",
        "KERAJINAN",
        "JASA",
        "DEKORASI",
        "AKSESORIS",
        "MULTIPRODUK"
    ][i % 10]
}));

const Etalase: NextPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("SEMUA PRODUK");

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory === "SEMUA PRODUK"
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <Container maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }} py="8" mt="20">
            <Heading mb="6">Etalase Produk</Heading>
            <CategoryButtons selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap="6"
            >
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProductCard id={product.id} title={product.title} imageUrl={product.imageUrl} />
                    </motion.div>
                ))}
            </Grid>
            <Center mt="10">
                <Link href="/etalase">
                    <Button colorScheme="primary" size="lg">Lihat Selanjutnya</Button>
                </Link>
            </Center>
        </Container>
    );
};

export default Etalase;
