import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { createPuppy } from "../ajaxHelpers/puppies";

export default function NewPuppyForm(){
    const navigate= useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [breed, setBreed] = useState('');
return (
    <div className = "container">
        <form
            // className= "not sure "
            onSubmit={async (event)=> {
            event.preventDefault();
            const result = await createPuppy(name,email,breed);
            navigate("/");
        }}>
            <h4>New Puppy Form</h4>
            <label>Name:</label>
            <input 
                value={name}
                type="text" 
                placeholder= "name"
                onChange ={(e) => {
                    setName (e.target.value);
                    }
                }/>
            <label> Email:</label>
            <input
                value= {email} 
                type="text" 
                placeholder="email"
                onChange ={(e)=> {
                    setEmail (e.target.value);
                    }
                } />
            <label>Breed:</label>
            <input 
                value={breed}
                type="text" 
                placeholder= "breed"
                onChange = {(e) => {
                    setBreed (e.target.value);
                }
                }/>
                <button type="submit"> Submit</button>
        </form>
    </div>
)

}