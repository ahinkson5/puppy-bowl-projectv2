import { fetchPuppies } from "../ajaxHelpers/puppies";
import { useState, useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";

function Players(){
    const navigate = useNavigate();

const [players, setPlayers] = useState([])

useEffect(() =>{
    async function getPupppies() {
        const {data} = await fetchPuppies();
        setPlayers(data.players);
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
                        <h5>{player.breed}</h5>
                        <label>{player.id}</label>
                        <img src={player.imageUrl} />
                        <button onClick ={()=>{
                            navigate(`/players/${player.id}`);
                        }}>See Details </button>
                        
                    </div>
                )
            }
            )
        }
    </div>
)
    }
export default Players; 