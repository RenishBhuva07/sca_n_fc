import { storeData } from "../ConfigureStore";
import { BASE_STORE_DATA_TYPES } from "../Types";


export const setQRListInfo = (qrData: any) => {
    storeData(BASE_STORE_DATA_TYPES.QR_DATA, qrData);
};

export const setScanMode = (mode: boolean) => {
    storeData(BASE_STORE_DATA_TYPES.SCAN_MODE, mode);
};