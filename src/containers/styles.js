import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    padding: 40px 0 60px;
    background-color: #eeeeee;
    font-family: 'Montserrat', sans-serif;
`

export const Title = styled.h1`
    color: #555555;
    font-size: 32px;
    text-align: center;

    :after {
      left: 5px;
      top: -18px;
      color: #06e606;
      content: 'beta';
      font-size: 12px;
      position: relative;
      text-transform: uppercase;
    }
`

export const Footer = styled.div`
  bottom: 0;
  width: 100%;
  height: 300px;
  position: absolute;
  background-color: #555555;
`
