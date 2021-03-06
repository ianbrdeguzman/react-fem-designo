import styled from 'styled-components';
import { Link } from 'react-router-dom';
import device from '../../components/helpers/device';
import { IStyles } from '../../styleType';

export const ContactContainer = styled.div`
  margin: 0 0 4rem 0;
  text-align: center;
  color: #ffffff;
  background-color: #e7816b;
  background-image: url(${(props: IStyles) => props.bgs});
  background-position: 22% -20%;
  div {
    width: 90%;
    margin: 0 auto;
  }
  div:first-child {
    padding: 4rem 0 0 0;
  }
  div:first-child h1 {
    margin: 0 0 2rem 0;
    font-size: 2.5rem;
  }
  form {
    padding: 2rem 1rem 4rem 1rem;
  }
  form input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: none;
    border-bottom: 1px solid #ffffff;
    background-color: transparent;
    font-family: 'Jost', sans-serif;
    color: #ffffff;
    ::-webkit-input-placeholder {
      font-family: inherit;
      font-weight: 600;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.5);
    }
    :-ms-input-placeholder {
      font-family: inherit;
      font-weight: 600;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.5);
    }
    ::placeholder {
      font-family: inherit;
      font-weight: 600;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  form textarea {
    padding: 0.5rem;
    width: 100%;
    height: 100px;
    margin: 0 0 2rem 0;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ffffff;
    font-family: 'Jost', sans-serif;
    color: #ffffff;
    ::-webkit-input-placeholder {
      font-family: inherit;
      font-weight: 600;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.5);
    }
    :-ms-input-placeholder {
      font-family: inherit;
      font-weight: 600;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.5);
    }
    ::placeholder {
      font-family: inherit;
      font-weight: 600;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  form button {
    padding: 1rem 2rem;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  form button:hover {
    background-color: #ffad9b;
    color: #ffffff;
  }
  @media ${device.mobileM} {
    background-position: 20% -20%;
  }
  @media ${device.mobileM} {
    background-position: 18% -20%;
  }
  @media ${device.tablet} {
    width: 90%;
    margin: 0 auto;
    border-radius: 1rem;
    background-image: url(${(props) => props.bgl});
    background-repeat: no-repeat;
    background-position: -200% -200%;
    div {
      width: 80%;
      margin: 0 auto;
    }
    form {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media ${device.laptop} {
    background-position: -50% -500%;
  }
  @media ${device.laptopL} {
    display: flex;
    align-items: center;
    margin: 0 auto 4rem auto;
    background-position: 0 100%;
    div:first-child {
      padding: 0 6rem;
      text-align: left;
    }
    form {
      padding: 2rem;
    }
  }
  @media ${device.desktop} {
    width: 60%;
  }
`;

export const LocationWrapper = styled.div`
  text-align: center;
  margin: 0 auto 20rem 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 2rem 0;
    position: relative;
  }
  div h2 {
    letter-spacing: 2px;
    margin: 0 0 2rem 0;
  }
  div button {
    color: #ffffff;
    background-color: #e7816b;
    padding: 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  div button:hover {
    background-color: #ffad9b;
  }
  div div {
    margin: 2rem 0;
  }
  div div:nth-child(1)::before {
    content: '';
    width: 202px;
    height: 202px;
    border-radius: 50%;
    z-index: -1;
    opacity: 40%;
    background: linear-gradient(
      180deg,
      rgba(93, 2, 2, 0.497569),
      rgba(93, 2, 2, 0.0001)
    );
    position: absolute;
    top: 0;
    left: 0;
  }
  div:nth-child(2) div:nth-child(1)::before {
    background: linear-gradient(
      90deg,
      rgba(93, 2, 2, 0.497569),
      rgba(93, 2, 2, 0.0001)
    );
  }
  div:nth-child(3) div:nth-child(1)::before {
    background: linear-gradient(
      0deg,
      rgba(93, 2, 2, 0.497569),
      rgba(93, 2, 2, 0.0001)
    );
  }
  @media ${device.tablet} {
    margin: 0 auto 20rem 0;
  }
  @media ${device.laptop} {
    width: 90%;
    margin: 1rem auto 10rem auto;
    display: flex;
    justify-content: space-between;
  }
  @media ${device.laptopL} {
    margin: 0 auto 12rem auto;
  }
  @media ${device.desktop} {
    width: 60%;
  }
`;

export const Button = styled(Link)`
  color: #ffffff;
  background-color: #e7816b;
  padding: 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffad9b;
  }
`;
