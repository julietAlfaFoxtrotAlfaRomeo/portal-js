
import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const NextjsLogo: React.FC<HTMLChakraProps<'img'>> = (props) => {
        const logoSrc = useColorModeValue('/logo.png', '/logo.png')

        return (
                <chakra.img
                        src={logoSrc}
                        alt="Logo"
                        {...props}
                />
        )
}

