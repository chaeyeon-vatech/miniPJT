import React, {useEffect, useState} from 'react';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {FETCH_POSTS_QUERY} from '../util/graphql';
import TextField from "@material-ui/core/TextField";
import {DELETE_MUTATION} from "../util/mutation";

function DeleteButton(post_id) {


    const mutation = DELETE_MUTATION;


    const [deletePostOrMutation, {loading}] = useMutation(mutation, {
            refetchQueries: [{query: FETCH_POSTS_QUERY}],
            variables: {id: String(Object.values(post_id))}
        }
    )

    return (
        <>

            <form action="#">

                <TextField type='submit'
                           onClick={deletePostOrMutation}
                           disabled={loading}
                           value="↳Delete"/>

            </form>

        </>
    );
}


export default DeleteButton;
