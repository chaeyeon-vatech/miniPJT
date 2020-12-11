import React, {Component, useState, useEffect} from 'react';
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import {FETCH_POSTS_QUERY} from '../util/graphql';
import {useQuery} from "@apollo/react-hooks";
import BoardTable from "../components/BoardTable";
import TextField from '@material-ui/core/TextField';
import SearchBar from "../components/SearchBar";


function Search() {

    const [contents, setContents] = useState([]);

    const {loading, data} = useQuery(FETCH_POSTS_QUERY);


    useEffect(() => {
        if (data) {
            setContents(data.contents);
        }
    }, [data]);

    console.log(contents);

    console.log(contents._id);

    if (loading) return 'Loading...'

    return (
        <div>
            <Header/>
            <Menu/>
            <h1 className="table-title">검색</h1>
            <SearchBar/>
            <BoardTable/>
            <Footer/>
        </div>
    )

}

export default Search;