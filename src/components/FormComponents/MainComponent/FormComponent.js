import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Form } from 'antd'
import InputComponent from './InputComponent/InputComponent'

const StyledForm = styled(Form)`
  display: flex;
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
    this.formRef.current.resetFields()
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  formRef = React.createRef()

  render() {
    return (
      <StyledForm
        onFinish={() => this.onSubmit(this.state.value)}
        ref={this.formRef}
      >
        <InputComponent
          value={this.state.value}
          type="text"
          onChange={this.onChange}
          error={this.props.error}
        />
        <Button htmlType="submit">Submit</Button>
      </StyledForm>
    )
  }
}

export default FormComponent
