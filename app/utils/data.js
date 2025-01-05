import { v4 as uuidv4 } from 'uuid';

export const AUTH_PATHS = ['/login'];

export const NAV_LINKS = [
  { id: uuidv4(), href: '/', label: 'Home' },
  { id: uuidv4(), href: '/search', label: 'Search' },
  { id: uuidv4(), href: '/about', label: 'About' },
  { id: uuidv4(), href: '/contact', label: 'Contact' },
];

export const COUNTRIES = [
  {
    id: uuidv4(),
    strArea: 'American',
    flag: 'https://flagcdn.com/w320/us.png',
  },
  { id: uuidv4(), strArea: 'British', flag: 'https://flagcdn.com/w320/gb.png' },
  {
    id: uuidv4(),
    strArea: 'Canadian',
    flag: 'https://flagcdn.com/w320/ca.png',
  },
  { id: uuidv4(), strArea: 'Chinese', flag: 'https://flagcdn.com/w320/cn.png' },
  {
    id: uuidv4(),
    strArea: 'Croatian',
    flag: 'https://flagcdn.com/w320/hr.png',
  },
  { id: uuidv4(), strArea: 'Dutch', flag: 'https://flagcdn.com/w320/nl.png' },
  {
    id: uuidv4(),
    strArea: 'Egyptian',
    flag: 'https://flagcdn.com/w320/eg.png',
  },
  {
    id: uuidv4(),
    strArea: 'Filipino',
    flag: 'https://flagcdn.com/w320/ph.png',
  },
  { id: uuidv4(), strArea: 'French', flag: 'https://flagcdn.com/w320/fr.png' },
  { id: uuidv4(), strArea: 'Greek', flag: 'https://flagcdn.com/w320/gr.png' },
  { id: uuidv4(), strArea: 'Indian', flag: 'https://flagcdn.com/w320/in.png' },
  { id: uuidv4(), strArea: 'Irish', flag: 'https://flagcdn.com/w320/ie.png' },
  { id: uuidv4(), strArea: 'Italian', flag: 'https://flagcdn.com/w320/it.png' },
  {
    id: uuidv4(),
    strArea: 'Jamaican',
    flag: 'https://flagcdn.com/w320/jm.png',
  },
  {
    id: uuidv4(),
    strArea: 'Japanese',
    flag: 'https://flagcdn.com/w320/jp.png',
  },
  { id: uuidv4(), strArea: 'Kenyan', flag: 'https://flagcdn.com/w320/ke.png' },
  {
    id: uuidv4(),
    strArea: 'Malaysian',
    flag: 'https://flagcdn.com/w320/my.png',
  },
  { id: uuidv4(), strArea: 'Mexican', flag: 'https://flagcdn.com/w320/mx.png' },
  {
    id: uuidv4(),
    strArea: 'Moroccan',
    flag: 'https://flagcdn.com/w320/ma.png',
  },
  { id: uuidv4(), strArea: 'Polish', flag: 'https://flagcdn.com/w320/pl.png' },
  {
    id: uuidv4(),
    strArea: 'Portuguese',
    flag: 'https://flagcdn.com/w320/pt.png',
  },
  { id: uuidv4(), strArea: 'Russian', flag: 'https://flagcdn.com/w320/ru.png' },
  { id: uuidv4(), strArea: 'Spanish', flag: 'https://flagcdn.com/w320/es.png' },
  { id: uuidv4(), strArea: 'Thai', flag: 'https://flagcdn.com/w320/th.png' },
  {
    id: uuidv4(),
    strArea: 'Tunisian',
    flag: 'https://flagcdn.com/w320/tn.png',
  },
  { id: uuidv4(), strArea: 'Turkish', flag: 'https://flagcdn.com/w320/tr.png' },
  {
    id: uuidv4(),
    strArea: 'Ukrainian',
    flag: 'https://flagcdn.com/w320/ua.png',
  },
  { id: uuidv4(), strArea: 'Unknown', flag: 'https://flagcdn.com/w320/xx.png' },
];
