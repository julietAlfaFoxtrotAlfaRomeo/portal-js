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
        id: 'home',
      },
      {
        label: 'Etalase',
        href: '/etalase',
        id: 'etalase',
      },
      {
        label: 'Berita',
        href: '/berita',
        id: 'Berita',
      },
      {
        label: 'Jadwal',
        href: '/jadwal',
        id: 'Jadwal',
      },
      {
        label: 'Pelaku usaha',
        href: '/PelakuUsaha',
        id: 'pelaku-usaha',
      },
      {
        label: 'Contact Us',
        href: '/Contact-Us',
        id: 'contact-us',
      },
      {
        label: 'Login',
        href: '/login',
        id: 'login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
        id: 'sign-up',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by <Link href="https://webpas.my.id">Jafar</Link>
      </>
    ),
    links: [
      {
        href: '',
        label: 'Contact',
        id: 'footer-contact',
      },
      {
        href: '',
        label: <FaTwitter size="14" />,
        id: 'footer-twitter',
      },
      {
        href: 'https://',
        label: <FaGithub size="14" />,
        id: 'footer-github',
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
        id: 'feature-accessible',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description: 'webpass.',
        id: 'feature-themable',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description: 'webpass.',
        id: 'feature-composable',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description: 'webpass.',
        id: 'feature-productive',
      },
    ],
  },
}

export default siteConfig
