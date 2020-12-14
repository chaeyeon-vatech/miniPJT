import React, {useState} from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import {FETCH_POSTS_QUERY} from '../util/graphql';
import TextField from "@material-ui/core/TextField";
import {IconButton} from "@material-ui/core";
import {FormButton} from "semantic-ui-react";

function DeleteButton({post_id, callback}) {
    const [confirmOpen, setConfirmOpen] = useState(false);

    const mutation = DELETE_MUTATION;

    const [deletePostOrMutation] = useMutation(mutation, {
        update(proxy) {
            setConfirmOpen(false);
            if (post_id) {
                const data = proxy.readQuery({
                    query: FETCH_POSTS_QUERY
                });
                data.getPosts = data.getPosts.filter((p) => p.id !== post_id);
                proxy.writeQuery({query: FETCH_POSTS_QUERY, data});
            }
            if (callback) callback();
        },
        variables: {
            post_id
        }
    });
    return (
        <>


            <form action="#">
                <FormButton onClick={() => setConfirmOpen(true)}>
                    <IconButton name="trash" style={{margin: 0}}/>
                </FormButton>

                <TextField type='submit' open={confirmOpen}
                           onCancel={() => setConfirmOpen(false)}
                           onConfirm={deletePostOrMutation} value="↳Delete"/>

            </form>

        </>
    );
}

const DELETE_MUTATION = gql`
    mutation removeContent($post_id: ID!){
        removeContent(_id:$post_id) {
            title
            content
        }
    }
`;


export default DeleteButton;
