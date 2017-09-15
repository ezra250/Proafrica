import { SUBMITISPEDDING,SUBMITISSUCCESS,SUBMITISERROR,RESPONSEBACK } from '../action/Subscribers';

export const subscribersReducer = (state=[], action) => {
    switch(action.type){
        case SUBMITISPEDDING :
            return{
                ...state,
                isPending: action.isPending
            }
        case SUBMITISSUCCESS :
            return{
                ...state,
                isSuccess: action.isSuccess
            }
        case RESPONSEBACK :
            return{
                ...state,
                status: action.status
            }
        case SUBMITISERROR :
            return{
                ...state,
                isError: action.isError
            }
        default:
            return state;
    }
};

export default subscribersReducer;