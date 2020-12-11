import React, {useState} from 'react'
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from '../util/graphql';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '25ch'

        },

    }
}))

function SearchBar() {
    const classes = useStyles();
    const [confirmOpen, setConfirmOpen] = useState(false);


    const mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting ");
    }
    const myChangeHandler = (event) => {
        // this.setState({username: event.target.value});
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={mySubmitHandler}>
            <div>
                <TextField required id="standard-required" label="검색" placeholder="타이틀 검색"
                           type='text'
                           onChange={myChangeHandler}/>
                <TextField type='submit'/>
            </div>

        </form>
    )
}

export default SearchBar