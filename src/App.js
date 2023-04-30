import React from 'react';
import {Footer, Header} from "./components";
import Main from "./pages/Main";
import {RouterProvider} from "react-router-dom";
import router from "./router";
//rsc 리액트 기본 모양
const App = () => {
    return (
        <div>
            <Header />
            <RouterProvider router={router}/>
            <Footer />

        </div>
    );
};

export default App;