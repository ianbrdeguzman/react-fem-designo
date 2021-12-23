import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import webDesignMobile from '../../assets/home/mobile/image-web-design.jpg';
import webDesignTablet from '../../assets/home/tablet/image-web-design.jpg';
import webDesignLaptop from '../../assets/home/desktop/image-web-design-large.jpg';
import appDesignMobile from '../../assets/home/mobile/image-app-design.jpg';
import appDesignTablet from '../../assets/home/tablet/image-app-design.jpg';
import appDesignLaptop from '../../assets/home/desktop/image-app-design.jpg';
import graphicDesignBg from '../../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg';
import graphicDesignBoxWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import graphicDesignChange from '../../assets/graphic-design/desktop/image-change.jpg';
import graphicDesignScience from '../../assets/graphic-design/desktop/image-science.jpg';

const data = {
  text: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
  bg: graphicDesignBg,
  designs: [
    {
      title: 'box water',
      text: 'A simple packaging concept made for Boxed Water',
      image: graphicDesignBoxWater
    },
    {
      title: 'change',
      text: 'A book cover designed for Tim Brown’s new release, ‘Change’',
      image: graphicDesignChange
    },
    {
      title: 'science',
      text: 'A poster made in collaboration with the Federal Art Project',
      image: graphicDesignScience
    }
  ],
  projects: [
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
    }
  ]
};

export default data;
