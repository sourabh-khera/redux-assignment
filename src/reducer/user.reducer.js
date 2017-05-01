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

const initialState = {
    users: [],
    loading: false,
    error: null,
    userAddedToDatabase:false

}

export const reducerThunk = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_STARTED:
            {
                return {
                    ...state,
                    loading: true

                }
            }
        case FETCH_USERS_SUCCESS:
            {
                const users=action.users
                return {
                    ...state,
                    loading: false,
                    users
                }
            }
        case FETCH_USERS_ERROR:
            {
                return {
                    ...state,
                    error: action.err
                }
            }

        case DELETE_USERS_STARTED:{
            return{
                ...state,

            }
        }
        case DELETE_USERS_SUCCESS:{
            const users = action.users
            console.log('deletete us s s   ....  ',users);
            return{
                ...state,
                  users:users
                          }
        }
        case DELETE_USERS_ERROR:{
            return{
                ...state ,
                error: action.err
            }
        }
        case UPDATE_USERS_STARTED:{
            return{
                ...state,

            }
        }
        case UPDATE_USERS_SUCCESS:{
            const users = action.users
            return{
                ...state,
                users:users
            }
        }
        case UPDATE_USERS_ERROR:{
            return{
                ...state ,
                error: action.err
            }
        }
        case ADD_USERS_STARTED:{
            return{
                ...state,

            }
        }
        case ADD_USERS_SUCCESS:{
            //const users = action.users
            return{
                ...state,userAddedToDatabase:true
               // users:users
            }
        }
        case ADD_USERS_ERROR:{
            return{
                ...state ,
                error: action.err
            }
        }
        default:
            {
                return state;
            }

    }
}