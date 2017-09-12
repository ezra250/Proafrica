import axios from 'axios';
export function submitData(userData){
    return dispatch => {
        return axios.post("/users/contactus", userData);
    }
}