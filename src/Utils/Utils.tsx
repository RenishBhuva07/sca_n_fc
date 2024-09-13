import { Dimensions, Platform, Text, View } from "react-native";
import { Colors } from "../Assets/Styles/Colors";
import { FontName } from "../Assets/Styles/FontName";
import ResponsivePixels from "../Assets/Styles/ResponsivePixels";
import { Toast } from "native-base";

export const isIos = () => Platform.OS === "ios";


let toastRef: any = undefined;
type TOAST_TYPES = "success" | "danger" | "warning" | "info";

export const showToast = (
    message: string,
    duration = 4000,
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
                            width: Dimensions.get("window").width,
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
                            {strings[message] || message}
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

export const showDangerToast = (message: string, duration: number = 4000) => {
    showToast(message, duration, "danger");
};

export const showWarningToast = (message: string, duration: number = 4000) => {
    showToast(message, duration, "warning");
};