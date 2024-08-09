import {
  Box,
  BoxProps,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import siteConfig from 'data/config';

export interface FooterProps extends BoxProps {
  columns?: number;
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 3, ...rest } = props;
  return (
    <Box bg="gray.900" color="white" {...rest}>
      <Container maxW="container.2xl" px="8" py="8">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack align="start">
            <HStack>
              <Box as={siteConfig.Logoo} height="50px" mb={5} />
              <Text fontSize="lg" fontWeight="bold">ETALASE PRODUK UMKM</Text>
            </HStack>
            <Text>KEMENTRIAN PERDAGANGAN REPUBLIK INDONESIA</Text>
            <Text>Jl. M. I. Ridwan Rais, No. 5, Jakarta Pusat 10110, Telepon (021) 3841961/62</Text>
            <Text>Email: info@portal-indonesia.id</Text>
          </VStack>
          <SimpleGrid columns={2} spacing={10} mt={10} ml={{ base: 0, md: 20 }}>
            <Stack spacing="2">
              <Text fontSize="lg" fontWeight="bold">Links </Text>
              <Stack>
                {siteConfig.footer?.links?.slice(0, Math.ceil(siteConfig.footer.links.length / 2)).map(({ href, label }) => (
                  <FooterLink key={href} href={href}>
                    {label}
                  </FooterLink>
                ))}
              </Stack>
            </Stack>
            <Stack spacing="2">
              <Text fontSize="lg" fontWeight="bold">Links </Text>
              <Stack>
                {siteConfig.footer?.links?.slice(Math.ceil(siteConfig.footer.links.length / 2)).map(({ href, label }) => (
                  <FooterLink key={href} href={href}>
                    {label}
                  </FooterLink>
                ))}
              </Stack>
            </Stack>
          </SimpleGrid>
        </SimpleGrid>
        <VStack align="center">
          <Text color="muted" fontSize="sm" textAlign="center" mt={5}>
            Copyright ©️ 2021 Direktorat Penggunaan dan Pemasaran Produk Dalam Negeri
          </Text>
          <ChakraLink
            href="https://www.histats.com/viewstats/?sid=4615408&ccid=200"
            color="white"
            fontSize="sm"
            textDecoration="none"
            _hover={{ color: 'purple.500', transition: 'color .2s ease-in' }}
          >
            Statistik Situs
          </ChakraLink>
        </VStack>
      </Container>
    </Box>
  );
}

export interface CopyrightProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  return (
    <Text color="muted" fontSize="sm">
      {children}
    </Text>
  );
}

export const FooterLink: React.FC<ChakraLinkProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <ChakraLink
      color="white"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: 'purple.500',
        transition: 'color .2s ease-in',
      }}
      {...rest}
    >
      {children}
    </ChakraLink>
  );
}
