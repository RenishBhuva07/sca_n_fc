import React, { useEffect, useRef, useState } from 'react';
import { Alert, Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack, resetNavigation } from '../../Navigators/Navigator';
import QRCode from 'react-native-qrcode-svg';
import { captureRef } from "react-native-view-shot";
import Share from "react-native-share";
import RNFS from "react-native-fs";
import DeviceInfo from "react-native-device-info";
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import * as Animatable from "react-native-animatable";
const osVersion = DeviceInfo.getSystemVersion();

interface IShowQRProps {
    detailItem: any;
    route: any;
}

interface IShowQRState {
    detailItemData: any;
}

const ShowQR = (props: IShowQRProps) => {

    const [state, setState] = useState<IShowQRState>({ detailItemData: {}, }),
        [isDownloading, setIsDownloading] = useState(false),
        viewRef = useRef(),
        handleDownLoadQR = (isShare: boolean) => {
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
                        if (!isShare) {
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
                        }
                        if (isShare) {
                            Share.open(options).then(() => { }).catch(() => { });
                        }
                    });
                } catch (error) {
                    setIsDownloading(false);
                }
                setIsDownloading(false);
            }, 300);
        };

    useEffect(() => {
        const { detailItem } = props?.route?.params;
        // console.error("details__________", detailItem);
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
                    leftColumn={!isDownloading ? IMAGES.ic_Back : 0}
                    rightColumn={"QR Code"}
                    leftColumnImageStyle={[!isDownloading ? {
                        paddingVertical: ResponsivePixels.size7,
                        paddingHorizontal: ResponsivePixels.size10,
                        backgroundColor: Colors.CharcoalGray,
                        borderRadius: 6,
                        resizeMode: 'contain',
                    } : {}]}
                    rightColumnImageStyle={{
                        alignItems: !isDownloading ? 'flex-start' : "center",
                        marginStart: !isDownloading ? ResponsivePixels.size25 : 0,
                    }}
                    customHeaderBackgroundColor={"transparent"}
                    handleLeftColumnClick={() => goBack()}
                    imageStyles={{
                        height: 20,
                        width: 12,
                    }}
                />
                <View style={styles.container}>

                    <Animatable.View animation={'slideInLeft'} duration={500} easing={'ease-in-out'} style={{
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
                    </Animatable.View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginBottom: ResponsivePixels.size35,
                    }}>
                        <Animatable.View
                            animation={'fadeInUp'} duration={500} easing={'ease-in-out'}
                            style={{
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
                        </Animatable.View>
                    </View>

                    {!isDownloading && (<View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                        <Pressable onPress={() => handleDownLoadQR(true)} style={{ justifyContent: "center" }}>
                            <Animatable.Image
                                animation={'bounceIn'} duration={1000} easing={'ease-in-out'}
                                style={{
                                    width: ResponsivePixels.size80,
                                    height: ResponsivePixels.size80,
                                }} source={IMAGES.ic_Share_Big} />
                            <Animatable.Text
                                animation={'bounceIn'} duration={1000} easing={'ease-in-out'}
                                style={{
                                    textAlign: 'center',
                                    fontSize: ResponsivePixels.size15,
                                    color: Colors.SoftSilver,
                                }}>Share</Animatable.Text>
                        </Pressable>
                        <Pressable onPress={() => handleDownLoadQR(false)}>
                            <Animatable.Image
                                animation={'bounceIn'} duration={1000} easing={'ease-in-out'}
                                style={{
                                    width: ResponsivePixels.size80,
                                    height: ResponsivePixels.size80,
                                }} source={IMAGES.ic_Copy} />
                            <Animatable.Text
                                animation={'bounceIn'} duration={1000} easing={'ease-in-out'}
                                style={{
                                    textAlign: 'center',
                                    fontSize: ResponsivePixels.size15,
                                    color: Colors.SoftSilver,
                                }}>Download</Animatable.Text>
                        </Pressable>
                    </View>)}
                    {/* <Pressable onPress={() => handleDownLoadQR(false)} style={{
                        backgroundColor: Colors.DefaultYellow,
                        alignItems: 'center',
                        borderRadius: 8,
                    }}>
                        <Animatable.Text
                            animation={'bounceIn'} duration={1000} easing={'ease-in-out'}
                            style={{
                                fontSize: ResponsivePixels.size15,
                                color: Colors.Graphite,
                                fontWeight: "bold",
                            }}>Download</Animatable.Text>
                    </Pressable> */}
                </View>
                {!isDownloading && (<Pressable style={styles.btnStyle} onPress={() => resetNavigation("BottomTab")} >
                    <Text style={styles.btnTextStyle}>Done</Text>
                </Pressable>)}

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
    btnStyle: {
        backgroundColor: Colors.DefaultYellow,
        padding: ResponsivePixels.size15,
        borderRadius: 6,
        marginTop: "auto",
        marginBottom: ResponsivePixels.size30,
        marginHorizontal: ResponsivePixels.size35,
    },
    btnTextStyle: {
        textAlign: 'center',
        color: Colors.CharcoalGray,
        fontSize: ResponsivePixels.size16,
        fontWeight: 'bold',
    },
});

export default ShowQR;