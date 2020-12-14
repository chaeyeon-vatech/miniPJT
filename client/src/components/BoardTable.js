import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {FETCH_POSTS_QUERY} from "../util/graphql"
import DeleteButton from "./DeleteButton";


function BoardTable() {
    const [contents, setContents] = useState([]);

    const {loading, data} = useQuery(FETCH_POSTS_QUERY);


    useEffect(() => {
        if (data) {
            setContents(data.contents);
        }
    }, [data]);

    if (loading) return 'Loading...'

    return (

        <table className="employees-table">
            <thead className="employees-table-head">
            <tr>
                <th>ID</th>
                <th>Content</th>
                <th>CreatedAt</th>
                <th>Title</th>
                <th></th>
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

    )
}

export default BoardTable;
