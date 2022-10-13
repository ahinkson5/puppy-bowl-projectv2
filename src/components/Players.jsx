import { fetchPuppies } from "../ajaxHelpers/puppies";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Players(){
    const navigate= useNavigate();
}
const [players, setPlayers] = useState([])

useEffect(() =>{
    async function getPupppies() {
        const puppies = await fetchPuppies();
        setPlayers(puppies);
    }
    getPupppies();
}, []);

return(
    <div>
        {
            players.map((player) =>{
                return(
                    <div key= {player.id}>
                        <h4>{player.name}</h4>
                        <label>{player.id}</label>
                        <img src={player.imageURL} />
                        <button onClick ={()=>{
                            Navigate(`/players/${player.id}`);
                        }}>See Details </button>
                        
                    </div>
                )
            }
            )
        }
    </div>
)

export default Players; 