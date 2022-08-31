import { RecentTypes } from "./RecentType";
const INITIAL_STATE={
    appoinments:[]
}
export const RecentReducer = (state=INITIAL_STATE, action)=>{
   
    switch (action.type) {
        case RecentTypes.SET_RECENTAPP:
            return {...state,appoinments:action.payload}
        case RecentTypes.REMOVE_RECENTAPP:
            return{...state,appoinments:[]}
    
        default:
            return state;
    }
}