import React from "react";
// import axios from 'axios';
// import { Button, Form } from 'react-bootstrap';

interface UserFormProps {
    name: string;
    email: string;
    password: string;
}

export default class UserForm extends React.Component {    
    handleChange(event: any) {}
    
    handleSubmit(event: any) {
        // axios.post(
        //     process.env.API_BASE_URL + 'users',
        //     {
        //         // stuff
        //     },
        //     // config
        // )
    }
    
    render() {
        return (
            <></>
        );
    }
}
