import React from "react";
import { connect } from "react-redux";
import styles from './RenderTasks.module.scss'
import classnames from 'classnames/bind'
import {handleCompletedChange} from "../../actions/tasks"

const cx = classnames.bind(styles)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnCompletedChange: (newCompleted) => dispatch(handleCompletedChange(newCompleted))
})

const ItemComponent = ({
                           task,
                           theme,
                           dispatchOnCompletedChange,
                       }) => {
    const onCompletedChange = (e) => {
        e.preventDefault()
        dispatchOnCompletedChange({
            id: task.id,
            name: task.name,
            description: task.description,
            completed: !task.completed,
            buttonText: task.completed ? "Complete" : "Incomplete"
        })

    }
    return (
        <div className={cx("blocks", {[`blocks-theme-${theme}`]: true})}>
            <p className={cx("name", {[`name-theme-${theme}`]: true})}>
                Name: {task.name}</p>
            <p className={cx("description", {[`description-theme-${theme}`]: true})}>
                Description: {task.description}</p>
            <p className={cx("completed", {[`completed-theme-${theme}`]: true})}>
                Completed: {String(task.completed)}</p>
            <button
                onClick={onCompletedChange}
                className={cx("btn-complete", {[`btn-complete-theme-${theme}`]: true})}>{task.buttonText}
            </button>
        </div>
    );
}

export const Item = connect(null, mapDispatchToProps)(ItemComponent);