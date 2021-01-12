import React, { Component } from 'react'
import StyledInput from './StyledInputComponent'

class InputComponent extends Component {
  render() {
    return (
      <StyledInput
        errorInput={this.props.errorDescription}
        type="text"
        placeholder="Введите заметку"
        onChange={this.props.onChange}
        value={this.props.value}
      />
    )
  }
}

export default InputComponent
