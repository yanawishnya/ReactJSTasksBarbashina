import React from 'react'
import shortid from 'shortid'

class AddTask extends React.Component {
    state = {
        name: '',
        description: ''
    }
    handleChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleChangeDescription = event => {
        this.setState({
            description: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            description: this.state.description,
            completed: false,
            id: shortid.generate(),
            message: "Complete"
        })
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="input" name="name"
                       value={this.state.name}
                       onChange={this.handleChange}
                       placeholder="Type name of the task"
                />
                <input className="input" name="description"
                       value={this.state.description}
                       onChange={this.handleChangeDescription}
                       placeholder="Type description"
                />
                <button className="btn2" onClick={this.handleSubmit}>Add a task</button>
            </form>
        )
    }
}

export default AddTask