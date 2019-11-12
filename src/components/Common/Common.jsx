import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from './styles'

const Common = ({ data }) => {
  const { redirects, umbrella_rank } = data

  return (
    <Container>
      {redirects && redirects.from
        && <Row>{redirects.from.length} indicators redirects to this one</Row>}
      {umbrella_rank && <Row>Ranked {umbrella_rank} in Cisko Umbrella top 1M websites</Row>}
    </Container>
  )
}

Common.defaultProps = {
  data: {},
}

Common.propTypes = {
  data: PropTypes.object,
}

export default Common
