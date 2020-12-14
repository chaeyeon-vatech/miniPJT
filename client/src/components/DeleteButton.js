import React, {useState} from 'react';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {FETCH_POSTS_QUERY} from '../util/graphql';
import TextField from "@material-ui/core/TextField";
import {IconButton} from "@material-ui/core";
import {FormButton} from "semantic-ui-react";
import {GraphQLNonNull, GraphQLString} from "graphql";

function DeleteButton(post_id) {

    // const[remove,{loading,error}] = useMutation(DELETE_MUTATION,{
    //     update(cache,{data:{remove}}){
    //         const localData = cloneDeep({
    //             cache.readQuery({
    //                 query: FETCH_POSTS_QUERY,
    //                 variables:{id:}
    //             })
    //             }
    //         )
    //     }
    // });


    const mutation = DELETE_MUTATION;

    const [deletePostOrMutation] = useMutation(mutation, {
            update(cache) {
                const queryData = cache.readQuery({query: FETCH_POSTS_QUERY})
                console.log(queryData);
                // const cartItemId = data.contents._id
                queryData.me._id = queryData.me._id.filter(v => v._id !== post_id)
                console.log(queryData.me._id);
                console.log(typeof (queryData.me._id));
                cache.writeQuery({query: FETCH_POSTS_QUERY, data: {...queryData}})
            },
        variables: {id: post_id}
        }
    );



    return (
        <>


            <form action="#">

                <TextField type='submit'
                           onClick={deletePostOrMutation} value="↳Delete"/>

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

// const REMOVE_TODO = gql`
//     +  mutation ($id: Int) {
//     +    delete_todos (
//     +      where: {
//     +        id: {
//     +          _eq: $id
//     +        }
//     +      }
//     +    ) {
//     +      affected_rows
//     +    }
//     +  }
//     +`;


export default DeleteButton;
