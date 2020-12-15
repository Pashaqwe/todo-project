import React, { Component } from 'react'
import API from '../api'
import TodosComponent from '../TodosComponent'

class TodosContainer extends Component {
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

  onCreateTodo = (event, name) => {
    console.log(name)
    event.preventDefault()
    event.target.value= ''
  }


  render() {
    return (
      <TodosComponent
        todos={this.state.todos}
        onCreateTodo={this.onCreateTodo}
      />
    )
  }
}

export default TodosContainer
