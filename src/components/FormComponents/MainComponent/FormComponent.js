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
    if (this.props.serverError ) {
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
    this.setState({
      value: e.target.value,
    },()=>{this.validationFields()})
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
          <StyledButton
            disabled={this.state.errorDescription || !this.state.value}
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
