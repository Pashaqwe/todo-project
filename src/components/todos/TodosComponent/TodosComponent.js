import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Card } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FormComponent from '../../FormComponents/MainComponent/FormComponent'

const Wrapper = styled.div`
  display:flex;
  width: 100%;
  min-height: 100vh;
`

const RightPanel = styled.div`
  width: 70%;
  min-height: 100vh;
  padding: 100px 50px;
  background-color: #CBC0D3;
`

const LeftPanel = styled.div`
width:30%;
background-color: #8E9AAF;
min-height: 100vh;
`

const TodoSpin = styled(Spin)`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
const StyledFormComponent = styled(FormComponent)`
margin-top:40px;
`
const StyledCard = styled(Card)`
  background-color: #4B4A67;
  color: white;
  height: 350px;
  font-weight: bold;
  font-size: 18px;
  word-wrap: break-word;
  border-color: #4B4A67;
  border-radius: 5px;
  transition: 0.6s;
  transform: rotatex(60deg) translatey(-100px) translatez(-100px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: rotatex(0deg);
    transform: rotatez(0deg);
    transition: 0.6s;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`

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
            grid={{ gutter: 100, column: 3, wrap: true }}
            dataSource={this.props.todos}
            renderItem={(item) => (
              <List.Item>
                <StyledCard title={``}>
                  {item.name}
                </StyledCard>
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
