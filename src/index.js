import React from "react";
import ReactDOM from "react-dom";

import LogIn from "./components/logIn";
import SignUp from "./components/signUp";
import ResetPassword from "./components/resetPassword";
//import Dashboard from "./components/Dashboard";

const App = () => {
    return (
    <div className="app">
        <SignUp />
        <LogIn />
        <ResetPassword />
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
