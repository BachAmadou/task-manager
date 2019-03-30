import React,  { component } from 'react';
import { Route, link } from 'react-route-dom';

class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Route path="/logIn" component={LogIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/resetPassword" component={ResetPassword} />
            </div>
        );
    }
}

export default App;