import React, { Component } from 'react'
import API from '../api'
import TodosComponent from '../TodosComponent'

class TodosContainer extends Component {
  state = {
    todos: [],
    serverError: false,
    page: 1,
    inputValue: '',
  }

  componentDidMount() {
    this.fetchTodos()
  }

  fetchTodos = () => {
    API.get(`todos?page=${this.state.page}`).then((response) => {
      this.setState({
        todos: this.state.todos.concat(response.data),
        page: this.state.page + 1,
      })
    })
  }

  onCreateTodo = (name) => {
    API.post(`todos`, { name })
      .then((response) => {
        const { name, id, created_at } = response.data
        this.setState({
          todos: [...this.state.todos, { name, id, created_at }],
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
      const todo = this.state.todos.find((item) => item.id === id)
      todo.disabled = true
      const todos = this.state.todos.filter((item) => item.id !== id)
      this.setState({ ...todos, todo })
    })
  }

  onChangeTodo = (id, name) => {
    API.put(`todos/${id}`, { name }).then((response) => {
      const todo = this.state.todos.find((item) => item.id === id)
      todo.editing = true
      this.setState({
        inputValue:
          this.state.inputValue === undefined || this.state.inputValue === ''
            ? todo.name
            : name,
      })
      const todos = this.state.todos.filter((item) => item.id !== id)
      this.setState({ ...todos, todo })
    })
  }

  saveChange = (id) => {
    const todo = this.state.todos.find((item) => item.id === id)
    todo.editing = false
    todo.name = this.state.inputValue
    const todos = this.state.todos.filter((item) => item.id !== id)
    this.setState({ ...todos, todo, inputValue: '' })
  }

  closeErrorWindow = () => {
    this.setState({
      serverError: false,
    })
  }

  render() {
    return (
      <TodosComponent
        saveChange={this.saveChange}
        onChangeTodo={this.onChangeTodo}
        fetchTodos={this.fetchTodos}
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
