import React from "react"
import{fetchUsers} from "../actions"
import {connect} from 'react-redux'
import {
    Link, Route, Redirect
} from "react-router-dom"

class Userslist extends React.Component {
    componentWillMount() {

        this.props.dispatch(fetchUsers())
    }
    render() {
        const list = this.props;
        const users=list.users;
        console.log("in users",users)

        return (
            <div>
                {
                    (list.loading) ?
                        <p>user List loading</p>:
                        (users.length)?
                            <ul>{
                                users.map((items)=>(
                                    <li key={items._id}>
                                        {<Link to={`/showDetails/${items._id}`}>{items.userName}</Link>}
                                    </li>))
                                }
                            </ul>:
                               <p>no users</p>
                }
            </div>

        )
    }


}

var ListContainer = connect(state => state)(Userslist)

export default ListContainer


