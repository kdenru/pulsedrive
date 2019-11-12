import React from 'react'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder';

import { Container, Title, Row } from './styles'

const Risks = ({ risk, factors, loading }) => (
  <Container>
    <ReactPlaceholder ready={!loading} rows={4}>
      {risk && (
        <>
          <Title meduim={risk === 'medium'}>
            {risk === 'medium' ? 'Meduim risk' : 'Very low risk'}
          </Title>
          {factors.map(item => (
            <Row key={item.rfid} medium={item.risk === 'medium'}>{item.description}</Row>
          ))}
        </>
      )}
    </ReactPlaceholder>
  </Container>
)

Risks.defaultProps = {
  risk: '',
  factors: [],
}

Risks.propTypes = {
  risk: PropTypes.string,
  factors: PropTypes.array,
  loading: PropTypes.bool.isRequired,
}

export default Risks
