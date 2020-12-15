import React, {useEffect, useState} from 'react'
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {FETCH_POSTS_QUERY} from '../util/graphql';
import SEARCH_MUTATION from "../util/mutation";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: "0px auto",
            width: '25ch',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'block',
            LeftMargin: "30px",
            FontFamily: 'Do Hyeon'
        },

    }
}))


function SearchBar({id, callback}) {
    const classes = useStyles();
    const [confirmOpen, setConfirmOpen] = useState(false);

    const [SearchMutation] = useMutation(SEARCH_MUTATION, {
        update(proxy) {
            setConfirmOpen(false);
            if (id) {
                const data = proxy.readQuery({
                    query: FETCH_POSTS_QUERY
                });
                data.getPosts = data.getPosts.filter((p) => p.id === id);
                proxy.writeQuery({query: FETCH_POSTS_QUERY, data});
            }
            if (callback) callback();
        }
    });

    const mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting");
    }
    const myChangeHandler = (event) => {
        // this.setState({username: event.target.value});
    }

    return (


        <form className={classes.root} action="#" onSubmit={mySubmitHandler}>

            <TextField required id="standard-required" label="검색"
                       placeholder="타이틀 검색"
                       type='search'
                       onChange={myChangeHandler}/>

            <TextField type='submit' open={confirmOpen} onCancel={() => setConfirmOpen(false)}
                       onConfirm={SearchMutation} value="↳ Search ID"/>

        </form>


    )
}


export default SearchBar
