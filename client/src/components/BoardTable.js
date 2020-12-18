import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {FETCH_POSTS_QUERY, PageQuery} from "../util/graphql"

function BoardTable() {
    const [contents, setContents] = useState([]);
    const [index, setIndex] = useState(1);



    const {data, loading} = useQuery(FETCH_POSTS_QUERY, {
        variables: {
            index: index
        }
    });


    useEffect(() => {
        if (data) {
            setContents(data.contents);
        }
    }, [data]);

    if (loading) return <div className="loader"></div>


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


            <nav>
                <ul className="pagination">

                    <li key={index}>

                        <a onClick={() => setIndex(index - 1)} className='page-link'>🔙</a>
                        <a onClick={() => setIndex(index + 1)} className='page-link'>🔜</a>

                    </li>

                </ul>
            </nav>


        </table>


    )
}

export default BoardTable;
