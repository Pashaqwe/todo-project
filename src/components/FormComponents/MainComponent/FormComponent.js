import React, { Component } from 'react'
import { StyledForm, Wrapper, StyledParagraph } from './StyledFormComponent'
import InputComponent from './InputComponent/InputComponent'
import ErrorWindowComponent from '../../ErrorWindowComponent'

class FormComponent extends Component {
  state = {
    value: '',
    errorDescription: '',
  }

  onSubmit = (name, e) => {
    e.preventDefault()
    if (this.props.serverError) {
      return
    } else {
      this.props.onCreateTodo(name)
      this.setState({
        value: '',
      })
    }
  }

  validationFields() {
    if (!this.state.value.length) {
      this.setState({
        errorDescription: 'Поле не должно быть пустым',
      })
    } else if (this.state.value.trim().length < 3) {
      this.setState({
        errorDescription: 'Заметка должна быть длиннее 3 символов',
      })
    } else {
      this.setState({
        errorDescription: '',
      })
    }
  }

  onChange = (e) => {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        this.validationFields()
      }
    )
  }

  render() {
    return (
      <StyledForm onSubmit={(e) => this.onSubmit(this.state.value, e)}>
        <Wrapper>
          <InputComponent
            errorDescription={this.state.errorDescription}
            name="name"
            value={this.state.value}
            type="text"
            onChange={this.onChange}
            serverError={this.props.serverError}
            ValidationError={!this.state.errorDescription}
          />
          <StyledParagraph>{this.state.errorDescription}</StyledParagraph>
          <ErrorWindowComponent
            serverError={this.props.serverError}
            closeErrorWindow={this.props.closeErrorWindow}
          />
        </Wrapper>
      </StyledForm>
    )
  }
}

export default FormComponent
