import React from 'react'

class Task extends React.Component {
    render () {
        return (
            <div  className="task">
                <p>Name: {this.props.task.name}</p>
                <p>Description: {this.props.task.description}</p>
                <p>Completed: {this.props.task.completed.toString()}</p>
                <button className="btn" onClick={this.props.changeStatus}>{this.props.task.message}</button>
            </div>
        )
    }
}
export default Task