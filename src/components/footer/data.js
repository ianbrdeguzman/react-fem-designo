import logoLight from '../../assets/shared/desktop/logo-light.png';
import footerBgSmall from '../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg';
import footerBgMedium from '../../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg';
import footerBgLarge from '../../assets/shared/desktop/bg-pattern-call-to-action.svg';
import facebookIcon from '../../assets/shared/desktop/icon-facebook.svg';
import youtubeIcon from '../../assets/shared/desktop/icon-youtube.svg';
import twitterIcon from '../../assets/shared/desktop/icon-twitter.svg';
import pinterestIcon from '../../assets/shared/desktop/icon-pinterest.svg';
import instagramIcon from '../../assets/shared/desktop/icon-instagram.svg';
import twoCircle from '../../assets/shared/desktop/bg-pattern-two-circles.svg';

export const data = [
        {
            title: 'Let’s talk about your project',
            text:
                'Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.',
            bg: twoCircle,
            bgs: footerBgSmall,
            bgm: footerBgMedium,
            bgl: footerBgLarge,
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
                    url: 'https://facebook.com',
                    icon: facebookIcon,
                    name: 'facebook',
                },
                {
                    url: 'https://youtube.com',
                    icon: youtubeIcon,
                    name: 'youtube',
                },
                {
                    url: 'https://twitter.com',
                    icon: twitterIcon,
                    name: 'twitter',
                },
                {
                    url: 'https://pinterest.com',
                    icon: pinterestIcon,
                    name: 'pinterest',
                },
                {
                    url: 'https://instagram.com',
                    icon: instagramIcon,
                    name: 'instagram',
                },
            ],
        },
    ];