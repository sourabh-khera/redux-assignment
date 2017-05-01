/**
 * Created by sourabh on 27/4/17.
 */
import React from "react"
import{connect} from "react-redux"
import {deleteUsers} from "../actions"
import Update from "./update"

class Showdetails extends React.Component {
constructor(){
    super();
    this.state={
        edit:false
    }
}
    deleteUsersData = (id) => {
        this.props.dispatch(deleteUsers(id))
        this.props.history.push("/")
    }

    updateState(){
        this.setState({edit:true})
    }

    render() {
        var tableStyle = {
            "border": "2px solid black"
        };


        const param = this.props.match.params.userid;
        const List = this.props;
        const userList = List.users;

        return (
            <div>
                {
                    (this.state.edit)?
                     <Update  Props={this.props}  paramId={param}/>
                    : userList.map((items) => {
                        if (items._id == param)
                            return <div key={items._id}>
                                <table style={tableStyle}>
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{items._id}</td>
                                        <td>{items.userName}</td>
                                        <td>{items.email}</td>
                                        <td><input type="submit" value="DELETE"
                                                   onClick={this.deleteUsersData.bind(this, items._id)}/></td>
                                        <td><input type="submit" value="EDIT" onClick={()=>this.updateState()}/></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                    })
                }
            </div>
        )
    }
}

const ShowContainer=connect(state=>state)(Showdetails);
export default ShowContainer


// {`id is ${items._id}... name is ${items.userName}...email is ${items.email}`}