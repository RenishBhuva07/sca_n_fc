import React, { useEffect, useRef, useState } from 'react';
import { Alert, Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack } from '../../Navigators/Navigator';
import QRCode from 'react-native-qrcode-svg';
import PermissionUtils from '../../Utils/PermissionUtils';
import { isIos } from '../../Utils/Utils';
import { PERMISSIONS } from 'react-native-permissions';
import { captureRef } from "react-native-view-shot";
import Share from "react-native-share";
import RNFS from "react-native-fs";
import DeviceInfo from "react-native-device-info";
import { ANDROID_OS_VERSION } from '../../Utils/AppConstants';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
const osVersion = DeviceInfo.getSystemVersion();

interface IShowQRProps {
    detailItem: any;
    route: any;
}

interface IShowQRState {
    detailItemData: any;
    isDownloading: boolean;
}

const ShowQR = (props: IShowQRProps) => {

    const [state, setState] = useState<IShowQRState>({
        detailItemData: {},
        isDownloading: false,
    }), [isDownloading, setIsDownloading] = useState(false),
        viewRef = useRef(),
        handleDownLoadQR = () => {
            console.warn("");
            setTimeout(async () => {
                setIsDownloading(true);
                try {
                    const uri = await captureRef(viewRef, {
                        format: "png",
                        quality: 0.8,
                    });

                    RNFS.readFile(uri, "base64").then(async (res: string) => {
                        let urlString = "data:image/jpeg;base64," + res;
                        let options = {
                            title: "",
                            message: "",
                            url: urlString,
                            type: "image/jpeg",
                        };
                        try {
                            const image = await CameraRoll.save(uri, { type: "photo" });

                            if (image) {
                                Alert.alert(
                                    "",
                                    "Image saved successfully.",
                                    [{ text: "OK", onPress: () => { } }],
                                    { cancelable: false }
                                );
                            }
                        } catch (error) {
                            console.log("error", error);
                        }
                        // Share.open(options)
                        //     .then(() => {
                        //         setIsDownloading(false);
                        //     })
                        //     .catch(() => {
                        //         setIsDownloading(false);
                        //     });
                    });
                } catch (error) { }
            }, 300);
        };

    useEffect(() => {
        const { detailItem } = props?.route?.params;
        setState((prevState) => ({ ...prevState, detailItemData: detailItem }));
        return () => {
        }
    }, [])

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} networkActivityIndicatorVisible barStyle={'default'} />
            <ImageBackground
                source={IMAGES.bg_Background_Design}
                style={styles.background}
                resizeMode="cover"
                ref={viewRef}
            >
                <CustomHeader
                    numberOfFlexColumns={2}
                    leftColumn={IMAGES.ic_Back}
                    rightColumn={"QR Code"}
                    leftColumnImageStyle={{
                        paddingVertical: ResponsivePixels.size7,
                        paddingHorizontal: ResponsivePixels.size10,
                        backgroundColor: Colors.CharcoalGray,
                        borderRadius: 6,
                        resizeMode: 'contain',
                    }}
                    rightColumnImageStyle={{
                        alignItems: 'flex-start',
                        marginStart: ResponsivePixels.size25,
                    }}
                    customHeaderBackgroundColor={"transparent"}
                    handleLeftColumnClick={() => goBack()}
                    imageStyles={{
                        height: 20,
                        width: 12,
                    }}
                />
                <View style={styles.container}>

                    <View style={{
                        backgroundColor: Colors.Graphite,
                        borderRadius: 6,
                        paddingHorizontal: ResponsivePixels.size20,
                        paddingVertical: ResponsivePixels.size16,
                        marginBottom: ResponsivePixels.size55,
                        marginTop: ResponsivePixels.size40,
                    }}>
                        <View style={{}}>
                            <Text style={{
                                color: Colors.DefaultYellow,
                                fontSize: ResponsivePixels.size20,
                            }}>{state.detailItemData?.subTitle}</Text>
                            <Text style={{
                                color: Colors.SoftSilver,
                                fontSize: ResponsivePixels.size14,
                            }}>{state.detailItemData?.title}</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginBottom: ResponsivePixels.size35,
                    }}>
                        <View style={{
                            padding: 10,
                            backgroundColor: Colors.Graphite,
                            borderRadius: 6,
                            elevation: 20,
                            shadowColor: Colors.DefaultYellow,
                        }}>
                            <QRCode
                                value={state.detailItemData?.title}
                                // enableLinearGradient
                                color={Colors.DefaultYellow}
                                backgroundColor={Colors.Graphite}
                                quietZone={2}
                                size={250}
                                ecl='H'
                            />

                            <Text style={{
                                color: Colors.DefaultYellow,
                                fontSize: ResponsivePixels.size21,
                                marginTop: ResponsivePixels.size15,
                                marginBottom: ResponsivePixels.size7,
                                textAlign: 'center',
                            }}>SCAN  QR</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                        <Pressable onPress={() => { }} style={{ justifyContent: "center" }}>
                            <Image style={{
                                width: ResponsivePixels.size80,
                                height: ResponsivePixels.size80,
                            }} source={IMAGES.ic_Share_Big} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: ResponsivePixels.size15,
                                color: Colors.SoftSilver,
                            }}>Share</Text>
                        </Pressable>
                        <Pressable onPress={() => handleDownLoadQR()}>
                            <Image style={{
                                width: ResponsivePixels.size80,
                                height: ResponsivePixels.size80,
                            }} source={IMAGES.ic_Copy} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: ResponsivePixels.size15,
                                color: Colors.SoftSilver,
                            }}>Download</Text>
                        </Pressable>
                    </View>

                </View>

            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.CharcoalGrayOpacity,
    },
    container: {
        marginHorizontal: ResponsivePixels.size35,
    },
});

export default ShowQR;