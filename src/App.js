import React from 'react';
import './style.css'
import './App.css';



class MyTodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: 'Linear algebra',
        description: 'Do 15 exercises from the list that has been sent to your mail.',
        completed: 'false'
      },
      {
        id: 2,
        name: 'Discrete maths',
        description: 'Do 9 exercises from the dm-hw1.pdf on your desktop.',
        completed: 'true'
      },
      {
        id: 3,
        name: 'Programming',
        description: 'Write a code for a File Manager program.',
        completed: 'false'
      },
      {
        id: 4,
        name: 'English',
        description: 'Read a text and prepare for the final test.',
        completed: 'true'
      }
      ,
      {
        id: 5,
        name: 'Life safety',
        description: 'Do the presentation as a first and the last task for this subject.',
        completed: 'true'
      }
      ,
      {
        id: 6,
        name: 'Coursera',
        description: 'Watch lessons of the first week in Delivery Problems course.',
        completed: 'false'
      }
    ]
  }

  render() {
    return(
    <main>
      <h1>Task Tracker</h1>
      <div>
        {this.state.tasks.map(task => (
            <div key={task.id} className = "task">
              <p>Name: {task.name}</p>
              <p>Description: {task.description}</p>
              <p>Completed: {task.completed}</p>
              <button className="btn" onClick={() => {
                console.log('Task ' + task.id + ' completed status: ' + task.completed)}
              }><div className="button-item">complete me!</div></button>
            </div>))}
      </div>
    </main>)
  }
}

export default MyTodoList;
