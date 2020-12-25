import React, { Component } from 'react'
import styled from 'styled-components'

const ErrorStyledInput = styled.input`
border-radius: 6px 0 0 6px;
outline:none;
  border: 3px solid #EE6C4D;
  height:40px;
  width:70%;
`
const StyledInput= styled.input`
border-radius: 6px 0 0 6px;
outline:none;
  border: 3px solid #E5FFDE;
  height:40px;
  width:70%;
`

class InputComponent extends Component {
  render() {
    if (this.props.error || this.props.errorInput) {
      return (
          <ErrorStyledInput
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
