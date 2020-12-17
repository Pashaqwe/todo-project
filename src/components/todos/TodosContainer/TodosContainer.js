import React, { Component } from 'react'
import API from '../api'
import TodosComponent from '../TodosComponent'

class TodosContainer extends Component {
  state = {
    todos: [],
  }

  getRequest(){
    API.get(`todos`).then((response) => {
      this.setState({
        todos: response.data,
      })
    })
  }
  
  componentDidMount() {
    this.getRequest()
  }

  onCreateTodo = (name) => {
    API.post(`todos` , {name}).then(
      this.getRequest()
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
