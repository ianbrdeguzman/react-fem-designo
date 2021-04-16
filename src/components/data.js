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
            },
            {
                url: '/',
                text: 'locations',
            },
            {
                url: '/',
                text: 'contact',
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
        },
        {
            text: 'app',
            icon: rightArrow,
            bgS: appDesignMobile,
            bgM: appDesignTablet,
            bgL: appDesignLaptop,
        },
        {
            text: 'graphic',
            icon: rightArrow,
            bgS: graphicDesignMobile,
            bgM: graphicDesignTablet,
            bgL: graphicDesignLaptop,
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
                },
                {
                    url: '/',
                    text: 'locations',
                },
                {
                    url: '/',
                    text: 'contact',
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
};
