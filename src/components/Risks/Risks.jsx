import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title, Row } from './styles'

const Risks = ({ risk, factors }) => (
  <>
    {risk && (
      <Container>
        <Title meduim={risk === 'medium'}>
          {risk === 'medium' ? 'Meduim risk' : 'Very low risk'}
        </Title>
        {factors.map(item => (
          <Row key={item.rfid} medium={item.risk === 'medium'}>{item.description}</Row>
        ))}
      </Container>
    )}
  </>
)

Risks.defaultProps = {
  risk: '',
  factors: [],
}

Risks.propTypes = {
  risk: PropTypes.string,
  factors: PropTypes.array,
}

export default Risks
