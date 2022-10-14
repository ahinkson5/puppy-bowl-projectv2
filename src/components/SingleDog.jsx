import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { navigate } from 'react-router-dom';

import { fetchPuppyById,deletePuppyById } from "../ajaxHelpers/puppies";

function SingleDog() {
    const navigate= useNavigate();
    const {dogId} = useParams();
    const [player, setPlayer] = useState({});

useEffect(()=>{
    async function getPuppyById(){
        const {data} = await fetchPuppyById(dogId);
        setPlayer(data.players.id) 
    }
    getPuppyById();
},[]);

async function handleDelete(){
    const result = await deletePuppyById(player.id);
    navigate("/");

}
return (
    <div>
        <h4>{player.name}</h4>
        <h5>{player.breed}</h5>
        <label>{player.id}</label>
        <img src={player.imageUrl} />
        <button onClick = {handleDelete}> Delete Puppy</button>
    </div>
)

}
export default SingleDog;