import React from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const App = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>  
            <FloatingLabel controlId='firstNameInput' label='First Name' className='m-3'>
                <Form.Control 
                    type='text' 
                    placeholder='First Name' 
                    {...register('firstName', 
                    {required: true, maxLength: 10})} />
                    {errors.firstName && <p className='text-danger'>First Name is required</p>}
            </FloatingLabel>
            <FloatingLabel controlId='lastNameInput' label='Last Name' className='mb-3 mx-3'>
                <Form.Control 
                    type='text' 
                    placeholder='Last Name' 
                    {...register('lastName', {required: true, maxLength: 20})} />
                    {errors.lastName && <p className='text-danger'>Last Name is required</p>}
            </FloatingLabel>
            <FloatingLabel controlId='floatingInput' label='Email address' className='mb-3 mx-3'>
                <Form.Control 
                    type='email' 
                    placeholder='name@example.com' 
                    {...register('email', 
                    {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })} />
                    {errors.email && <p className='text-danger'>Email should be in the following format: exp@exp.com</p>}
            </FloatingLabel>
            <FloatingLabel controlId='passwordInput' label='Password' type='password' className='mb-3 mx-3'>
                <Form.Control 
                    type='password' 
                    placeholder='Password' 
                    {...register('password', {
                        required: true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                    })} />
                    {errors.password && <p className='text-danger'>Password should contain one Capital Letter, one Small Letter, and the number of characters should be between 6 to 15.</p>}
            </FloatingLabel>
            <Button className='ms-3' type="submit">Submit</Button>
        </Form>     
     )
};