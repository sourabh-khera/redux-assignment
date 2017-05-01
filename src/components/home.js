import React from "react"
import {
    Link, Route, Redirect
} from "react-router-dom"

export default class Home extends React.Component{
    render(){
        return(
            <div>
            <h3>Please click on the Link to AddUsers or ShowUsers  List</h3>
                <Link to="/addUser">ADD-USERS</Link><br/>
                <Link to="/userList">SHOW-USERS</Link>
            </div>
        )
    }
}