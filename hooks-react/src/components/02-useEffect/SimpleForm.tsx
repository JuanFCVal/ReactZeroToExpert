import {useEffect, useState} from 'react';
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        userName : 'JuanFCVal',
        email : 'cevallosjuanfrancisco@gmail.com'
    })
    
    let { userName, email} = formState
    const onInputChange = ( { target} : {target: HTMLInputElement} ) => {
        const { name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    return (
        <>
            <hr />
            <h1>Use Effect</h1>
            <h3>Simple form</h3>
            <input name="userName" onChange={(event) => onInputChange(event)} value={userName} type="text" className="form-control" placeholder="Username">          
            </input>
            <input name="email"  onChange={(event) => onInputChange(event)} value={email}  type="email" className="form-control mt-2" placeholder="email">
            </input>
            {
                userName === "strider2" &&  <Message/>
            }
          
        </>
    )
}

export default SimpleForm
