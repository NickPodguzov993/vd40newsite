import './App.scss'
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Main from "./Components/Main/Main";
import Casinos from "./Components/Casino/Casinos";
import Footer from "./Components/Footer/Footer";

function App() {

    return (
        <div className='container'>
            <Header/>
            <Main/>
            <Casinos/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default App
