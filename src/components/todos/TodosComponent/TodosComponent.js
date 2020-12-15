import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Button, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Wrapper = styled.div`
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

class TodosComponent extends Component {

    state={
        value:''
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

  onChange=(e)=>{
    this.setState({
        value: e.target.value
    })
  }
  render() {
    if (!this.props.todos.length) {
      return <TodoSpin />
    }
    return (
      <Wrapper>
        <TodoList bordered>{this.renderTodos()}</TodoList>
        <form>
          <Input type="text" onChange={this.onChange}></Input>
          <Button onClick={()=>this.props.onCreateTodo(this.state.value)}>Добавить</Button>
        </form>
      </Wrapper>
    )
  }
}

export default TodosComponent
