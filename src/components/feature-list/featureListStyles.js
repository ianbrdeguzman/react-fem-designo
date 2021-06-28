import styled from 'styled-components';
import { device } from '../helpers/device';

export const Section = styled.section`
    padding: 0 0 15rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    article div:nth-child(1):before {
        content: '';
        width: 202px;
        height: 202px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        opacity: 50%;
        z-index: -1;
    }

    article:nth-child(1) div:nth-child(1):before {
        background: linear-gradient(
            90deg,
            rgba(93, 2, 2, 0.497569),
            rgba(93, 2, 2, 0.0001)
        );
    }
    article:nth-child(2) div:nth-child(1):before {
        background: linear-gradient(
            180deg,
            rgba(93, 2, 2, 0.0001),
            rgba(93, 2, 2, 0.497569)
        );
    }
    article:nth-child(3) div:nth-child(1):before {
        background: linear-gradient(
            180deg,
            rgba(93, 2, 2, 0.497569),
            rgba(93, 2, 2, 0.0001)
        );
    }
    @media ${device.laptop} {
        padding: 0 0 12rem 0;
    }
`;