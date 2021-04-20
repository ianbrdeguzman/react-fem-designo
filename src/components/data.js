import logoDark from '../assets/shared/desktop/logo-dark.png';
import logoLight from '../assets/shared/desktop/logo-light.png';
import heroImage from '../assets/home/desktop/image-hero-phone.png';
import heroBgImage from '../assets/home/desktop/bg-pattern-hero-home.svg';
import facebookIcon from '../assets/shared/desktop/icon-facebook.svg';
import youtubeIcon from '../assets/shared/desktop/icon-youtube.svg';
import twitterIcon from '../assets/shared/desktop/icon-twitter.svg';
import pinterestIcon from '../assets/shared/desktop/icon-pinterest.svg';
import instagramIcon from '../assets/shared/desktop/icon-instagram.svg';
import rightArrow from '../assets/shared/desktop/icon-right-arrow.svg';
import webDesignMobile from '../assets/home/mobile/image-web-design.jpg';
import webDesignTablet from '../assets/home/tablet/image-web-design.jpg';
import webDesignLaptop from '../assets/home/desktop/image-web-design-large.jpg';
import appDesignMobile from '../assets/home/mobile/image-app-design.jpg';
import appDesignTablet from '../assets/home/tablet/image-app-design.jpg';
import appDesignLaptop from '../assets/home/desktop/image-app-design.jpg';
import graphicDesignMobile from '../assets/home/mobile/image-graphic-design.jpg';
import graphicDesignTablet from '../assets/home/tablet/image-graphic-design.jpg';
import graphicDesignLaptop from '../assets/home/desktop/image-graphic-design.jpg';
import passionateImage from '../assets/home/desktop/illustration-passionate.svg';
import resourcefulImage from '../assets/home/desktop/illustration-resourceful.svg';
import friendlyImage from '../assets/home/desktop/illustration-friendly.svg';
import twoCircle from '../assets/shared/desktop/bg-pattern-two-circles.svg';
import aboutBgSmall from '../assets/about/mobile/bg-pattern-hero-about-mobile.svg';
import aboutBgLarge from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg';
import aboutHeroSmall from '../assets/about/mobile/image-about-hero.jpg';
import aboutRealSmall from '../assets/about/mobile/image-real-deal.jpg';
import aboutClassSmall from '../assets/about/mobile/image-world-class-talent.jpg';
import aboutHeroMedium from '../assets/about/tablet/image-about-hero.jpg';
import aboutRealMedium from '../assets/about/tablet/image-real-deal.jpg';
import aboutClassMedium from '../assets/about/tablet/image-world-class-talent.jpg';
import aboutHeroLarge from '../assets/about/desktop/image-about-hero.jpg';
import aboutRealLarge from '../assets/about/desktop/image-real-deal.jpg';
import aboutClassLarge from '../assets/about/desktop/image-world-class-talent.jpg';
import aboutCanadaLoc from '../assets/shared/desktop/illustration-canada.svg';
import aboutAustraliaLoc from '../assets/shared/desktop/illustration-australia.svg';
import aboutUKLoc from '../assets/shared/desktop/illustration-united-kingdom.svg';
import locationCanadaM from '../assets/locations/tablet/image-map-canada.png';
import locationAustraliaM from '../assets/locations/tablet/image-map-australia.png';
import locationUKM from '../assets/locations/tablet/image-map-uk.png';
import locationCanadaL from '../assets/locations/desktop/image-map-canada.png';
import locationAustraliaL from '../assets/locations/desktop/image-map-australia.png';
import locationUKL from '../assets/locations/desktop/image-map-uk.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export const data = {
    header: {
        logo: logoDark,
        open: <FaBars />,
        close: <FaTimes />,
        navbar: [
            {
                url: '/',
                text: 'our company',
                route: '/about',
            },
            {
                url: '/',
                text: 'locations',
                route: '/locations',
            },
            {
                url: '/',
                text: 'contact',
                route: '/contact',
            },
        ],
    },
    hero: {
        title: 'Award-winning custom designs and digital branding solutions',
        text:
            'With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.',
        image: heroImage,
        bg: heroBgImage,
    },
    projects: [
        {
            text: 'web',
            icon: rightArrow,
            bgS: webDesignMobile,
            bgM: webDesignTablet,
            bgL: webDesignLaptop,
            route: '/web-design',
        },
        {
            text: 'app',
            icon: rightArrow,
            bgS: appDesignMobile,
            bgM: appDesignTablet,
            bgL: appDesignLaptop,
            route: '/app-design',
        },
        {
            text: 'graphic',
            icon: rightArrow,
            bgS: graphicDesignMobile,
            bgM: graphicDesignTablet,
            bgL: graphicDesignLaptop,
            route: '/graphic-design',
        },
    ],
    features: [
        {
            title: 'PASSIONATE',
            text:
                'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
            image: passionateImage,
        },
        {
            title: 'RESOURCEFUL',
            text:
                'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
            image: resourcefulImage,
        },
        {
            title: 'FRIENDLY',
            text:
                'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
            image: friendlyImage,
        },
    ],
    footer: [
        {
            title: 'Let’s talk about your project',
            text:
                'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.',
            bg: twoCircle,
        },
        {
            logo: logoLight,
            links: [
                {
                    url: '/',
                    text: 'our company',
                    route: '/about',
                },
                {
                    url: '/',
                    text: 'locations',
                    route: '/locations',
                },
                {
                    url: '/',
                    text: 'contact',
                    route: '/contact',
                },
            ],
        },
        {
            office: 'Designo Central Office',
            street: '3886 Wellington Street',
            city: 'Toronto, Ontario M9C 3J5',
        },
        {
            contact: 'Contact Us (Central Office)',
            phone: '+12538638967',
            mail: 'contact@designo.co',
        },
        {
            social: [
                {
                    url: 'facebook.com',
                    icon: facebookIcon,
                    name: 'facebook',
                },
                {
                    url: 'youtube.com',
                    icon: youtubeIcon,
                    name: 'youtube',
                },
                {
                    url: 'twitter.com',
                    icon: twitterIcon,
                    name: 'twitter',
                },
                {
                    url: 'pinterest.com',
                    icon: pinterestIcon,
                    name: 'pinterest',
                },
                {
                    url: 'instagram.com',
                    icon: instagramIcon,
                    name: 'instagram',
                },
            ],
        },
    ],
    about: {
        textOne:
            'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
        textTwo:
            'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
        textThree:
            'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
        textFour:
            'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.',
        textFive:
            'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
        bgS: aboutBgSmall,
        bgL: aboutBgLarge,
        heroSmall: aboutHeroSmall,
        heroMedium: aboutHeroMedium,
        heroLarge: aboutHeroLarge,
        realSmall: aboutRealSmall,
        realMedium: aboutRealMedium,
        realLarge: aboutRealLarge,
        classSmall: aboutClassSmall,
        classMedium: aboutClassMedium,
        classLarge: aboutClassLarge,
        canadaImage: aboutCanadaLoc,
        australiaImage: aboutAustraliaLoc,
        ukImage: aboutUKLoc,
    },
    location: [
        {
            office: 'Designo Central Office',
            street: '3886 Wellington Street',
            city: 'Toronto, Ontario M9C 3J5',
            phone: '+12538638967',
            mail: 'contact@designo.co',
            bgm: locationCanadaM,
            bgl: locationCanadaL,
        },
        {
            office: 'Designo AU Office',
            street: '19 Balonne Street',
            city: 'New South Wales 2443',
            phone: '0267209092',
            mail: 'contact@designo.au',
            bgm: locationAustraliaM,
            bgl: locationAustraliaL,
        },
        {
            office: 'Designo UK Office',
            street: '13 Colorado Way',
            city: 'Rhyd-y-fro SA8 9GA',
            phone: '07831151400',
            mail: 'contact@designo.uk',
            bgm: locationUKM,
            bgl: locationUKL,
        },
    ],
};
