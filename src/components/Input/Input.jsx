import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './styles'

const Input = ({ value, onChange, onSubmit }) => (
  <StyledInput
    value={value}
    onChange={onChange}
    placeholder="example.domain"
    onKeyDown={e => { if (e.key === 'Enter') onSubmit() }}
  />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input
