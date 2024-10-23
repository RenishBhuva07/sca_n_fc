import { combineReducers } from "redux";
import Reducers from "./Reducers";
import BaseReducer from "./BaseReducer";

const rootReducer = combineReducers({
    qrData: Reducers,
    baseData: BaseReducer,
});

export default (state: any, action: any) => {
    return rootReducer(state, action);
};