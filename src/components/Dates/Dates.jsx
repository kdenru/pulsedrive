import React from 'react'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder'
import { RectShape } from 'react-placeholder/lib/placeholders'
import isEmpty from 'lodash/isEmpty'

import { Container, Row } from './styles'

const Placeholder = (<RectShape color="#ccc" style={{ width: 350, height: 100, borderRadius: 4 }} />)

const Dates = ({ data, loading }) => (
  <>
    {(!isEmpty(data) || loading) && (
      <ReactPlaceholder customPlaceholder={Placeholder} ready={!loading}>
        <Container>
          {!isEmpty(data) && (
            <>
              <Row>Added: {data.stamp_added}</Row>
              <Row>Probed: {data.stamp_probed}</Row>
              <Row>Seen: {data.stamp_seen}</Row>
              <Row>Updated: {data.stamp_updated}</Row>
            </>
          )}
        </Container>
      </ReactPlaceholder>
    )}
  </>
)

Dates.defaultProps = {
  data: {},
}

Dates.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
}

export default Dates
