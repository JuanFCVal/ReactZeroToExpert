import {useEffect, useState} from 'react';
import useForm from '../../hooks/useForm';
import Message from './Message';

const SimpleFormWithHook = () => {
    const { formState, onInputChange } = useForm({
        userName : '',
        email : '',
        password: ''
    })
    const { userName, email, password } = formState;

    
    return (
        <>
            <hr />
            <h3>Simple form with hook</h3>
            <input name="userName" onChange={(event) => onInputChange(event)} value={userName} type="text" className="form-control" placeholder="Username">          
            </input>
            <input name="email"  onChange={(event) => onInputChange(event)} value={email}  type="email" className="form-control mt-2" placeholder="email">
            </input>
            <input name="password"  onChange={(event) => onInputChange(event)} value={password}  type="password" className="form-control mt-2" placeholder="password">
            </input>
            {
                userName === "strider2" &&  <Message/>
            }
          
        </>
    )
}

export default SimpleFormWithHook
