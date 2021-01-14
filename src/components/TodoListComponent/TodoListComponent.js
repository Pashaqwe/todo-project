import React, { Component } from 'react'
import {
  StyledCard,
  StyledList,
  StyledParagraph,
  StyledButton,
  StyledDate,
} from './StyledTodoListComponent'
import InfiniteScroll from 'react-infinite-scroll-component'
import Moment from 'react-moment'
import 'moment-timezone'
class TodoListComponent extends Component {
  state = { inputValue:'' }
  render() {
    return (
      <InfiniteScroll
        dataLength={this.props.todos.length}
        next={this.props.fetchTodos}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <StyledList>
          {this.props.todos.map((item) => {
            return (
              <StyledCard isDisabled={item.disabled} key={item.id}>
                <StyledParagraph
                  
                >
                  {item.editing ? (
                    <span>
                      <input
                        defaultValue={item.name}
                        onChange={(e) => this.props.onChangeTodo(item.id, e.target.value)}
                      />
                      <button onClick={() => this.props.saveChange(item.id)}>
                  Save
                </button>
                    </span>
                  ) : (
                    item.name
                  )}
                  {console.log(item.editing)}
                </StyledParagraph>
                
                <button onClick={() => this.props.onChangeTodo(item.id)}>Change Todo</button>
                <StyledDate>
                  <Moment format="DD/MM/YYYY">{item.created_at}</Moment>
                </StyledDate>
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
      </InfiniteScroll>
    )
  }
}

export default TodoListComponent
