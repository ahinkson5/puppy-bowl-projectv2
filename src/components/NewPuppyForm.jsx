import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { createPuppy } from "../ajaxHelpers/puppies";

export default function NewPuppyForm(){
    const navigate= useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

return (
    <div className = "container">
        <form
            // className= "not sure "
            onSubmit={async (event)=> {
            event.preventDefault();
            const result = await createPuppy(name,email);
            navigate("/");
        }}>
            <h4>New Puppy Form</h4>
            <label>Name:</label>
            <input 
                value={name}
                type="text" 
                placeholder= "name"
                onchange ={(e) = =>{
                    setName (e.target.value);
                    }
                }/>
        </form>
    </div>
)

}