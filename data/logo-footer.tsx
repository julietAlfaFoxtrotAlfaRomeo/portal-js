import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logoo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const logoSrc = useColorModeValue('/logo-f.png', '/logo-f.png')

  return (
    <chakra.img
      src={logoSrc}
      alt="Logo"
      {...props}
    />
  )
}
