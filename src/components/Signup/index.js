import React, { useState } from 'react';

function SignupForm() {

    const [formState, setFormState] = useState({ name: '', email: '', password: '' });

    const { name, email, password } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (
        <section>
            <h1>Sign-Up Here!</h1>
            <form id="signup-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" defaultValue={password} onChange={handleChange} />
                </div>
                <button type="submit">Create Account</button>
            </form>
        </section>
    )
}


export default SignupForm;