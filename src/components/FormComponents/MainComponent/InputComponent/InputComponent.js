import React, { Component } from 'react'
import StyledInput, { Wrapper, StyledButton } from './StyledInputComponent'

class InputComponent extends Component {
  render() {
    return (
      <Wrapper>
        <StyledInput
          errorInput={this.props.errorDescription}
          type="text"
          placeholder="Введите заметку"
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <StyledButton
          disabled={this.props.errorDescription || !this.props.value}
          onSubmit={(e) => this.onSubmit(this.state.value, e)}
        >
          Submit
        </StyledButton>
      </Wrapper>
    )
  }
}

export default InputComponent
