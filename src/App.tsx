import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./component/Footer/Footer";
import {Center} from "./component/Center/Center";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {HeaderContainer} from "./component/Header/HeaderContainer";

function App() {
    return (
        <div>
            <HeaderContainer/>
            <Center/>
            <Footer/>
        </div>

    );
}

export const Root = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}
export default App