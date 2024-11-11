import React, { useEffect, useState } from 'react';
import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack, resetNavigation } from '../../Navigators/Navigator';
import * as Animatable from "react-native-animatable";
import CustomHeader from '../../CommonComponents/CustomHeader/CustomHeader';
import { CustomAnimation } from '../../CommonComponents/CustomAnimation/CustomAnimation';
import { ANIMATIONS } from '../../Assets/Animations';

interface INfcSuccessProps {
    route: any;
}

interface INfcSuccessState {
    NfcDetailItemData: any;
}

const NfcSuccess = (props: INfcSuccessProps) => {

    const [state, setState] = useState<INfcSuccessState>({
        NfcDetailItemData: {},
    });

    useEffect(() => {
        const { detailItemData } = props?.route?.params;
        // console.error("params__________", params);
        setState({
            NfcDetailItemData: detailItemData ? detailItemData : {},
        });
        return () => { }
    }, [])

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} networkActivityIndicatorVisible barStyle={'default'} />
            <ImageBackground
                source={IMAGES.bg_Background_Design}
                style={styles.background}
                resizeMode="cover"
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
                            }}>{state.NfcDetailItemData?.subTitle}</Text>
                            <Text style={{
                                color: Colors.SoftSilver,
                                fontSize: ResponsivePixels.size14,
                            }}>{state.NfcDetailItemData?.title}</Text>
                        </View>
                    </Animatable.View>

                    <CustomAnimation
                        animationFile={ANIMATIONS.NFC_Success}
                        animationStyle={{
                            width: ResponsivePixels.size300,
                            height: ResponsivePixels.size300,
                        }}
                    />

                </View>
                <Pressable style={styles.btnStyle} onPress={() => resetNavigation("BottomTab")} >
                    <Text style={styles.btnTextStyle}>Done</Text>
                </Pressable>

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

export default NfcSuccess;