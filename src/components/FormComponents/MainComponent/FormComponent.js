import React, { Component } from 'react'
import styled from 'styled-components'
import InputComponent from './InputComponent/InputComponent'

const StyledForm= styled.form`
margin-left:10%;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom:5px;
`

const StyledParagraph = styled.p`
  color: #EE6C4D;
  font-weight:bold;
`
const StyledButton= styled.button`
padding-left:20px;
padding-right:20px;
border: 1px solid #E5FFDE;
background-color:#E5FFDE;
color:#9590A8;
outline:none;
border-radius: 0 6px 6px 0;
margin-left: -3px;
height:40px;
`
class FormComponent extends Component {
  state = {
    value: '',
    errorDescription: '',
    errorInput: false,
  }

  onSubmit = (name, e) => {
    e.preventDefault()
    if (this.props.error) {
      this.setState({
        errorDescription: 'Сервер не отвечает, попробуйте позже',
        errorInput: true,
      })
      return
    } else if (this.state.value.length === 0) {
      this.setState({
        errorDescription: 'Поле не должно быть пустым',
        errorInput: true,
      })
      return
    } else if (this.state.value.length >= 0 && this.state.value.length < 3) {
      return
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
    if (this.state.value.length >= 0 && this.state.value.length < 3) {
      this.setState({
        errorDescription: 'Заметка должна быть длиннее 3 символов',
        errorInput: true,
      })
      return
    } else {
      this.setState({
        errorDescription: '',
        errorInput: false,
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
            errorInput={this.state.errorInput}
          />
          <StyledButton onSubmit={(e) => this.onSubmit(this.state.value, e)}>
            Submit
          </StyledButton>
        </Wrapper>
        <StyledParagraph>{this.state.errorDescription}</StyledParagraph>
      </StyledForm>
    )
  }
}

export default FormComponent
