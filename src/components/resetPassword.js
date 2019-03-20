import React from "react";


const ResetPassword = () => {
    return (
        <div>
            <div className="form">
                <div className="login">
                    <div className="reset-title">
                        <h1>Reset password</h1>
                    </div>
                    <div className="resetPassword-fields">
                        <p>
                            <input type="email" name="email" placeholder="Email" required/>
                        </p>
                    </div>
                    <button type="submit" className="btn-submit">Send email</button>
                </div>
                <div className="others-options">
                    <p className="bottom-text"><a href="#">Go to login</a> | <a href="#">Go to signup</a></p>
                </div>
            </div>
        </div>
    )
};
export default ResetPassword;