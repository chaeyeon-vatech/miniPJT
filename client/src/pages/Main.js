import React, {Component, useEffect, useState} from 'react';

import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import {useQuery} from "@apollo/react-hooks";
import {FETCH_POSTS_QUERY} from "../util/graphql";
import BoardTable from "../components/BoardTable";

function Main() {

    const [contents, setContents] = useState([]);

    const {loading, data} = useQuery(FETCH_POSTS_QUERY);


    useEffect(() => {
        if (data) {
            setContents(data.contents);
        }
    }, [data]);

    console.log(contents);

    console.log(contents._id);

    if (loading) return <div className="loader"></div>


    return (
        <div>
            <Header/>
            <Menu/>
            <h1 className="table-title">전체 목록 보기</h1>
            <BoardTable/>
            <Footer/>
        </div>
    )

}

export default Main;