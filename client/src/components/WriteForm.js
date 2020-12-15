// import React from "react"
// import {useForm} from "react-hook-form"
//
// function WriteForm() {
//     const {values, handleChange, handleSubmit} = useForm({
//         initialValues: {email: "", password: ""},
//         onSubmit: (values) => {
//             alert(JSON.stringify(values, null, 2))
//         }
//     })
//
//     return (
//         <form onSubmit={handleSubmit} noValidate  className="employees-table">
//             <label>
//                 Email:
//                 <input
//                     type="text"
//                     name="email"
//                     value={values.email}
//                     onChange={handleChange}
//                 />
//             </label>
//             <br/>
//             <label>
//                 Password:
//                 <input
//                     type="text"
//                     name="password"
//                     value={values.password}
//                     onChange={handleChange}
//                 />
//                 )}
//             </label>
//             <br/>
//             <button type="submit">
//                 로그인
//             </button>
//         </form>
//     )
// }
//
// export default WriteForm