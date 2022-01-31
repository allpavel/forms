import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './SecondForm.module.css';



export const SecondForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { 'firstName': '', 'lastName': '', 'email': '', 'phoneNumber': '' }});

    const handleFormSubmit = (event) => {
        console.log(event);
        reset({ 'firstName': '', 'lastName': '', 'email': '', 'phoneNumber': '' });
    }

    console.log('Render');

    return (

        <form className={styles.container} onSubmit={handleSubmit(handleFormSubmit)}>
            <p><i>Please fill in the form below. The necessary fields are marked by </i><em>*</em> <i>sign.</i></p>
            <fieldset className={styles.field}>
                <legend>Contact information</legend>
                <ul className={styles.outerList}>
                    <li>
                        <input type='text' placeholder='First Name' autoComplete='off' {...register('firstName', { required: true })} />
                        <label htmlFor='firstName'>First Name:</label>
                        {errors.firstName && <p>First Name is a required field</p>}
                        
                    </li>
                    <li>
                        
                        <input type='text' placeholder='Last Name' autoComplete='off' {...register('lastName', { required: true })} />
                        <label htmlFor='lastName'>Last Name:</label>
                        {errors.lastName && <p>Last Name is a required field</p>}
                    </li>
                    <li>
                        
                        <input type='email' placeholder='Email' autoComplete='off' {...register('email', { required: true })} />
                        <label htmlFor='Email'>Email:</label>
                        {errors.email && <p>Email is a required field</p>}
                    </li>
                    <li>
                        
                        <input type="text" placeholder='Phone number' autoComplete='off' {...register('phoneNumber')} />
                        <label htmlFor='telephone'>Phone number:</label>
                    </li>
                </ul>
            </fieldset>
            <button type='submit'>Submit</button>
        </form>
    )
}