import { createStore } from "redux";
import RootReducer from "./Reducers/RootReducer";
import { store } from "../../App";

export function storeData(type: string, payload: any) {
    store.dispatch({
        type: type,
        payload: payload,
    });
}

const ConfigureStore = () => {
    return createStore(RootReducer);
}

export default ConfigureStore;