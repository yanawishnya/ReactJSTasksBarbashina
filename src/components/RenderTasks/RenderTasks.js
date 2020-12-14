import React from "react";
import {connect} from 'react-redux'
import {Item} from './SingleItem'

const mapStateToProps = (state) => ({
    tasks: state.task.tasks,
    theme: state.theme.theme
})


const ItemsComponent = ({tasks, theme}) => {
    return (
        <div>
            {
                tasks.map(task => (
                    <Item
                        key = {task.id}
                        task={task}
                        theme = {theme}
                    />
                ))
            }
        </div>
    )
}

export const Items = connect(mapStateToProps, null)(ItemsComponent)