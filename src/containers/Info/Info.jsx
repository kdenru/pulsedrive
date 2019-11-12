import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  Input,
  Common,
  Dates,
  Attributes,
  Risks,
} from 'components'

import { fetchInfo } from 'store/actions'

import { Container, Row } from './styles'

class Info extends PureComponent {
  state = { query: '' }

  onSubmit = () => {
    const { query } = this.state
    const { onFetchInfo } = this.props
    onFetchInfo(query)
  }

  onChange = event => {
    const query = event.target.value;
    this.setState({ query })
  }

  render() {
    const { info } = this.props
    const { query } = this.state
    console.log(info.data)

    return (
      <Container>
        <Input
          value={query}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Row>
          <Common data={info.data} />
          <Dates data={info.data} />
        </Row>
        <Row>
          <Risks risk={info.data.risk} factors={info.data.riskfactors} />
          <Attributes data={info.data.attributes} />
        </Row>
      </Container>
    )
  }
}

Info.propTypes = {
  info: PropTypes.object.isRequired,
  onFetchInfo: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
  info: store,
})

const mapDispatchToProps = { onFetchInfo: fetchInfo }

export default connect(mapStateToProps, mapDispatchToProps)(Info)
