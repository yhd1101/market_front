import React from 'react';
import {Footer, Header} from "./components";
import Main from "./pages/Main";
//rsc 리액트 기본 모양
const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />

        </div>
    );
};

export default App;