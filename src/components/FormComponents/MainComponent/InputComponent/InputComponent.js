import React, { Component } from 'react'
import { Input, Form } from 'antd'

class InputComponent extends Component {
  render() {
    console.log(this.props.value.length)
    if (this.props.error) {
      return (
        <Form.Item name="notes" validateStatus="error" help="qqq">
          <Input onChange={this.props.onChange} value={this.props.value} />
        </Form.Item>
      )
    } else {
      return (
        <Form.Item
          name="note"
          rules={[
            { min: 4, message: 'Заметка должна быть длиннее 3 символов' },
            { max: 124, message: 'Заметка должна быть короче 124 символов' },
          ]}
        >
          <Input onChange={this.props.onChange} value={this.props.value} />
        </Form.Item>
      )
    }
  }
}

export default InputComponent
