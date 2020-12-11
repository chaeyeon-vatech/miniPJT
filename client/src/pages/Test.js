import React, {Component} from 'react';
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Test() {

    return (
        <div>
            <Header/>
            <Menu/>
            <h1 className="table-title">Example Table</h1>
            <table className="table">
                <thead className="table-head">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="table-body">
                <tr>
                    <td>박</td>
                    <td>채연</td>
                    <td>50</td>
                    <td><i className="fa fa-trash fa-lg"></i></td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                    <td><i className="fa fa-trash fa-lg"></i></td>
                </tr>
                <tr>
                    <td>Mila</td>
                    <td>Manson</td>
                    <td>26</td>
                    <td><i className="fa fa-trash fa-lg"></i></td>
                </tr>
                <tr>
                    <td>Anton</td>
                    <td>Hansen</td>
                    <td>37</td>
                    <td><i className="fa fa-trash fa-lg"></i></td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Scary</td>
                    <td>22</td>
                    <td><i className="fa fa-trash fa-lg"></i></td>
                </tr>
                <tr>
                    <td>Bella</td>
                    <td>Umbrella</td>
                    <td>43</td>
                    <td><i className="fa fa-trash fa-lg"></i></td>
                </tr>
                </tbody>
            </table>
            <Footer/>
        </div>
    )

}

export default Test;