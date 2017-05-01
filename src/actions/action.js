import {
    FETCH_USERS_STARTED,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
    DELETE_USERS_STARTED,
    DELETE_USERS_SUCCESS,
    DELETE_USERS_ERROR,
    UPDATE_USERS_STARTED,
    UPDATE_USERS_SUCCESS,
    UPDATE_USERS_ERROR,
    ADD_USERS_STARTED,
    ADD_USERS_SUCCESS,
    ADD_USERS_ERROR

} from "../config/constants"

export let fetchUserStarted = () => {
    return { type: FETCH_USERS_STARTED }
}


export let fetchUserSuccess = (users) => {
    return { type: FETCH_USERS_SUCCESS, users }
}

export let fetchUserError = (err) => {
    return { type: FETCH_USERS_ERROR, err }
}



export const deleteUserStarted=()=>{

    return {type :DELETE_USERS_STARTED}
}
export const deleteUserSuccess=(users)=>{

    return {type :DELETE_USERS_SUCCESS,users}
}
export const deleteUserFailed=(err)=>{

    return {type :DELETE_USERS_ERROR,err}
}


export const updateUserStarted=()=>{
    return {type :UPDATE_USERS_STARTED}
}
export const updateUserSuccess=(users)=>{

    return {type :UPDATE_USERS_SUCCESS,users}
}
export const updateUserFailed=(err)=>{

    return {type :UPDATE_USERS_ERROR,err}
}

export const addUserStarted=()=>{
    return {type :ADD_USERS_STARTED}
}
export const addUserSuccess=()=>{

    return {type :ADD_USERS_SUCCESS}
}
export const addUserFailed=(err)=>{

    return {type :ADD_USERS_ERROR,err}
}



