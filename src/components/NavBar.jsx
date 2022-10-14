import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to = "/"> Home</Link>:
            <Link to ="/newPuppyForm"> Create New Puppy</Link>:
        </nav>
    );
}

export default NavBar;