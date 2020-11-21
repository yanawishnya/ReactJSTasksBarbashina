import React from 'react';
import Task from "./RenderTasks/RenderTasks";
import AddTask from "./AddTask/AddTask";

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
        ]
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

    render() {
        return (
            <main>
                <h1>To do list</h1>
                <div className="add-task">
                    <AddTask onSubmit={this.addTask}/>
                </div>
                {this.state.tasks.map(task => (
                    <Task
                        key={task.id}
                        changeStatus={() => this.changeStatus(task.id)}
                        task={task}
                    />))}
            </main>
        )
    }
}

export default MyToDoList;