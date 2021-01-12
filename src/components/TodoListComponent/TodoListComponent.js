import React, { Component } from 'react'
import {
  StyledCard,
  StyledList,
  StyledParagraph,
  StyledButton,
} from './StyledTodoListComponent'

class TodoListComponent extends Component {
  render() {
    return (
      <StyledList>
        {this.props.todos.map((item) => {
          return (
            <StyledCard key={item.id}>
              <StyledParagraph>{item.name}</StyledParagraph>
              <StyledButton onClick={() => this.props.onDeleteTodo(item.id)}>
                {
                  <img
                    alt=""
                    src="https://img.icons8.com/bubbles/40/000000/trash.png"
                  />
                }
              </StyledButton>
            </StyledCard>
          )
        })}
      </StyledList>
    )
  }
}

export default TodoListComponent
