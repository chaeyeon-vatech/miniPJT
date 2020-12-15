import React, {useState} from 'react';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {FETCH_POSTS_QUERY} from '../util/graphql';
import TextField from "@material-ui/core/TextField";
import {IconButton} from "@material-ui/core";
import {FormButton} from "semantic-ui-react";
import {GraphQLNonNull, GraphQLString} from "graphql";

function DeleteButton(post_id) {


    const mutation = DELETE_MUTATION;


    const [deletePostOrMutation, {error, loading}] = useMutation(mutation, {
        refetchQueries: [{query: FETCH_POSTS_QUERY}]
    })


    return (
        <>


            <form action="#">

                <TextField type='submit'
                           onClick={() => deletePostOrMutation({variables: {id: post_id}})}
                           disabled={loading}
                           value="↳Delete"/>

            </form>

        </>
    );
}

const DELETE_MUTATION = gql`
    mutation removeContent($id: ID!){
        removeContent(_id:$id) {
            title
            content
        }
    }
`;


export default DeleteButton;
