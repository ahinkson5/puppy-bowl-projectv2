import Players from "./components/Players";
import NewPuppyForm from "./components/NewPuppyForm";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import SingleDog from "./components/SingleDog";



const App =()=>{
    return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path = "/" element= {<Players/>}/>
            <Route path = "/newPuppyForm" element = {<NewPuppyForm/>}/>
            <Route path = "/Players/:playerId" element = {<SingleDog/>}/>
        </Routes>
    </div>
    );
}

export default App