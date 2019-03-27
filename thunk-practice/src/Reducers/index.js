import { combineReducers } from "redux";

const dummyReducer = () => {
    return [
        { name: 'yan', age: 19},
        { name: 'daun', age: 29}
    ]
}

export default combineReducers({
    dummy: dummyReducer
})