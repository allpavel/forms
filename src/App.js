import React from 'react';
import { MyForm } from './components/Form/Form';

export const App = () => {
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <MyForm onSubmit={onSubmit} />
        </>
    )
};