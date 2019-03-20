import React from "react";


const LogIn = () => {
    return (
        <div>
            <div className="form">
                <div className="login">
                    <div className="log-title">
                        <h1>Log In</h1>
                    </div>
                    <div className="login-fields">
                        <p>
                            <input type="email" name="email" placeholder="Email" required />
                        </p>
                        <p>
                            <input type="password" name="password" placeholder="Password" required />
                        </p>
                    </div>
                    <button type="submit" className="btn-submit">Send</button>
                </div>
                <div className="others-options">
                    <p className="reset-text"><a href="#">Forgot password</a></p>
                    <p className="bottom-text">Do not have an account? <a href="#">Register</a></p>
                </div>
            </div>
        </div>
    )
};

export default LogIn;
