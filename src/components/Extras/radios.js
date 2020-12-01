import React from 'react'
import styles from './radios.module.scss'
import classnames from 'classnames/bind'
import { handleThemeChange } from '../../actions/theme'
import { connect } from "react-redux"

const cx = classnames.bind(styles);

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOnThemeChange: (theme) =>
        dispatch(handleThemeChange(theme))
})

const ButtonsComponent = ({
                              theme,
                              dispatchOnThemeChange
                          }) => {
    const onThemeChange = (e) => {
        dispatchOnThemeChange(e.target.value)
    }
    return (
        <div className={cx("radios")}>
            <div>
                <input
                    type="radio"
                    name="theme"
                    id="light"
                    value="light"
                    checked={theme === "light"}
                    onChange={onThemeChange}
                />
                <label htmlFor="light">Light theme</label>
            </div>

            <div>
                <input
                    type="radio"
                    name="theme"
                    id="dark"
                    value="dark"
                    checked={theme === "dark"}
                    onChange={onThemeChange}
                />
                <label htmlFor="dark">Dark theme</label>
            </div>
        </div>
    )
}
export const Extras = connect(mapStateToProps, mapDispatchToProps)(ButtonsComponent)