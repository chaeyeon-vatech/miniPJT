import React, {useEffect, useState} from 'react'
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {SearchQuery} from '../util/graphql';
import CreateButton from "./CreateButton";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";
import gql from "graphql-tag";
import {render} from "@testing-library/react";

const WebFont = require('webfontloader');


WebFont.load({
    google: {
        families: ['Do Hyeon', 'Sansita Swashed']
    }
});


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: "0px auto",
            width: '25ch',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'block',
            FontFamily: 'Do Hyeon'
        },

    }
}))

function SearchBar() {
    const classes = useStyles();
    const [contents, setContents] = useState();


    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(0);
    const [index, setIndex] = useState(1);
    const [hasNext, setNext] = useState(true);
    const {data, loading, error} = useQuery(SearchQuery, {
        variables: {
            search: search,
            category: category,
            index: index,
            hasNext: hasNext
        },

    });

    useEffect(() => {
        if (data) {
            setContents(data.contents);
        }
    }, [data]);

    console.log(contents)
    console.log(data)


    return (
        <>

            <form className={classes.root} action="#">
                <select id="category" name="category" className="select"
                        onChange={e => setCategory(parseInt(e.target.value))} required>
                    <option value="0">Select</option>
                    <option value="0">전체 검색</option>
                    <option value="1">제목 검색</option>
                    <option value="2">컨텐츠 검색</option>
                </select>

                <TextField required id="standard-required" label="검색"
                           placeholder="타이틀 검색"
                           type='search'
                           onChange={e => setSearch(e.target.value)}/>


            </form>

            <table className="employees-table">

                <thead className="employees-table-head">

                <tr style={{marginBottom: 20}}>
                    <th>ID</th>
                    <th>Content</th>
                    <th>CreatedAt</th>
                    <th>Title</th>

                </tr>
                </thead>


            <tbody className="employees-table-body">

            {contents &&
            contents.map((content) => (



                <tr key={content._id} style={{marginBottom: 20}}>
                    <td>{content._id}</td>
                    <td>{content.content}</td>
                    <td>{content.createdAt}</td>
                    <td>{content.title}</td>
                    <td><i className="fa fa-trash fa-lg"></i></td>
                </tr>

            ))}


            </tbody>
            </table>

        </>

    )


}


export default SearchBar