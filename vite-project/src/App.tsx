import './App.scss'
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Main from "./Components/Main/Main";
import Casinos from "./Components/Casino/Casinos";
import GameDescription from "./Components/GameDescription/GameDiscription";

function App() {

    return (
        <div className='container'>
            <Header/>
            <Main/>
            <Casinos/>
            <Content/>
            <GameDescription/>
        </div>
    )
}

export default App
