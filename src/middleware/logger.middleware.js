/**
 * Created by sourabh on 28/4/17.
 */
export const logger = (store) => (next) => (action) => {
    console.log(action.type);
    next(action);
}