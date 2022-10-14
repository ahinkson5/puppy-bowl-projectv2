import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { createPuppy } from "../ajaxHelpers/puppies";
import styles from "../styles/NewPuppyForm.module.css";

export default function NewPuppyForm(){
    const navigate= useNavigate();

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
return (
    <div className ={styles.container} >
        <form className ={styles.form}
             onSubmit={async (event)=> {
            event.preventDefault();
            const result = await createPuppy(name,breed);
            navigate("/");
        }}>
            <h2 className={styles.title}>New Puppy Form</h2>
            <label>Name:</label>
            <input 
                value={name}
                type="text" 
                placeholder= "name"
                onChange ={(e) => {
                    setName (e.target.value);
                    }
                }/>
            <label>Breed:</label>
            <input 
                value={breed}
                type="text" 
                placeholder= "breed"
                onChange = {(e) => {
                    setBreed (e.target.value);
                }
                }/>
                <button className= {styles.button} type="submit"> Submit</button>
        </form>
    </div>
)

}