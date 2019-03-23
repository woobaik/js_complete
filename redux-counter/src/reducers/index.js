import * as types from '../actions/ActionTypes';



const initialState = {
    number: 0,
    color: "black"
}

const counter = (state=initialState, action) => {
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1
            };
        case types.INCREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        case types.INCREMENT:
            return {
                ...state,
                number: action.color
            };
        default: 
            return state;
    }
}

export default counter;