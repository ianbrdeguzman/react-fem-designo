import styled from 'styled-components';
import device from '../../components/helpers/device';
import { IStyles } from '../../styleType';

export const Hero = styled.div`
  width: 100%;
  margin: 0 auto 4rem auto;
  padding: 4rem 1rem;
  text-align: center;
  color: #ffffff;
  background-color: #e7816b;
  background-image: url(${(props: IStyles) => props.bg});
  background-position: 23% 50%;
  h1 {
    margin: 0 0 2rem 0;
    font-size: 2rem;
  }
  @media ${device.mobileM} {
    background-position: 21% 50%;
  }
  @media ${device.mobileL} {
    background-position: 18% 50%;
  }
  @media ${device.tablet} {
    width: 90%;
    border-radius: 1rem;
    p {
      width: 60%;
      margin: 0 auto;
    }
  }
  @media ${device.laptopL} {
    width: 90%;
    border-radius: 1rem;
    p {
      width: 40%;
    }
  }
  @media ${device.desktop} {
    width: 60%;
    border-radius: 1rem;
  }
`;

export const Projects = styled.div`
  margin: 0 auto 2rem auto;
  display: flex;
  flex-wrap: wrap;
  article {
    text-align: center;
    width: 90%;
    margin: 0 auto 2rem auto;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
  }
  article div {
    transition: all 0.3s ease;
  }
  article:hover div {
    color: #ffffff;
    background-color: #e7816b;
  }
  article:hover div h2 {
    color: #ffffff;
  }
  @media ${device.tablet} {
    width: 90%;
    article {
      width: 100%;
      display: flex;
    }
  }
  @media ${device.laptop} {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    article {
      flex-direction: column;
      width: 100%;
      justify-self: center;
    }
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.desktop} {
    width: 60%;
    article {
      max-width: 350px;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 255px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${device.tablet} {
    height: 400px;
    min-width: 400px;
    max-width: 400px;
  }
  @media ${device.laptop} {
    min-width: unset;
    max-width: unset;
  }
`;

export const InfoWrapper = styled.div`
  padding: 2rem 0;
  background-color: #fdf3f0;
  h2 {
    color: #e7816b;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  @media ${device.tablet} {
    padding: 9rem 2rem 2rem 2rem;
  }
  @media ${device.laptop} {
    padding: 2rem;
  }
`;

export const Section = styled.section`
  margin: 0 0 19rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    width: 90%;
    margin: 0 auto 13rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    a {
      width: 100%;
      justify-self: center;
    }
  }
  @media ${device.desktop} {
    width: 60%;
  }
`;
