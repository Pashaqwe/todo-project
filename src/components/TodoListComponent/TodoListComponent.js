import React, { Component } from 'react'
import {
  StyledCard,
  StyledList,
  StyledParagraph,
  TrashButton,
  StyledDate,
  ChangeButton,
  ConfirmButton,
  StyledInput,
} from './StyledTodoListComponent'
import InfiniteScroll from 'react-infinite-scroll-component'
import Moment from 'react-moment'
import 'moment-timezone'
class TodoListComponent extends Component {
  state = { inputValue: '' }
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
                <StyledParagraph>
                  {item.editing ? (
                    <span>
                      <StyledInput
                        defaultValue={item.name}
                        onChange={(e) =>
                          this.props.onChangeTodo(item.id, e.target.value)
                        }
                      />
                      <ConfirmButton
                        onClick={() => this.props.saveChange(item.id)}
                      >
                       <img alt='' src="https://img.icons8.com/color/25/000000/verified-account.png"/>
                      </ConfirmButton>
                    </span>
                  ) : (
                    item.name
                  )}
                  {console.log(item.editing)}
                </StyledParagraph>

                <ChangeButton onClick={() => this.props.onChangeTodo(item.id)}>
                  {
                    <img
                      alt=""
                      src="https://img.icons8.com/android/20/000000/pencil.png"
                    />
                  }
                </ChangeButton>
                <StyledDate>
                  <Moment format="DD/MM/YYYY">{item.created_at}</Moment>
                </StyledDate>
                <TrashButton onClick={() => this.props.onDeleteTodo(item.id)}>
                  {
                    <img
                      alt=""
                      src="https://img.icons8.com/material-rounded/20/000000/delete-trash.png"
                    />
                  }
                </TrashButton>
              </StyledCard>
            )
          })}
        </StyledList>
      </InfiniteScroll>
    )
  }
}

export default TodoListComponent
