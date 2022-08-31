import { ReportTypes } from "./ReportType";
const INITIAL_STATE={
    labreport:[]
}
export const ReportReducer = (state=INITIAL_STATE, action)=>{
   
    switch (action.type) {
        case ReportTypes.SET_REPORTAPP:
            return {...state,labreport:action.payload}
        case ReportTypes.REMOVE_REPORTAPP:
            return{...state,labreport:[]}
    
        default:
            return state;
    }
}