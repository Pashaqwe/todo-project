import React, { Component } from 'react'
import { StyledCard, StyledList } from '../StyledTodosComponent'

class TodoListComponent extends Component {
  render() {
    return (
      <StyledList>
        {this.props.todos.map((item) => {
          return <StyledCard key={item.id}>{item.name}</StyledCard>
        })}
      </StyledList>
    )
  }
}

export default TodoListComponent