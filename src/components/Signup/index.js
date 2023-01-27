import React from 'react';

function SignupForm() {
    return (
        <section>
            <h1>Sign-Up Here!</h1>
            <form id="signup-form">
                <div>
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" />
                </div>
                <button type="submit">Create Account</button>
            </form>
        </section>
    )
}


export default SignupForm;