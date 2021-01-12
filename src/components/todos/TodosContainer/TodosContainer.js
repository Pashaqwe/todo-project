import React, { Component } from 'react'
import API from '../api'
import TodosComponent from '../TodosComponent'

class TodosContainer extends Component {
  state = {
    todos: [],
    serverError: false,
  }

  componentDidMount() {
    API.get(`todos`).then((response) => {
      this.setState({
        todos: response.data,
      })
    })
  }

  onCreateTodo = (name) => {
    API.post(`todos`, { name })
      .then((response) => {
        const { name, id } = response.data
        this.setState({
          todos: [...this.state.todos, { name, id }],
        })
      })
      .catch((error) => {
        this.setState({
          serverError: true,
        })
      })
  }

  onDeleteTodo = (id) => {
    API.delete(`todos/${id}`).then((response) => {
      const todos = this.state.todos.filter((item) => item.id !== id)
      this.setState({ todos })
    })
  }

  closeErrorWindow = () => {
    this.setState({
      serverError: false,
    })
  }

  render() {
    return (
      <TodosComponent
        onDeleteTodo={this.onDeleteTodo}
        closeErrorWindow={this.closeErrorWindow}
        serverError={this.state.serverError}
        todos={this.state.todos}
        onCreateTodo={this.onCreateTodo}
      />
    )
  }
}

export default TodosContainer
