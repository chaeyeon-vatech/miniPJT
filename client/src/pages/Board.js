import React, {Component} from 'react';
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Board() {
    return (
        <div>
            <Header/>
            <Menu/>
            <h1>This is Board Page.</h1>
            <Footer/>
        </div>
    )

}

export default Board;