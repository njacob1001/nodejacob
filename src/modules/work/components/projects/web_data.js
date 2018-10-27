/* Web projects */
import grimmsMovile from './../../../../assets/img/movile-grimms.png';
import grimmsDesktop from './../../../../assets/img/desktop-grimms.png';
import wokMovile from './../../../../assets/img/movile-wok.png';
import wokdesktop from './../../../../assets/img/desktop-wok.png';
import marathonsMovile from './../../../../assets/img/movile-marathons.png';
import marathonsDesktop from './../../../../assets/img/desktop-marathons.png';
import portfolioMovile from './../../../../assets/img/movile-portfolio.png';
import portfolioDesktop from './../../../../assets/img/desktop-portfolio.png';

const webData = [
  {
    id: 'grimms',
    name: 'grimms kindergarten',
    images: [
      {
        src: grimmsDesktop,
        alt: 'Grimms desktop'
      },
      {
        src: grimmsMovile,
        alt: 'Grimms movile'
      }
    ]
  },
  {
    id: 'wok',
    name: 'wok restaurant',
    images: [
      {
        src: wokdesktop,
        alt: 'wok desktop'
      },
      {
        src: wokMovile,
        alt: 'Grimms movile'
      }
    ]
  },
  {
    id: 'marathons',
    name: 'About Marathons',
    images: [
      {
        src: marathonsDesktop,
        alt: 'marathons desktop'
      },
      {
        src: marathonsMovile,
        alt: 'marathons movile'
      }
    ]
  },
  {
    id: 'portfolio',
    name: 'my first portfolio',
    images: [
      {
        src: portfolioDesktop,
        alt: 'Grimms desktop'
      },
      {
        src: portfolioMovile,
        alt: 'Grimms movile'
      }
    ]
  }
];

export default webData;
