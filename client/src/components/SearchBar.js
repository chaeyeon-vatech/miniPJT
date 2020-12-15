// import React, {useEffect, useState} from 'react'
// import TextField from "@material-ui/core/TextField";
// import {makeStyles} from '@material-ui/core/styles';
// import {useMutation, useQuery} from '@apollo/react-hooks';
// import {FETCH_POSTS_QUERY} from '../util/graphql';
// import CreateButton from "./CreateButton";
// import UpdateButton from "./UpdateButton";
// import DeleteButton from "./DeleteButton";
//
// const WebFont = require('webfontloader');
//
//
// WebFont.load({
//     google: {
//         families: ['Do Hyeon', 'Sansita Swashed']
//     }
// });
//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& .MuiTextField-root': {
//             margin: "0px auto",
//             width: '25ch',
//             alignItems: 'center',
//             justifyContent: 'center',
//             display: 'block',
//             LeftMargin: "30px",
//             FontFamily: 'Do Hyeon'
//         },
//
//     }
// }))
//
//
// function SearchBar({id, callback}) {
//     const classes = useStyles();
//
//     const [search, setSearch] = useState('');
//     const [category, setCategory] = useState(1);
//     const [index, setIndex] = useState(1);
//     const [hasNext, setNext] = useState(1);
//     const {data, loading, error} = useQuery(SearchQuery, {
//         variables: {
//             search: search,
//             category: category,
//             index: index,
//             hasNext: hasNext
//         },
//     });
//
//     const mySubmitHandler = (event) => {
//         event.preventDefault();
//         alert("You are submitting");
//     }
//     const myChangeHandler = (event) => {
//         // this.setState({username: event.target.value});
//     }
//
//     return (
//
//
//         <form className={classes.root} action="#" onSubmit={mySubmitHandler}>
//
//             <TextField required id="standard-required" label="검색"
//                        placeholder="타이틀 검색"
//                        type='search'
//                        onChange={e => setSearch(e.target.value)}/>
//
//             <TextField type='submit' onClick={} value="↳ Search ID"/>
//
//         </form>
//
//
//     )
//     const SearchQuery = gql`
//         query contents($search:String,$category:Int,$index:Int, $hasNext:Boolean){
//             contents(search:$search,category:$category,index:$index,hasNext:$hasNext){
//                 _id
//                 title
//                 content
//                 createdAt
//             }
//         }
//     `;
//
// }
//
// function SearchTable(search) {
//     const [contents, setContents] = useState([]);
//     const {loading, data} = useQuery(FETCH_POSTS_QUERY);
//
//
//     useEffect(() => {
//         if (data) {
//             setContents(data.contents);
//         }
//     }, [data]);
//
//
//     if (loading) return 'Loading...'
//
//     return (
//
//         <table className="employees-table">
//             <thead>
//             <CreateButton/>
//             </thead>
//
//             <thead className="employees-table-head">
//
//             <tr style={{marginBottom: 20}}>
//                 <th>ID</th>
//                 <th>Content</th>
//                 <th>CreatedAt</th>
//                 <th>Title</th>
//                 <th>Update</th>
//                 <th>Delete</th>
//             </tr>
//             </thead>
//             <tbody className="employees-table-body">
//
//
//             {contents &&
//             contents.map((content) => (
//
//
//                 <tr key={id} style={{marginBottom: 20}}>
//                     <td>{content._id}</td>
//                     <td>{content.content}</td>
//                     <td>{content.createdAt}</td>
//                     <td>{content.title}</td>
//                     <td><UpdateButton post_id={content._id}/></td>
//                     <td><DeleteButton post_id={content._id}/></td>
//                     <td><i className="fa fa-trash fa-lg"></i></td>
//                 </tr>
//
//             ))}
//
//             </tbody>
//         </table>
//
//     )
// }
//
//
// export default SearchBar