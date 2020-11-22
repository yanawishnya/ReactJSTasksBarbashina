import React from 'react'
import styles from "./RenderTasks.module.scss"
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

class Task extends React.Component {
    render () {
        return (
            <div  className={cx("task-blocks", {[`task-blocks-theme-${this.props.theme}`]: true})}>
                <p className={cx("task-name", {[`task-name-theme-${this.props.theme}`]: true})}>Name: {this.props.task.name}</p>
                <p className={cx("task-description", {[`task-description-theme-${this.props.theme}`]: true})}>Description: {this.props.task.description}</p>
                <p className={cx("task-completeness", {[`task-completeness-theme-${this.props.theme}`]: true})}>Completed: {this.props.task.completed.toString()}</p>
                <button onClick={this.props.changeStatus}
                        className={cx("btn-complete", {[`btn-complete-theme-${this.props.theme}`]: true})}>{this.props.task.message}</button>
            </div>
        )
    }
}
export default Task