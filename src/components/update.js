/**
 * Created by sourabh on 28/4/17.
 */
import React from "react";
import {updateUsers} from "../actions"
import {connect} from "react-redux"


 class Update extends  React.Component{

    constructor(){

        super();
        this.state={
            updateData:{

            }
        }
    }
    componentWillMount(){
        const List = this.props;
        console.log("checking props------",List)
        const userList = List.users;
        console.log(this.props.paramId)
        userList.map((items)=> {
            console.log(items._id)
            if (items._id == this.props.paramId) {
                this.setState({updateData: items})

            }
        })
    }

    onchange(event){

        let{updateData}=this.state;
        const tempData=Object.assign({},updateData,{[event.target.name]:event.target.value})
        console.log(tempData)
        this.setState({updateData :tempData})
    }

    updateUserData(state){

     this.props.dispatch(updateUsers(state))
       this.props.Props.history.push("/")

    }


    render(){
        let{updateData}=this.state;
        return(

            <div>
               Id= {updateData._id}<br/>
                Name=<input type="text" value={updateData.userName}name="userName"onChange={(event)=>this.onchange(event)}/><br/>
                Email=<input type="text" value={updateData.email}name="email"onChange={(event)=>this.onchange(event)}/><br/>
                <button name="btn1" onClick={()=>this.updateUserData(this.state.updateData)} >Update</button>

            </div>
        )
    }
}

const UpdateContainer=connect(state=>state)(Update);
export default UpdateContainer
