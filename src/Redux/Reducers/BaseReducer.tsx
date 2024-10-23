import { BASE_STORE_DATA_TYPES } from "../Types";

export interface Action {
    type: string;
    payload: any;
}

export const INIT_STATE = {
    isScanModeEnabled: true,
};

export default (state = INIT_STATE, action: Action) => {
    switch (action.type) {
        case BASE_STORE_DATA_TYPES.SCAN_MODE:
            return { isScanModeEnabled: action.payload };
    }
    return state;
};