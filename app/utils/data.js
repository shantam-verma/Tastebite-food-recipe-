import { v4 as uuidv4 } from 'uuid';

export const CATEGORIES = [
  { id: uuidv4(), label: 'Pasta', img: '/images/pasta.png' },
  { id: uuidv4(), label: 'Pizza', img: '/images/pasta.png' },
  { id: uuidv4(), label: 'Rools', img: '/images/pasta.png' },
  { id: uuidv4(), label: 'Desert', img: '/images/pasta.png' },
  { id: uuidv4(), label: 'Bun', img: '/images/pasta.png' },
  { id: uuidv4(), label: 'Spaghetti', img: '/images/pasta.png' },
];

export const AUTH_PATHS = ['/register', '/login'];

export const NAV_LINKS = [
  { id: uuidv4(), href: '/', label: 'Home' },
  { id: uuidv4(), href: '/menu', label: 'Menu' },
  { id: uuidv4(), href: '/about', label: 'About' },
  { id: uuidv4(), href: '/contact', label: 'Contact' },
];
