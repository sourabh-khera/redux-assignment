import React from "react"
import {connect} from "react-redux"
import {
    BrowserRouter as Router,
    Link, Route, Redirect
} from 'react-router-dom';
import Home from "./home"
import Userslist from "./usersList"
import Showdetails from "./showDetails"
import Adduser from "./addUser"
class App extends React.Component {



    render() {

        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/userList" component={Userslist} />
                    <Route path="/showDetails/:userid" component={Showdetails} />
                    <Route path="/addUser" component={Adduser} />

                </div>
            </Router>
        )
    }
}
const AppContainer = connect(state => state)(App);

export default AppContainer



//render={props => (<Userslist {...props} props={this.props} />)