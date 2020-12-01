import React from 'react'
import {Items} from './RenderTasks/RenderTasks'
import {AddTask} from './AddTask/AddTask'
import {Extras} from './Extras/radios'
import styles from './MyToDoList.module.scss'
import { handleThemeChange } from "../actions/theme";
import classnames from 'classnames/bind'
import {connect} from "react-redux"

const cx = classnames.bind(styles);


const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnThemeChange: (theme) => dispatch(handleThemeChange(theme))
})

const MyToDoListComponent = ({theme}) => {
    return (
            <main className={cx("container", {[`container-theme-${theme}`]: true})}>
                <Extras/>
                <AddTask/>
                <Items/>
            </main>
    )
}

export const MyToDoList = connect(mapStateToProps, mapDispatchToProps)(MyToDoListComponent)