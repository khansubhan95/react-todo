import React from 'react'
// import PropTypes from 'prop-types'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.todoFormSubmit =this.todoFormSubmit.bind(this)
    this.state = {
      todoItem: ''
    }
  }

  todoFormSubmit(event) {
    event.preventDefault()
      let val = event.target.elements.todoItem.value
      if (val === '') {
        return
      }
      this.setState({todoItem: val})
      this.props.sendData(val)
      event.target.elements.todoItem.value = ''
  }

  render() {
    return(
      <form onSubmit={this.todoFormSubmit}>
        <label>
          Todo:<input type="text" name="todoItem" />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

class TodoList extends React.Component {

  createItems(data) {
    return data.map((item, index) => {
      return (
        <li key={index}>{item} <button type="button" onClick={() => this.props.deleteItem(index)}>Delete</button></li>
      )
    })
  }

  render() {
    let items = this.createItems(this.props.todoItems)
    return(
      <ul>
        {items}
      </ul>
    )
  }
}

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
    console.log(index)
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
