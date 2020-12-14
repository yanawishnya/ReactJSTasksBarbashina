import React from 'react'
import shortid from 'shortid'
import styles from "./AddTask.module.scss"
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

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
                <input className={cx("input", {[`input-theme-${this.props.theme}`]: true})}
                       name="name"
                       value={this.state.name}
                       onChange={this.handleChange}
                       placeholder="Type name of the task"
                />
                <input className={cx("input", {[`input-theme-${this.props.theme}`]: true})}
                       name="description"
                       value={this.state.description}
                       onChange={this.handleChangeDescription}
                       placeholder="Type description"
                />
                <button className={cx("btnAdd", {[`btnAdd-theme-${this.props.theme}`]: true})}
                        onClick={this.handleSubmit}>Add task</button>
            </form>
        )
    }
}

export default AddTask