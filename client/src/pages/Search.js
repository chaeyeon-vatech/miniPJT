import React, {Component, useState, useEffect} from 'react';
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import {FETCH_POSTS_QUERY} from '../util/graphql';
import {useQuery} from "@apollo/react-hooks";
import BoardTable from "../components/BoardTable";
import SearchBar, {SearchTable} from "../components/SearchBar";


function Search() {
    

    return (
        <div>
            <Header/>
            <Menu/>
            <h1 className="table-title">Search🔍</h1>
            <SearchBar/>
            <Footer/>
        </div>
    )

}

export default Search;
