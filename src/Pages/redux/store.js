import { createStore } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import reducers from "./index"


const store = createStore(reducers);
const persistor = persistStore(store);



export {store,persistor};