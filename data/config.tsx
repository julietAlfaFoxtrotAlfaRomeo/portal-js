import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Kementiran Perdagangan',
    description: 'Webpass',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Etalase',
        href: '/etalase',
      },
      {
        label: 'Pelaku usaha',
        href: '/PelakuUsaha',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Contact Us',
        href: '/Contact-Us',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://webpas.my.id">Webpass</Link>
      </>
    ),
    links: [
      {
        href: '',
        label: 'Contact',
      },
      {
        href: '',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Webpass',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All webpass.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'webpass.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'webpass.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'webpass.',
      },
    ],
  },
}

export default siteConfig
