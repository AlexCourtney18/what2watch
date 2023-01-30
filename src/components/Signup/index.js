import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function SignupForm() {

    const [formState, setFormState] = useState({ name: '', email: '', password: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, password } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }

        console.log('errorMessage', errorMessage);
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
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Create Account</button>
            </form>
        </section>
    )
}


export default SignupForm;