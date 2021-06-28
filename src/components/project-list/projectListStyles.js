import styled from 'styled-components';
import { device } from '../helpers/device';

export const Section = styled.section`
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} {
        padding: 6rem 2rem;
        display: grid;
        justify-items: center;
        align-items: stretch;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        grid-template-areas:
            'web app'
            'web graphic';
        a:nth-child(1) {
            grid-area: web;
            height: auto;
        }
        a:nth-child(2) {
            grid-area: app;
        }
        a:nth-child(3) {
            grid-area: graphic;
        }
    }
    @media ${device.laptopL} {
        padding: 6rem 2.5rem;
    }
    @media ${device.desktop} {
        padding: 6rem 22rem;
    }
`;