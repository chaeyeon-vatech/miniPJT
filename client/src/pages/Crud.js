import React, {Component, useEffect, useState} from 'react';
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import {useQuery} from "@apollo/react-hooks";
import {FETCH_POSTS_QUERY} from "../util/graphql";
import CRUDTable from "../components/CRUDTable";

function Crud() {
    const [contents, setContents] = useState([]);

    const {loading, data} = useQuery(FETCH_POSTS_QUERY);


    useEffect(() => {
        if (data) {
            setContents(data.contents);
        }
    }, [data]);


    if (loading) return 'Loading...'

    return (
        <div>
            <Header/>
            <Menu/>
            <h1 className="table-title">CRUD TABLE</h1>
            <CRUDTable/>
            <Footer/>
        </div>
    )

}

export default Crud;
