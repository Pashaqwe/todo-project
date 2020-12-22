import React, { Component } from 'react'
import API from '../api'
import TodosComponent from '../TodosComponent'

class TodosContainer extends Component {
  state = {
    todos: [],
    hasError: false,
  }

  componentDidMount() {
    API.get(`todos`).then((response) => {
      this.setState({
        todos: response.data,
      })
    })
  }

  onCreateTodo = (name) => {
    let newArray

    API.post(`todos`, { name })
      .then((response) => {
        newArray = [...this.state.todos, { name }]
        this.setState({
          todos: newArray,
        })
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            hasError: true,
          })
        } else if (error.request) {
          this.setState({
            hasError: true,
          })
          console.log(this.hasError)
        } else {
          this.setState({
            hasError: true,
          })
        }
      })
  }

  render() {
    return (
      <TodosComponent
        error={this.state.hasError}
        todos={this.state.todos}
        onCreateTodo={this.onCreateTodo}
      />
    )
  }
}

export default TodosContainer
