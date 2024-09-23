import React, { useEffect, useState } from 'react';
import { Button, Image, ImageBackground, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack } from '../../Navigators/Navigator';
import { QR_TYPE } from '../../Utils/AppConstants';

interface IGenerateQRProps {
    qr_menu_item: any;
}

interface IGenerateQRState { }

const GenerateQR = (props: IGenerateQRProps) => {

    const [state, setState] = useState<IGenerateQRState>({});

    // useEffect(() => {
    //     return () => {
    //     }
    // }, [])


    const {
        qr_menu_item, } = props?.route?.params,
        renderGenerateQRForms = () => {
            switch (qr_menu_item?.qr_type) {
                case QR_TYPE.TEXT:
                    return (
                        <View style={{}}>
                            <Text style={styles.miniTitle}>Text</Text>
                            <TextInput
                                placeholder="Enter text"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilver}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                            />
                        </View>
                    );
                case QR_TYPE.WEBSITE:
                    return (
                        <View>
                            <Text style={styles.miniTitle}>Website URL</Text>
                            <TextInput
                                placeholder="Enter URL"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilver}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                            />
                        </View>
                    );
                case QR_TYPE.WI_FI:
                    return (
                        <View>
                            <Text style={styles.miniTitle}>Network</Text>
                            <TextInput
                                placeholder="Network"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilver}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                            />
                            <Text style={styles.miniTitle}>Password</Text>
                            <TextInput
                                placeholder="Password"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilver}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                            />
                        </View>
                    );
                // Add more cases for other options like Event, Contact, etc.
                default:
                    return <Text style={{ color: Colors.DefaultWhite, textAlign: 'center' }}>No form available for this option</Text>;
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
                        rightColumn={qr_menu_item?.title}
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

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={styles.qrFormContainer}>
                            <View style={{ alignItems: 'center' }}>
                                <Image style={{
                                    width: ResponsivePixels.size70,
                                    height: ResponsivePixels.size70,
                                }} source={IMAGES.ic_SplashLogo} />
                            </View>

                            <View style={{ marginTop: ResponsivePixels.size40, marginBottom: ResponsivePixels.size60 }}>
                                {renderGenerateQRForms()}
                            </View>

                            <View style={{}}>
                                <Pressable style={styles.btnStyle} onPress={() => { }} >
                                    <Text style={styles.btnTextStyle}>Generate QR Code</Text>
                                </Pressable>
                            </View>

                        </View>
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
    qrFormContainer: {
        marginHorizontal: ResponsivePixels.size35,
        padding: ResponsivePixels.size20,
        backgroundColor: Colors.CharcoalGray,
        opacity: 0.78,
        borderRadius: 10,
    },
    miniTitle: {
        fontSize: ResponsivePixels.size18,
        color: Colors.DefaultWhite,
        marginBottom: ResponsivePixels.size10,
    },
    textInput: {
        height: ResponsivePixels.size40,
        borderColor: Colors.SoftSilver,
        borderWidth: 1,
        marginBottom: ResponsivePixels.size10,
        paddingHorizontal: ResponsivePixels.size10,
        color: Colors.DefaultWhite,
        borderRadius: 6,
        fontSize: ResponsivePixels.size16
    },
    btnStyle: {
        backgroundColor: Colors.DefaultYellow,
        padding: ResponsivePixels.size15,
        marginHorizontal: ResponsivePixels.size50,
        borderRadius: 6,
    },
    btnTextStyle: {
        textAlign: 'center',
        color: Colors.CharcoalGray,
        fontSize: ResponsivePixels.size16,
        fontWeight: 'bold',
    },
});

export default GenerateQR;