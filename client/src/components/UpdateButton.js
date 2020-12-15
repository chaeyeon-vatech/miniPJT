import React, {useEffect, useState} from 'react';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {FETCH_POSTS_QUERY} from '../util/graphql';
import TextField from "@material-ui/core/TextField";


function UpdateButton(post_id) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const mutation = UPDATEMUTATION;

    const [update, {loading}] = useMutation(mutation, {
            refetchQueries: [{query: FETCH_POSTS_QUERY}],
            variables: {
                title: title,
                content: content,
                id: String(Object.values(post_id))
            },
        }
    )


    return (

        <>

            <tr style={{marginBottom: 20}}>

                <td><input type="text" placeholder="content" onChange={e => setContent(e.target.value)}/></td>
                <td><input type="text" placeholder="title" onChange={e => setTitle(e.target.value)}/></td>
                <td><TextField type='submit'
                               onClick={update}
                               disabled={loading}
                               value="↳Update"/></td>
            </tr>
        </>


    );

}

const UPDATEMUTATION = gql`
    mutation updateContent($id:ID! $title:String! $content:String! ){
        updateContent(
            _id:$id,
            title:$title,
            content:$content
        ){
            _id
            title
            content
            createdAt
        }
    }

`;


export default UpdateButton;
