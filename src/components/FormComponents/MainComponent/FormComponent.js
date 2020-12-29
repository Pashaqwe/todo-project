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
    } else if (!this.state.value.length) {
      this.setState({
        errorDescription: 'Поле не должно быть пустым',
      })
    } else {
      this.props.onCreateTodo(name)
      this.setState({
        value: '',
      })
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
    if (this.state.value.trim().length < 3) {
      this.setState({
        errorDescription: 'Заметка должна быть длиннее 3 символов',
      })
    } else {
      this.setState({
        errorDescription: '',
      })
    }
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
            hasError={!this.state.errorDescription}
          />
          <StyledButton
            disabled={this.state.errorDescription}
            onSubmit={(e) => this.onSubmit(this.state.value, e)}
          >
            Submit
          </StyledButton>
        </Wrapper>
        <StyledParagraph>{this.state.errorDescription}</StyledParagraph>
      </StyledForm>
    )
  }
}

export default FormComponent
