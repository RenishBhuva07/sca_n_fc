import { Dimensions, Platform, Text, View } from "react-native";
import { Colors } from "../Assets/Styles/Colors";
import { FontName } from "../Assets/Styles/FontName";
import ResponsivePixels from "../Assets/Styles/ResponsivePixels";
import { Toast } from "native-base";
import { navigate } from "../Navigators/Navigator";

export const isIos = () => Platform.OS === "ios";


let toastRef: any = undefined;
type TOAST_TYPES = "success" | "danger" | "warning" | "info";

export const showToast = (
    message: string,
    duration = 2000,
    type: TOAST_TYPES = "success"
) => {
    const styledata = isIos() ? { top: 15 } : { position: "absolute", bottom: 0 };

    let bgColor = Colors.DefaultGreenColor;

    if (type === "warning") {
        bgColor = Colors.StatusYellowColor;
    } else if (type === "danger") {
        bgColor = Colors.DefaultRedColor;
    }
    if (!toastRef) {
        Toast.show({
            title: message.toString(),
            duration,
            placement: "top",
            style: styledata,
            render: () => {
                toastRef = "Some dummy value";
                return (
                    <View
                        style={{
                            backgroundColor: bgColor,
                            width: Dimensions.get("window").width - ResponsivePixels.size50,
                            borderRadius: 6,
                            paddingHorizontal: ResponsivePixels.size15
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: FontName.regular,
                                paddingVertical: ResponsivePixels.size15,
                                paddingHorizontal: ResponsivePixels.size10,
                                color: Colors.DefaultWhite,
                            }}
                        >
                            {message}
                        </Text>
                    </View>
                );
            },
            onCloseComplete: () => {
                toastRef = undefined;
            },
        });
    }
};

export const showDangerToast = (message: string, duration: number = 2000) => {
    showToast(message, duration, "danger");
};

export const showWarningToast = (message: string, duration: number = 2000) => {
    showToast(message, duration, "warning");
};

export const navigateToSetting = () => { navigate("Settings") };

export const isEmpty = (value: any) => !value || value.toString().trim().length <= 0;