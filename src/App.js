import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.state = {
      todoItems: []
    }
  }

  getData(data) {
    let joined = this.state.todoItems.concat(data)
    this.setState({todoItems: joined})
  }

  deleteItem(index) {
    // console.log(index)
    let newArray = this.state.todoItems.filter((item, i) => {
      return i !== index
    })
    this.setState({todoItems: newArray})
  }

  render() {
    return(
      <div>
        <TodoForm sendData={this.getData} />
        <TodoList todoItems={this.state.todoItems} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App
