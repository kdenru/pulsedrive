import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from './styles'

const Dates = ({ data }) => (
  <>
    {data.stamp_added && (
      <Container>
        <Row>Added: {data.stamp_added}</Row>
        <Row>Probed: {data.stamp_probed}</Row>
        <Row>Seen: {data.stamp_seen}</Row>
        <Row>Updated: {data.stamp_updated}</Row>
      </Container>
    )}
  </>
)

Dates.defaultProps = {
  data: {},
}

Dates.propTypes = {
  data: PropTypes.object,
}

export default Dates
