import React, { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { goBack } from '../../Navigators/Navigator';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import CustomHeader from '../../CommonComponents/CustomHeader/CustomHeader';
import { ANIMATIONS } from '../../Assets/Animations';
import { CustomAnimation } from '../../CommonComponents/CustomAnimation/CustomAnimation';
import * as Animatable from "react-native-animatable";
import { NFC_OPERATIONS } from '../../Utils/AppConstants';

interface INfcTapProps {
    route: any;
}
interface INfcTapState {
    detailItemData: any;
    nfcOperationType: number;
}

const NfcTap = (props: INfcTapProps) => {

    const [state, setState] = useState<INfcTapState>({
        detailItemData: {},
        nfcOperationType: 0,
    }),
        [subTitle, setSubTitle] = React.useState<string>("");

    useEffect(() => {
        const { params } = props?.route;
        // console.error("params______==>>", props?.route?.params);
        setState({
            detailItemData: params?.detailItem ? params?.detailItem : {},
            nfcOperationType: params?.nfcOperation,
        });
    }, [])

    useEffect(() => {
        if (state.nfcOperationType > 0) {
            justifyContentAccordingNfcOperationType();
        }
    }, [state.nfcOperationType]);

    const justifyContentAccordingNfcOperationType = () => {
        switch (state.nfcOperationType) {
            case NFC_OPERATIONS.WRITE:
                setSubTitle("We're saving your info on chip !");
                break;
            case NFC_OPERATIONS.READ:
                setSubTitle("We're pulling the details from chip !");
                break;
            case NFC_OPERATIONS.RESET:
                setSubTitle("We're reseting the details from chip !");
                break;
        }
    };


    return (
        <>
            <StatusBar backgroundColor={"transparent"} networkActivityIndicatorVisible barStyle={'default'} />
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={IMAGES.bg_Background_Design}
                    style={styles.background}
                    resizeMode="cover"
                >
                    <CustomHeader
                        numberOfFlexColumns={2}
                        leftColumn={IMAGES.ic_Back}
                        rightColumn={"NFC"}
                        leftColumnImageStyle={{
                            paddingVertical: ResponsivePixels.size7,
                            paddingHorizontal: ResponsivePixels.size10,
                            backgroundColor: Colors.CharcoalGray,
                            borderRadius: 6,
                            resizeMode: 'contain',
                        }}
                        rightColumnImageStyle={{
                            alignItems: 'center',
                            marginEnd: ResponsivePixels.size30,
                        }}
                        customHeaderBackgroundColor={"transparent"}
                        handleLeftColumnClick={() => goBack()}
                        imageStyles={{
                            height: 20,
                            width: 12,
                        }}
                    />

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{ marginStart: ResponsivePixels.size70, marginTop: ResponsivePixels.size80 }}>
                            <CustomAnimation
                                animationFile={ANIMATIONS.NFC_Tap}
                                animationStyle={{
                                    width: ResponsivePixels.size300,
                                    height: ResponsivePixels.size300,
                                }}
                            />
                        </View>

                        <Animatable.Text animation={'bounceIn'} duration={800} easing={'ease-in-out'} style={styles.Title}>Tap your NFC chip</Animatable.Text>
                        <Animatable.Text animation={'bounceIn'} duration={800} easing={'ease-in-out'} style={styles.subTitle}>{subTitle}</Animatable.Text>
                    </View>


                </ImageBackground>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: Colors.CharcoalGrayOpacity,
    },
    Title: {
        color: Colors.DefaultYellow,
        fontSize: ResponsivePixels.size30,
        fontWeight: 'bold',
        marginTop: ResponsivePixels.size50,
        textAlign: 'center',
    },
    subTitle: {
        color: Colors.DefaultWhite,
        fontSize: ResponsivePixels.size18,
        fontWeight: 'semibold',
        textAlign: 'center',
    },
});

const mapStateToProps = (state: any) => ({
    qrHistoryProps: state.qrData.qrHistoryList,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(NfcTap);