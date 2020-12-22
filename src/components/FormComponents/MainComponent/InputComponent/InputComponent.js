import React, { Component } from 'react'
import { Input, Form } from 'antd'

class InputComponent extends Component {
  render() {
    console.log(this.props.value)
    if (this.props.error) {
      return (
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Поле не должно быть пустым',
            },
          ]}
          name="note"
          validateStatus="error"
          help="Сервер не отвечает попробуйте позже"
        >
          <Input type='text' onChange={this.props.onChange} value={this.props.value} />
        </Form.Item>
      )
    } else {
      return (
        <Form.Item
          name="note"
          rules={[
            { required: true, message: 'Поле не должно быть пустым', },
            { min: 4, message: 'Заметка должна быть длиннее 3 символов' },
            { max: 124, message: 'Заметка должна быть короче 124 символов' },
          ]}
        >
          <Input type='text' onChange={this.props.onChange} value={this.props.value} />
        </Form.Item>
      )
    }
  }
}

export default InputComponent
