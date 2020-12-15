import React, {useEffect, useState} from 'react';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {FETCH_POSTS_QUERY} from '../util/graphql';
import TextField from "@material-ui/core/TextField";
import {IconButton} from "@material-ui/core";
import {FormButton} from "semantic-ui-react";
import {GraphQLNonNull, GraphQLString} from "graphql";
import mongoose from 'mongoose';
import {ObjectId} from "bson";


function CreateButton(title, content) {


    const mutation = CREATEMUTATION;


    const [create, {error, loading}] = useMutation(mutation, {
            refetchQueries: [{query: FETCH_POSTS_QUERY}],
            variables: {title:title, content:content}
        }
    )

    return (
        <>

                <tr style={{marginBottom: 20}}>
                    <td>Content:<input onSubmit={content}/>}/></td>
                    <td>Title:<input onSubmit={title}/></td>
                    <TextField type='submit'
                               onClick={create}
                               disabled={loading}
                               value="↳Create"/>

                </tr>


        </>
    );

    console.log(content,title);
}



const CREATEMUTATION = gql`
    mutation createContent($title:String! $content:String!){
        createContent(contentInput:{
            title:$title,
            content:$content
        }){
            _id
            title
            content
            createdAt
        }
    }
`;


export default CreateButton;
