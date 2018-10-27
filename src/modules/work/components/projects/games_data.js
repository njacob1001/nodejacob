/* Videogamesprojects */
import deoPies from './../../../../assets/img/desktop-deopies.png';
import deoPieskinect from './../../../../assets/img/kineckt.png';
import escape from './../../../../assets/img/movile-escape.png';
import claro from './../../../../assets/img/movile-claro.png';

const gamesData = [
  {
    id: 'escape',
    name: 'escape videogame',
    images: [
      {
        src: escape,
        alt: 'escape movile videogame'
      }
    ]
  },
  {
    id: 'deopies',
    name: 'Woman Runner (Colombia)',
    images: [
      {
        src: deoPies,
        alt: 'deoPies videogame'
      },
      {
        src: deoPieskinect,
        alt: 'kineck'
      }
    ]
  },
  {
    id: 'claro',
    name: 'Claro movile',
    images: [
      {
        src: claro,
        alt: 'claro videogame'
      }
    ]
  }
];

export default gamesData;
