import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LogIn from "./components/logIn";
import SignUp from "./components/signUp";
import ResetPassword from "./components/resetPassword";
//import Dashboard from "./components/Dashboard";


class TaskManagerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowCurrentComponent: "SignUp"
        }
    }
    
    render() {
        return (
            <div className="app">
                <SignUp />
                <LogIn />
                <ResetPassword />
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <TaskManagerForm />
    </Router>,
   document.getElementById("root"));
