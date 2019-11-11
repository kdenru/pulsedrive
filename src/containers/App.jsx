import React from 'react'
import reset from 'styled-reset-advanced'
import { createGlobalStyle } from 'styled-components'

import Info from './Info'

import { Container, Title, Footer } from './styles'

const GlobalStyle = createGlobalStyle`
  ${reset}
`;


const App = () => (
  <Container>
    <Title>Host info</Title>
    <Info />
    <Footer />
    <GlobalStyle />
  </Container>
);

export default App
