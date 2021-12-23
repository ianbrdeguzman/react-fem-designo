import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import webDesignMobile from '../../assets/home/mobile/image-web-design.jpg';
import webDesignTablet from '../../assets/home/tablet/image-web-design.jpg';
import webDesignLaptop from '../../assets/home/desktop/image-web-design-large.jpg';
import graphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg';
import graphicDesignTablet from '../../assets/home/tablet/image-graphic-design.jpg';
import graphicDesignLaptop from '../../assets/home/desktop/image-graphic-design.jpg';
import appDesignBg from '../../assets/app-design/desktop/bg-pattern-intro-app.svg';
import appDesignAirFilter from '../../assets/app-design/desktop/image-airfilter.jpg';
import appDesignEyecam from '../../assets/app-design/desktop/image-eyecam.jpg';
import appDesigndFaceit from '../../assets/app-design/desktop/image-faceit.jpg';
import appDesignLoopStudios from '../../assets/app-design/desktop/image-loopstudios.jpg';
import appDesignTodo from '../../assets/app-design/desktop/image-todo.jpg';

const data = {
  text: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
  bg: appDesignBg,
  designs: [
    {
      title: 'airfilter',
      text: 'Solving the problem of poor indoor air quality by filtering the air',
      image: appDesignAirFilter
    },
    {
      title: 'eyecam',
      text: 'Product that lets you edit your favorite photos and videos at any time',
      image: appDesignEyecam
    },
    {
      title: 'faceit',
      text: 'Get to meet your favorite internet superstar with the faceit app',
      image: appDesigndFaceit
    },
    {
      title: 'loopstudios',
      text: 'A VR experience app made for Loopstudios',
      image: appDesignLoopStudios
    },
    {
      title: 'todo',
      text: 'A todo app that features cloud sync with light and dark mode',
      image: appDesignTodo
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
