import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Button, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 30%;
  margin: 40px auto 10px;
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

  render() {
    if (!this.props.todos.length) {
      return <TodoSpin />
    }
    return (
      <Wrapper>
        <TodoList bordered>{this.renderTodos()}</TodoList>
        <form
          onSubmit={(event) => this.props.onCreateTodo(event, this.props.value)}
        >
          <Input value={this.props.value} type="text" onChange={this.props.onChange}></Input>
          <Input type="submit" value="Отправить" />
        </form>
      </Wrapper>
    )
  }
}

export default TodosComponent
