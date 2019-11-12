import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Row,
  AttributesRow,
  Attribute,
  Title,
} from './styles'


const Attributes = ({ data }) => (
  <>
    {data.port && (
      <Container>
        {Object.keys(data).map(key => (
          <Row key={key}>
            <Title>{key}</Title>
            <AttributesRow>
              {data[key].map(item => <Attribute key={item}>{item}</Attribute>)}
            </AttributesRow>
          </Row>
        ))}
      </Container>
    )}
  </>
)

Attributes.defaultProps = {
  data: {},
}

Attributes.propTypes = {
  data: PropTypes.object,
}

export default Attributes
