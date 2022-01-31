import React from 'react';
import { MyForm } from './components/Form/Form';
import { SecondForm } from './components/SecondForm/SecondForm';
import './App.css';

export const App = () => {
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>  
            <section>
                <h2>First Form</h2>
                <MyForm onSubmit={onSubmit} />
            </section>
            <hr />
            <section>
                <h2>Second form</h2>
                <SecondForm />
            </section>
        </>
    )
};