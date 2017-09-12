import axios from 'axios';
export const SUBMITISPEDDING = 'SUBMITISPEDDING';
export const SUBMITISSUCCESS = 'SUBMITISSUCCESS';
export const SUBMITISERROR = 'SUBMITISERROR';
export const RESPONSEBACK = 'RESPONSEBACK';

function isSubmitionPending(isPending){
    return{
        type: SUBMITISPEDDING,
        isPending
    }
}

function isSubmitionSuccess(isSuccess){
    return{
        type: SUBMITISSUCCESS,
        isSuccess
    }
}

function isSubmitionError(isError){
    return{
        type: SUBMITISERROR,
        isError
    }
}

function fetchResponseBack(status){
    return{
        type: RESPONSEBACK,
        status
    }
}

export function submitData(email){
    return dispatch => {
        return axios.post("/users/subscribers", email);
    }
}