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

  onCreateTodo = (name) => {
    let newArray
    newArray = [...this.state.todos, name]
    API.post(`todos`, { name }).then(
      newArray = [...this.state.todos, {name}],
      this.setState({
        todos: newArray
      })
    )
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
