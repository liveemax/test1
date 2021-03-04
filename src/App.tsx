import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./component/Header/Header";
import {Footer} from "./component/Footer/Footer";
import {Center} from "./component/Center/Center";

function App() {
    return (
        <div>
            <Header/>
            <Center/>
            <Footer/>
        </div>

    );
}


export const Root = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}
export default App