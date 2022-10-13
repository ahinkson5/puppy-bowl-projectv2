import { fetchPuppies } from "../ajaxHelpers/puppies";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Dogs(){
    const navigate= useNavigate();
}
const [dogs, setDogs] = useState([])

useEffect(() =>{
    async function getPupppies() {
        const puppies = await fetchPuppies();
        setDogs(puppies);
    }
    getPupppies();
}, []);

return(
    <div>
        {
            players.map((player) =>{
                return(
                    <div>
                        {/* what I want to display */}
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

export default Dogs; 