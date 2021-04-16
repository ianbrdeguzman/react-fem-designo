import logoDark from '../assets/shared/desktop/logo-dark.png';
import heroImage from '../assets/home/desktop/image-hero-phone.png';
import facebookIcon from '../assets/shared/desktop/icon-facebook.svg';
import youtubeIcon from '../assets/shared/desktop/icon-youtube.svg';
import twitterIcon from '../assets/shared/desktop/icon-twitter.svg';
import pinterestIcon from '../assets/shared/desktop/icon-pinterest.svg';
import instagramIcon from '../assets/shared/desktop/icon-instagram.svg';
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
    },
    projects: ['web', 'app', 'graphic'],
    features: [
        {
            title: 'PASSIONATE',
            text:
                'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
        },
        {
            title: 'RESOURCEFUL',
            text:
                'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
        },
        {
            title: 'FRIENDLY',
            text:
                'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
        },
    ],
    footer: [
        {
            title: 'Let’s talk about your project',
            text:
                'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.',
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
                },
                {
                    url: 'youtube.com',
                    icon: youtubeIcon,
                },
                {
                    url: 'twitter.com',
                    icon: twitterIcon,
                },
                {
                    url: 'pinterest.com',
                    icon: pinterestIcon,
                },
                {
                    url: 'instagram.com',
                    icon: instagramIcon,
                },
            ],
        },
    ],
};
