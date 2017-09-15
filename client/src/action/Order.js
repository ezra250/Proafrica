import axios from 'axios';
export function submitData(data){
    return dispatch => {
        return axios.post("/order/orders", data);
    }
}