import React from 'react';
import Task from "./RenderTasks/RenderTasks";
import AddTask from "./AddTask/AddTask";
import styles from "./MyToDoList.module.scss"
import classnames from 'classnames/bind'

const cx = classnames.bind(styles);

class MyToDoList extends React.Component {
    state = {
        tasks: [
            {
                id: 1,
                name: 'Linear algebra',
                description: 'Do 15 exercises from the list that has been sent to your mail.',
                completed: false,
                message: 'Complete'

            },
            {
                id: 2,
                name: 'Discrete maths',
                description: 'Do 9 exercises from the dm-hw1.pdf on your desktop.',
                completed: true,
                message: 'Incomplete'
            },
            {
                id: 3,
                name: 'Programming',
                description: 'Write a code for a File Manager program.',
                completed: false,
                message: 'Complete'
            },
            {
                id: 4,
                name: 'English',
                description: 'Read a text and prepare for the final test.',
                completed: true,
                message: 'Incomplete'
            }
            ,
            {
                id: 5,
                name: 'Life safety',
                description: 'Do the presentation as a first and the last task for this subject.',
                completed: true,
                message: 'Incomplete'
            }
            ,
            {
                id: 6,
                name: 'Coursera',
                description: 'Watch lessons of the first week in Delivery Problems course.',
                completed: 'false',
                message: 'Complete'
            }
        ],
        theme: "light"
    }

    addTask = task => {
        const updatedTasks = [task, ...this.state.tasks]
        this.setState({
            tasks: updatedTasks
        })
    }

    changeStatus = id => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed,
                        message: task.message === "Complete" ? "Incomplete" : "Complete"
                    }
                } else {
                    return task
                }
            }),
        })
    }

    handleThemeChange = event => {
        this.setState({theme: event.target.value});
    }

    render() {
        return (
            <div className={cx("container", {[`container-theme-${this.state.theme}`]: true})}>
                <div className={cx("circles")}>
                    <div>
                        <input
                            type="radio"
                            name="theme"
                            id="light"
                            value="light"
                            checked={this.state.theme === "light"}
                            onChange={this.handleThemeChange}
                        />
                        <label htmlFor="light">Light theme</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="theme"
                            id="dark"
                            value="dark"
                            checked={this.state.theme === "dark"}
                            onChange={this.handleThemeChange}
                        />
                        <label htmlFor="dark">Dark theme</label>
                    </div>
                </div>

                <h1 className={cx("header", {[`header-theme-${this.state.theme}`]: true})}>To do list</h1>
                <div className="add-task">
                    <AddTask onSubmit={this.addTask} theme={this.state.theme}/>
                </div>
                <div className={cx("tasks", {[`tasks-theme-${this.state.theme}`]: true})}>
                {this.state.tasks.map(task => (
                    <Task
                        key={task.id}
                        changeStatus={() => this.changeStatus(task.id)}
                        task={task}
                        theme = {this.state.theme}
                    />))}
                </div>
            </div>
        )
    }
}

export default MyToDoList;