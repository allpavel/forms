import React from 'react';

export const SecondForm = () => {
    return (
        <form>
            <p><i>Please fill in the form below. The necessary fields are marked by </i><em>*</em> <i>sign.</i></p>
            <fieldset>
                <legend>Contact information</legend>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' placeholder='First Name' />
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' placeholder='Last Name' />
                <label htmlFor='Email'>Email</label>
                <input type='email' placeholder='Email' />
                <label htmlFor='telephone'>Telephone</label>
                <input type="text" placeholder='Telephone' />
            </fieldset>
            <fieldset>
                <legend>Personal information</legend>
                <label htmlFor="age">Age</label>
                <input type='number'>Age</input>
            </fieldset>
        </form>
    )
}