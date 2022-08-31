import { RecentTypes } from "./RecentType";
export const setRecentapp=(appoinments)=>{
    return{
        type:RecentTypes.SET_RECENTAPP,
        payload:appoinments
    }
}
export const removeRecentapp=()=>{
    return{
        type:RecentTypes.REMOVE_RECENTAPP,
    }
}