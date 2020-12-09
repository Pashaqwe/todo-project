import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import API from '../ApiComponent/api'
import 'antd/dist/antd.css'
import styled from 'styled-components'

class ListComponent extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    API.get(`todos`).then((response) => {
      this.setState({
        todos: response.data,
      })
    })
  }

  renderTodos() {
    const TodoListItem = styled(List.Item)`
      display: flex;
      justify-content: space-between;
    `
    return this.state.todos.map((item) => (
      <TodoListItem key={item.id}>
        {item.name}
        <Button type="primary">
          <DeleteOutlined />
        </Button>
      </TodoListItem>
    ))
  }

  render() {
    const TodoList = styled(List)`
      width: 30%;
      margin: 40px auto;
      font-weight: bold;
      font-size: 20px;
    `
    const TodoSpin = styled(Spin)`
      margin-top: 100px;
      display: flex;
      justify-content: center;
    `

    if (!this.state.todos.length) {
      return <TodoSpin />
    }
    return <TodoList bordered>{this.renderTodos()}</TodoList>
  }
}

export default ListComponent
