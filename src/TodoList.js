import React from 'react'

import './index.css'

class TodoList extends React.Component {

    createItems(data) {
        return data.map((item, index) => {
            return (
                <li className="list-group-item" key={index}>{item}
                    <button className="btn btn-danger" style={{float: "right"}} type="button" onClick={() => this.props.deleteItem(index)}>Delete</button>
                </li>
            )
        })
    }

    render() {
        let items = this.createItems(this.props.todoItems)
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <ul className="list-group">
                        {items}
                    </ul>
                </div>
                <div className="col-md-3"></div>
            </div>
            
        )
    }
}

export default TodoList