import React from 'react'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder'
import isEmpty from 'lodash/isEmpty'

import {
  Container,
  Row,
  AttributesRow,
  Attribute,
  Title,
} from './styles'


const Attributes = ({ data, loading }) => (
  <>
    {(!isEmpty(data) || loading) && (
      <Container>
        <ReactPlaceholder ready={!loading} rows={6}>
          {Object.keys(data).map(key => (
            <Row key={key}>
              <Title>{key}</Title>
              <AttributesRow>
                {data[key].map(item => <Attribute key={item}>{item}</Attribute>)}
              </AttributesRow>
            </Row>
          ))}
        </ReactPlaceholder>
      </Container>
    )}
  </>
)

Attributes.defaultProps = {
  data: {},
}

Attributes.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
}

export default Attributes
