import React from 'react';
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

interface INfcTapProps { }

const NfcTap = (props: INfcTapProps) => {

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

                        <Animatable.Text animation={'bounceIn'} duration={800} easing={'ease-in-out'} style={styles.Title}>Tap the NFC</Animatable.Text>
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
    }
});

const mapStateToProps = (state: any) => ({
    qrHistoryProps: state.qrData.qrHistoryList,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(NfcTap);