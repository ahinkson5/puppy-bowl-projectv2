import { fetchPuppies } from "../ajaxHelpers/puppies";
import { useState, useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";
import styles from "../styles/Players.module.css";

function Players() {
  const navigate = useNavigate();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPupppies() {
      const { data } = await fetchPuppies();
      setPlayers(data.players);
    }
    getPupppies();
  }, []);

  return (
    <div className={styles.parentContainer}>
      {players.map((player) => {
        return (
          <div className={styles.box} key={player.id}>
            <h3 className={styles.name}>{player.name}</h3>
            <h5 className={styles.breed}>{player.breed}</h5>
            <label>{player.id}</label>
            <img className={styles.image} src={player.imageUrl} />
            <button
              className={styles.detail}
              onClick={() => {
                navigate(`/players/${player.id}`);
              }}
            >
              See Details{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Players;
