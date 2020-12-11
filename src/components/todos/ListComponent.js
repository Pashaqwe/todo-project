import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Button, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import API from './api'
import 'antd/dist/antd.css'
import styled from 'styled-components'

const MainDiv = styled.div`
  width: 30%;
  margin: 40px auto 10px;
`

const BottomInputAndBtnDiv = styled.div`
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

class ListComponent extends Component {
  state = {
    todos: [],
    newTodo: {
      name: '',
      done: null,
    },
  }

  renderTodos() {
    return this.state.todos.map((item) => (
      <TodoListItem key={item.id}>
        {item.name}
        <Button type="primary">
          <DeleteOutlined />
        </Button>
      </TodoListItem>
    ))
  }

  getRequest() {
    API.get(`todos`).then((response) => {
      this.setState({
        todos: response.data,
      })
    })
  }

  componentDidMount() {
    this.getRequest()
  }

  newTodoItem = (e) => {
    e.preventDefault()
    this.setState({
      newTodo: { name: e.target.value },
    })
  }

  pushNewTodoInData = (e) => {
    e.preventDefault()
    API.post(`todos`, this.state.newTodo).then((response) => {
      this.getRequest()
    })
    this.setState({
      newTodo: { name: '' },
    })
  }

  render() {
    if (!this.state.todos.length) {
      return <TodoSpin />
    }
    return (
      <MainDiv>
        <TodoList bordered>{this.renderTodos()}</TodoList>
        <BottomInputAndBtnDiv>
          <Input type="text" onChange={this.newTodoItem}></Input>
          <Button onClick={this.pushNewTodoInData}>Добавить</Button>
        </BottomInputAndBtnDiv>
      </MainDiv>
    )
  }
}

export default ListComponent
