import { ReportTypes } from "./ReportType";
export const setReportapp=(labreport)=>{
    return{
        type:ReportTypes.SET_REPORTAPP,
        payload:labreport
    }
}
export const removeReportapp=()=>{
    return{
        type:ReportTypes.REMOVE_REPORTAPP,
    }
}