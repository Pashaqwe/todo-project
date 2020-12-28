import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { List } from 'antd'
import PropTypes from 'prop-types'
import {
  Wrapper,
  RightPanel,
  LeftPanel,
  TodoSpin,
  StyledFormComponent,
  StyledCard,
} from './StyledTodosComponent'

class TodosComponent extends Component {
  render() {
    if (!this.props.todos.length) {
      return <TodoSpin />
    }

    return (
      <Wrapper>
        <LeftPanel>
          <StyledFormComponent
            onCreateTodo={this.props.onCreateTodo}
            error={this.props.error}
          />
        </LeftPanel>
        <RightPanel>
          <List
            grid={{ gutter: 75, column: 3, wrap: true }}
            dataSource={this.props.todos}
            renderItem={(item) => (
              <List.Item>
                <StyledCard title={``}>{item.name}</StyledCard>
              </List.Item>
            )}
          />
        </RightPanel>
      </Wrapper>
    )
  }
}

TodosComponent.propTypes = {
  todos: PropTypes.array,
  onCreateTodo: PropTypes.func,
}

export default TodosComponent
