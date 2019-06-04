import React from 'react'

import './index.css'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.todoFormSubmit = this.todoFormSubmit.bind(this)
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
        this.setState({ todoItem: val })
        this.props.sendData(val)
        event.target.elements.todoItem.value = ''
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form className="form-inline" onSubmit={this.todoFormSubmit}>
                        <div className="form-group mx-sm-3 mb-2">
                            <input className="form-control" type="text" name="todoItem" placeholder="Todo" />
                        </div>
                        <button className="btn btn-primary mb-2" type="submit">Submit</button>
                    </form>

                    
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default TodoForm