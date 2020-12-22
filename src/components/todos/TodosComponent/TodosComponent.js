import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Card } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FormComponent from '../../FormComponents/MainComponent/FormComponent'

const Wrapper = styled.div`
  width: 50%;
  margin: 40px auto 10px;
`

const TodoSpin = styled(Spin)`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

const StyledCard = styled(Card)`
  background: linear-gradient(
      rgba(135, 60, 255, 0.4),
      rgba(135, 60, 255, 0) 80%
    ),
    linear-gradient(
      -45deg,
      rgba(120, 155, 255, 0.9) 25%,
      rgba(255, 160, 65, 0.9) 75%
    );
  height: 200px;
  color: white;
  font-weight: bold;
  word-wrap: break-word;
  border-radius: 20px;
`

class TodosComponent extends Component {
  render() {
    if (!this.props.todos.length) {
      return <TodoSpin />
    }

    return (
      <Wrapper>
        <List
          grid={{ gutter: 16, column: 3, wrap: true }}
          dataSource={this.props.todos}
          renderItem={(item) => (
            <List.Item>
              <StyledCard title={`Заметка №${item.id}`}>{item.name}</StyledCard>
            </List.Item>
          )}
        />
        <FormComponent
          onCreateTodo={this.props.onCreateTodo}
          error={this.props.error}
        />
      </Wrapper>
    )
  }
}

TodosComponent.propTypes = {
  todos: PropTypes.array,
  onCreateTodo: PropTypes.func,
}

export default TodosComponent
