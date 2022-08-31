import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { RecentReducer } from "./RecentReducer";
import { ReportReducer } from "./ReportReducer";

const persistConfig = {
    key: 'app',
    storage,
    whitelist:['recent','report']
}
const reducers = combineReducers({
    recent : RecentReducer,
    report : ReportReducer,
})
 export default persistReducer(persistConfig,reducers)