import React, { Component } from 'react'
import {
  StyledForm,
  Wrapper,
  StyledParagraph,
  StyledButton,
} from './StyledFormComponent'
import InputComponent from './InputComponent/InputComponent'

class FormComponent extends Component {
  state = {
    value: '',
    errorDescription: '',
  }

  onSubmit = (name, e) => {
    e.preventDefault()
    if (this.props.error) {
      this.setState({
        errorDescription: 'Сервер не отвечает, попробуйте позже',
      })
    } else {
      this.props.onCreateTodo(name)
      this.setState({
        value: '',
      })
    }
  }

  validateField() {
    let errorDescription
    if (!this.state.value.length) {
      errorDescription = 'Поле не должно быть пустым'
    } else if (this.state.value.trim().length < 3) {
      errorDescription = 'Заметка должна быть длиннее 3 символов'
    }
    this.setState({
      errorDescription,
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
    this.validateField()
  }

  render() {
    return (
      <StyledForm onSubmit={(e) => this.onSubmit(this.state.value, e)}>
        <Wrapper>
          <InputComponent
            name="name"
            value={this.state.value}
            type="text"
            onChange={this.onChange}
            error={this.props.error}
            hasError={!this.state.errorDescription.length}
          />
          <StyledButton disabled={!this.state.errorDescription.length} onSubmit={(e) => this.onSubmit(this.state.value, e)}>
            Submit
          </StyledButton>
        </Wrapper>
        <StyledParagraph>{this.state.errorDescription}</StyledParagraph>
      </StyledForm>
    )
  }
}

export default FormComponent
