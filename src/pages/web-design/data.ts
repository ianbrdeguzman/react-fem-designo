import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import appDesignMobile from '../../assets/home/mobile/image-app-design.jpg';
import appDesignTablet from '../../assets/home/tablet/image-app-design.jpg';
import appDesignLaptop from '../../assets/home/desktop/image-app-design.jpg';
import graphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg';
import graphicDesignTablet from '../../assets/home/tablet/image-graphic-design.jpg';
import graphicDesignLaptop from '../../assets/home/desktop/image-graphic-design.jpg';
import webDesignExpress from '../../assets/web-design/desktop/image-express.jpg';
import webDesignTransfer from '../../assets/web-design/desktop/image-transfer.jpg';
import webDesignPhoton from '../../assets/web-design/desktop/image-photon.jpg';
import webDesignBuilder from '../../assets/web-design/desktop/image-builder.jpg';
import webDesignBlogr from '../../assets/web-design/desktop/image-blogr.jpg';
import webDesignCamp from '../../assets/web-design/desktop/image-camp.jpg';
import webDesignBg from '../../assets/web-design/desktop/bg-pattern-intro-web.svg';

const data = {
  text: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
  bg: webDesignBg,
  designs: [
    {
      title: 'express',
      text: 'A multi-carrier shipping website for ecommerce businesses',
      image: webDesignExpress
    },
    {
      title: 'transfer',
      text: 'A multi-carrier shipping website for ecommerce businesses',
      image: webDesignTransfer
    },
    {
      title: 'photon',
      text: 'A multi-carrier shipping website for ecommerce businesses',
      image: webDesignPhoton
    },
    {
      title: 'builder',
      text: 'A multi-carrier shipping website for ecommerce businesses',
      image: webDesignBuilder
    },
    {
      title: 'blogr',
      text: 'A multi-carrier shipping website for ecommerce businesses',
      image: webDesignBlogr
    },
    {
      title: 'camp',
      text: 'A multi-carrier shipping website for ecommerce businesses',
      image: webDesignCamp
    }
  ],
  projects: [
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
  ]
};

export default data;
