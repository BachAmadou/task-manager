import React from "react";


const SignUp = () => {
    return (
        <div>
            <div className="form">
                <div className="signup">
                    <div className="sign-title">
                        <h1>Register</h1>
                    </div>
                    <div className="fields">
                        <p>
                            <input type="text" name="name" placeholder="Full name" required />
                        </p>
                        <p>
                            <input type="email" name="email" placeholder="Email" required />
                        </p>
                        <p>
                            <input type="password" name="password" placeholder="Password" required />
                        </p>
                        <p>
                            <input type="password" name="password" placeholder="Confirm password" required />
                        </p>
                    </div>
                    <button type="submit" className="btn-submit">Create account</button>
                </div>
                <div className="others-options">
                    <p className="bottom-text">Already have an account? <a href="#">Sign In</a></p>
                </div>
            </div>
        </div>
    )
};

export default SignUp;