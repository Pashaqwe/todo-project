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
    API.post(`todoss`, { name })
      .then((response) => {
        this.setState({
          todos: [...this.state.todos, { name }]
        })
      })
      .catch((error) => {
        this.setState({
          serverError: true,
        })
      })
  }

  closeErrorWindow = ()=>{
    this.setState({
      serverError: false,
    })
  }
  

  render() {
    return (
      <TodosComponent
        closeErrorWindow={this.closeErrorWindow}
        serverError={this.state.serverError}
        todos={this.state.todos}
        onCreateTodo={this.onCreateTodo}
      />
    )
  }
}

export default TodosContainer
