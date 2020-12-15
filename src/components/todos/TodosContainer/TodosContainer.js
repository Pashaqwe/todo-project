import React, { Component } from 'react'
import API from '../api'
import TodosComponent from '../TodosComponent'

class TodosContainer extends Component {
  state = {
    todos: [],
    value:''
  }

  componentDidMount() {
    API.get(`todos`).then((response) => {
      this.setState({
        todos: response.data,
      })
    })
  }

  onCreateTodo = (event, name) => {
    console.log(name)
    event.preventDefault()
    this.setState({
      value: ''
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    return (
      <TodosComponent
        todos={this.state.todos}
        onCreateTodo={this.onCreateTodo}
        onChange={this.onChange}
        value={this.state.value}
      />
    )
  }
}

export default TodosContainer
