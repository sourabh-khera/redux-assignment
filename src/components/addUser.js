/**
 * Created by sourabh on 30/4/17.
 */

import React from "react"
import {connect} from "react-redux"
import {addUsers} from "../actions"

 class Adduser extends React.Component{

    constructor(){
        super();
        this.state= {
            addUserData: {
                userName: "",
                email: "",
            }
        }
    }

    onchange(event){

         let {addUserData}=this.state
         let temp=Object.assign({},addUserData,{[event.target.name]:event.target.value})
         this.setState({addUserData:temp})
    }
    addUser(addUserData){
        this.props.dispatch(addUsers(addUserData))
        this.props.history.push("/")
    }

    render(){

        return(
            <div>
                Enter User Name:<input type="text" name="userName" onChange={(event)=>this.onchange(event)}/><br/>
                Enter User Email:<input type="text" name="email" onChange={(event)=>this.onchange(event)}/><br/><br/>
                <button onClick={()=>this.addUser(this.state.addUserData)}>AddUser</button>
            </div>
        )
    }
}

const AddContainer=connect(state=>state)(Adduser);
export default AddContainer
