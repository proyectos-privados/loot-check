import * as constants from '../actions/constants';

const balance = (state, action) => {
    switch(action.type){
        case constants.SET_BALANCE:
            return action.balance;
        default:
            return balance;
    }
}

export default balance;