import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, Link } from '@chakra-ui/react';
import { BackgroundGradient } from 'components/gradients/background-gradient';
import { PageTransition } from 'components/motion/page-transition';
import { Section } from 'components/section';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const MotionBox = motion(Box);

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Section height="calc(100vh - 200px)" innerWidth="container.sm" mt="10">
      <BackgroundGradient zIndex="-1" />

      <Center height="100%" pt="20">
        <PageTransition width="100%">
          <MotionBox
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            bg="white"
            p={8}
            rounded="md"
            shadow="md"
            maxW="md"
            w="full"
          >
            <Flex direction="column" align="center" mb={8}>
              <Heading mb={2}>Log in</Heading>
            </Flex>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" type="email" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input placeholder="Password" type={showPassword ? "text" : "password"} />
                <InputRightElement>
                  <IconButton
                    aria-label="Toggle Password Visibility"
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    onClick={handlePasswordVisibility}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button colorScheme="purple" w="full" mb={4}>Log in</Button>
            <Flex justify="space-between" w="full" mb={4}>
              <Link color="purple.500" href="/forgot-password">Forgot password</Link>
              <Link color="purple.500" href="/signup">Sign up</Link>
            </Flex>
          </MotionBox>
        </PageTransition>
      </Center>
    </Section>
  );
};

export default Login;
