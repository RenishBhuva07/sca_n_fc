import { BASE_STORE_DATA_TYPES } from "../Types";

export interface Action {
  type: string;
  payload: any;
}

export const INIT_STATE = {
  qrHistoryList: undefined,
};

export default (state = INIT_STATE, action: Action) => {
  switch (action.type) {
    case BASE_STORE_DATA_TYPES.QR_DATA:
      return { ...state, qrHistoryList: action.payload };
  }
  return state;
};