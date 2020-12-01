import React from 'react';
import './style.css'
import { MyToDoList } from './components/MyToDoList'
import { Provider } from 'react-redux'
import {createStore} from "redux";
import {rootReducer} from "./reducers";

const store = createStore(rootReducer)

class MyTodoList extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <div className="rootFolder">
                <MyToDoList/>
            </div>
        </Provider>
    );
  }
}

export default MyTodoList;
