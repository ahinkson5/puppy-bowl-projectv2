import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to = "/"> Home</Link>
        </nav>,
        <nav> 
            <Link to ="/newPuppyForm"> Create New Puppy</Link>
        </nav>
    );
}

export default NavBar;