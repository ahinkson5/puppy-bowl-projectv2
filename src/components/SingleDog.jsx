import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";


import { fetchPuppyById,deletePuppyById } from "../ajaxHelpers/puppies";
import styles from "../styles/SingleDog.module.css";

function SingleDog() {
    const navigate= useNavigate();
    const {playerId} = useParams();
    const [player, setPlayer] = useState({});

useEffect(()=>{
    async function getPuppyById(){
        const puppy = await fetchPuppyById(playerId);
        setPlayer(puppy.data.player) 
    }
    getPuppyById();
},[]);

async function handleDelete(){
    const result = await deletePuppyById(player.id);
    navigate("/");

}
return (
    <div className={styles.parentContainer}>
        <h3 className={styles.name}>{player.name}</h3>
        <h5 className={styles.breed}>{player.breed}</h5>
        <label>{player.id}</label>
        <img className={styles.dog} src={player.imageUrl} />
        <button className={styles.delete}onClick = {handleDelete}> Delete Puppy</button>
    </div>
)

}
export default SingleDog;