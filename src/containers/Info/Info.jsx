import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Input } from 'components'

import { fetchInfo } from 'store/actions'

import { Container } from './styles'

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
    const { query } = this.state

    return (
      <Container>
        <Input
          value={query}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </Container>
    )
  }
}

Info.propTypes = {
  onFetchInfo: PropTypes.func.isRequired,
}

const mapStateToProps = store => ({
  info: store.root,
})

const mapDispatchToProps = { onFetchInfo: fetchInfo }

export default connect(mapStateToProps, mapDispatchToProps)(Info)
