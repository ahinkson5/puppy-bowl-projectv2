import {Link} from "react-router-dom";
import styles from "../styles/NavBar.module.css";

function NavBar(){
    return(
        <nav className={styles.nav}>
            <Link className= {styles.link}to = "/"> Home</Link>
            <Link className= {styles.link}to ="/newPuppyForm"> Create New Puppy</Link>
        </nav>
    );
}

export default NavBar;