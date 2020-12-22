import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Form } from 'antd'
import InputComponent from './InputComponent/InputComponent'

const StyledButton = styled(Button)`
  display: flex;
  margin: 0 auto;
  background: linear-gradient(
      rgba(135, 60, 255, 0.4),
      rgba(135, 60, 255, 0) 80%
    ),
    linear-gradient(
      -45deg,
      rgba(120, 155, 255, 0.9) 25%,
      rgba(255, 160, 65, 0.9) 75%
    );
  &:hover {
    background: linear-gradient(
      #c6e4ee 0%,
      #c6e4ee 40%,
      #fed1ae 60%,
      #faa0b9 70%,
      #cb7dcb 80%,
      #757ecb 100%
    );
    color: black;
  }
`

class FormComponent extends Component {
  state = {
    value: '',
  }

  onSubmit = (name) => {
    this.props.onCreateTodo(name)
    this.setState({
      value: '',
    })
  }

  onChange = (e) => {
    console.log(this.state.value)
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <Form onFinish={() => this.onSubmit(this.state.value)}>
        <InputComponent
          value={this.state.value}
          type="text"
          onChange={this.onChange}
          error={this.props.error}
        />
        <StyledButton type="primary" htmlType="submit">
          Submit
        </StyledButton>
      </Form>
    )
  }
}

export default FormComponent
