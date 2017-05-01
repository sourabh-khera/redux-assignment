import {
    fetchUserStarted,
    fetchUserSuccess,
    fetchUserError,
    deleteUserStarted,
    deleteUserSuccess,
    deleteUserFailed,
    updateUserStarted,
    updateUserSuccess,
    updateUserFailed,
    addUserStarted,
    addUserSuccess,
    addUserFailed

} from "./action"

import fetch from "isomorphic-fetch";

export const fetchUsers = () => {

    return (dispatch) => {
        dispatch(fetchUserStarted());
        fetch("http://sourabhkhera.com:3200/user",{
            method:"get"
        })
            .then(response => response.json())
            .then(users => {
                dispatch(fetchUserSuccess(users));
            })
            .catch( (err) => {
                dispatch(fetchUserError(err));
            })
    }
}

export const deleteUsers=(id)=>{
    return (dispatch)=>{
        dispatch(deleteUserStarted());
        fetch("http://sourabhkhera.com:3200/user",{
            method:"delete",
            headers:{'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify({_id:id})
        }).then(response=> response.json())
            .then(users=>{
                dispatch(deleteUserSuccess(users))

            })
            .catch( (err) => {
                dispatch(deleteUserFailed(err))
            })
    }

}
export const updateUsers = (updateData)=>{
    return (dispatch) => {
        dispatch(updateUserStarted());
        fetch("http://sourabhkhera.com:3200/user", {
            method: "put",
            headers:{'Accept': 'application/json',
                     'Content-Type': 'application/json'},
            body: JSON.stringify(updateData)


        }).then(response=> response.json())
            .then(users=>{
                dispatch(updateUserSuccess(users))

            })
            .catch( (err) => {
                dispatch(updateUserFailed(err))
            })
    }

}

export const addUsers = (addUserData)=>{
    return (dispatch) => {
        dispatch(addUserStarted());
        fetch("http://sourabhkhera.com:3200/user", {
            method: "post",
            headers:{'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify(addUserData)


        }).then(response=> response.json())
            .then(()=>{
                dispatch(addUserSuccess())

            })
            .catch( (err) => {
                dispatch(addUserFailed(err))
            })
    }

}