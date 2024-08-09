import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { SkipNavContent } from '@chakra-ui/skip-nav'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer, FooterProps } from './footer'
import { Header, HeaderProps } from './header'

interface LayoutProps {
  children: ReactNode
  headerProps: HeaderProps
  footerProps: FooterProps
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, headerProps, footerProps } = props
  return (
    <Box>
      <Header {...headerProps} />
      <Analytics />
      <SpeedInsights />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      <Footer {...footerProps} />
    </Box>
  )
}
