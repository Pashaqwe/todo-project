import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Button, Input, Form } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 30%;
  margin: 40px auto 10px;
`
const TodoForm = styled(Form)`
  display: flex;
`
const TodoInput = styled(Input)`
  display: flex;
`
const TodoButton = styled(Button)`
  display: flex;
`
const TodoList = styled(List)`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
`
const TodoSpin = styled(Spin)`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

const TodoListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`

class TodosComponent extends Component {
  state = {
    value: '',
  }
  renderTodos() {
    return this.props.todos.map((item) => (
      <TodoListItem key={item.id}>
        {item.name}
        <Button type="primary">
          <DeleteOutlined />
        </Button>
      </TodoListItem>
    ))
  }

  onSubmit = (event, name) => {
    this.props.onCreateTodo(event, name)
    this.setState({
      value: '',
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    if (!this.props.todos.length) {
      return <TodoSpin />
    }
    return (
      <Wrapper>
        <TodoList bordered>{this.renderTodos()}</TodoList>
        <TodoForm onFinish={() => this.onSubmit(this.state.value)}>
          <Form.Item>
            <TodoInput
              value={this.state.value}
              type="text"
              onChange={this.onChange}
            ></TodoInput>
          </Form.Item>
          <TodoButton type="primary" htmlType="submit">
            Submit
          </TodoButton>
        </TodoForm>
      </Wrapper>
    )
  }
}

TodosComponent.propTypes = {
  todos: PropTypes.array,
  onCreateTodo: PropTypes.func,
}

export default TodosComponent
