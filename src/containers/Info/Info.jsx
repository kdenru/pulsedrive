import React, { PureComponent } from 'react'

import { Input } from 'components'

import { Container } from './styles'

class Info extends PureComponent {
  state = { query: '' }

  onSubmit = () => {
    const { query } = this.state
    console.log(query)
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

export default Info
