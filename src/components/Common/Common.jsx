import React from 'react'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder';
import isEmpty from 'lodash/isEmpty'

import { Container, Row } from './styles'

const Common = ({ data, loading }) => {
  const { redirects, umbrella_rank } = data

  return (
    <>
      {(!isEmpty(data) || loading) && (
        <Container>
          <ReactPlaceholder ready={!loading} rows={2}>
            {redirects && redirects.from
              && <Row>{redirects.from.length} indicators redirects to this one</Row>}
            {umbrella_rank && <Row>Ranked {umbrella_rank} in Cisko Umbrella top 1M websites</Row>}
          </ReactPlaceholder>
        </Container>
      )}
    </>
  )
}

Common.defaultProps = {
  data: {},
}

Common.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
}

export default Common
