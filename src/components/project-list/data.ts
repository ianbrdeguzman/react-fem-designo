import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import webDesignMobile from '../../assets/home/mobile/image-web-design.jpg';
import webDesignTablet from '../../assets/home/tablet/image-web-design.jpg';
import webDesignLaptop from '../../assets/home/desktop/image-web-design-large.jpg';
import appDesignMobile from '../../assets/home/mobile/image-app-design.jpg';
import appDesignTablet from '../../assets/home/tablet/image-app-design.jpg';
import appDesignLaptop from '../../assets/home/desktop/image-app-design.jpg';
import graphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg';
import graphicDesignTablet from '../../assets/home/tablet/image-graphic-design.jpg';
import graphicDesignLaptop from '../../assets/home/desktop/image-graphic-design.jpg';

const data = [
  {
    text: 'web',
    icon: rightArrow,
    bgS: webDesignMobile,
    bgM: webDesignTablet,
    bgL: webDesignLaptop,
    route: '/web-design'
  },
  {
    text: 'app',
    icon: rightArrow,
    bgS: appDesignMobile,
    bgM: appDesignTablet,
    bgL: appDesignLaptop,
    route: '/app-design'
  },
  {
    text: 'graphic',
    icon: rightArrow,
    bgS: graphicDesignMobile,
    bgM: graphicDesignTablet,
    bgL: graphicDesignLaptop,
    route: '/graphic-design'
  }
];

export default data;
