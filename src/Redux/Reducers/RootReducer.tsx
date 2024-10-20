import { combineReducers } from "redux";
import Reducers from "./Reducers";

const rootReducer = combineReducers({
    qrData: Reducers,
});

export default (state: any, action: any) => {
    return rootReducer(state, action);
};