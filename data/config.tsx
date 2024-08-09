import { NextSeoProps } from 'next-seo'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'
import { Logoo } from './logo-footer'
const siteConfig = {
  logo: Logo,
  Logoo: Logoo,
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
        label: 'Katalog',
        id: 'dropdown',
        subLinks: [
          { label: 'Kuliner', href: '/katalog/kuliner', id: 'kuliner' },
          { label: 'Fashion Muslim', href: 'katalog/fashion-muslim', id: 'fashion-muslim' },
          { label: 'Produk Halal', href: 'katalog/produk-halal', id: 'produk-halal' },
        ],
      },
      {
        label: 'Registrasi',
        href: '/registrasi',
        id: 'registrasi',
      },
      {
        label: 'Pelaku Usaha',
        href: '/PelakuUsaha',
        id: 'pelaku-usaha',
      },
      {
        label: 'Publikasi',
        href: '/publikasi',
        id: 'publikasi',
      },
      {
        label: 'Panduan',
        href: '/panduan',
        id: 'panduan',
      },
      {
        label: 'FAQ',
        href: '/faq',
        id: 'faq',
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
    ],
  },
  footer: {
    copyright: (
      <>

      </>
    ),
    links: [
      {
        href: '/home',
        label: 'Home',
        id: 'footer-home',
      },
      {
        href: '/etalase',
        label: 'Etalase',
        id: 'footer-etalase',
      },
      {
        href: '/kuliner',
        label: 'Kuliner',
        id: 'footer-kuliner',
      },
      {
        href: '/registrasi',
        label: 'Registrasi',
        id: 'footer-registrasi',
      },
      {
        href: '/publikasi',
        label: 'Publikasi',
        id: 'footer-publikasi',
      },
      {
        href: '/pelaku-usaha',
        label: 'Pelaku Usaha',
        id: 'footer-pelaku-usaha',
      },
      {
        href: '/panduan',
        label: 'Panduan',
        id: 'footer-panduan',
      },
      {
        href: '/faq',
        label: 'FAQ',
        id: 'footer-faq',
      },
      {
        href: '/contact-us',
        label: 'Contact Us',
        id: 'footer-contact-us',
      },
      {
        href: '/login',
        label: 'Login',
        id: 'footer-login',
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
