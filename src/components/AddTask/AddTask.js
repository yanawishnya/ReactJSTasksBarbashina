import React, {useState} from 'react';
import styles from './AddTask.module.scss'
import classnames from 'classnames/bind'
import { handleAddTask } from "../../actions/task";
import { connect } from "react-redux";

const cx = classnames.bind(styles)
const mapStateToProps = (state) => ({
    tasks: state.task.tasks,
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddTask: (taskInfo) => dispatch(handleAddTask(taskInfo))
});

const AddTaskComponent = ({tasks, dispatchOnAddTask, theme}) => {
    const [task, setTask] = useState({
        id: 0,
        name: '',
        description: '',
        completed: false,
        buttonText: "Complete"
    })

    const onNameChange = (e) => {
        e.persist()
        setTask(previousTask => ({
            ...previousTask,
            name: e.target.value
        }))
    }

    const onDescriptionChange = (e) => {
        e.persist()
        setTask(previousTask => ({
            ...previousTask,
            description: e.target.value
        }))
    }
    const onSubmit = () => {
        setTask(previousTask => ({
            ...previousTask,
            id: tasks.length + 1,
            completed: false,
            buttonText: "Complete"
        }))
        console.log(task)
        dispatchOnAddTask(task)
    }

    return (
        <div>
            <h1 className={cx("header", {[`header-theme-${theme}`]: true})}>Add task</h1>
            <input
                className={cx("input", {[`input-theme-${theme}`]: true})}
                name="name"
                value={task.name}
                onChange={onNameChange}
                placeholder="Enter task"
            />
            <input
                className={cx("input", {[`input-theme-${theme}`]: true})}
                name="description"
                value={task.description}
                onChange={onDescriptionChange}
                placeholder="Enter description"
            />
            <button className={cx("btnAdd", {[`btnAdd-theme-${theme}`]: true})} onClick={onSubmit}>Add</button>
        </div>
    )
}


export const AddTask = connect(mapStateToProps, mapDispatchToProps)(AddTaskComponent)