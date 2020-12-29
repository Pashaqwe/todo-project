import React, { Component } from 'react'
import StyledInput from './StyledInputComponent'

class InputComponent extends Component {
  render() {
    if (!this.props.hasError || this.props.error) {
      return (
        <StyledInput
          errorInput
          type="text"
          placeholder="Введите заметку"
          onChange={this.props.onChange}
          value={this.props.value}
        />
      )
    } else {
      return (
        <StyledInput
          type="text"
          placeholder="Введите заметку"
          onChange={this.props.onChange}
          value={this.props.value}
        />
      )
    }
  }
}

export default InputComponent
