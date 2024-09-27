import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
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
    let screenHeight = Dimensions.get("window").height;

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
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.WEBSITE:
                    return (
                        <View>
                            <Text style={styles.miniTitle}>Website URL</Text>
                            <TextInput
                                placeholder="www.qrcode.com"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.WI_FI:
                    return (
                        <View>
                            <Text style={styles.miniTitle}>Network</Text>
                            <TextInput
                                placeholder="Enter network name"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Password</Text>
                            <TextInput
                                placeholder="Enter password"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.EVENT:
                    return (
                        <View>
                            <Text style={styles.miniTitle}>Event Name</Text>
                            <TextInput
                                placeholder="Enter name"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Start Date and Time</Text>
                            <TextInput
                                placeholder="12 Dec 2022, 10:40 pm"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>End Date and Time</Text>
                            <TextInput
                                placeholder="12 Dec 2022, 10:40 pm"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Event Location</Text>
                            <TextInput
                                placeholder="Enter location"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Description</Text>
                            <TextInput
                                placeholder="Enter any details"
                                // value={input}
                                // onChangeText={setInput}
                                style={{
                                    ...styles.textInput, height: ResponsivePixels.size60
                                }}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                numberOfLines={2}
                                multiline
                                inputMode='text'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.CONTACT:
                    return (
                        <View>
                            <Text style={styles.miniTitle}>First Name</Text>
                            <TextInput
                                placeholder="Enter name"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Last Name</Text>
                            <TextInput
                                placeholder="Enter name"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Company</Text>
                            <TextInput
                                placeholder="Enter company"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Job</Text>
                            <TextInput
                                placeholder="Enter job"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Phone</Text>
                            <TextInput
                                placeholder="Enter phone"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Email</Text>
                            <TextInput
                                placeholder="Enter email"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Website</Text>
                            <TextInput
                                placeholder="Enter website"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Address</Text>
                            <TextInput
                                placeholder="Enter address"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>City</Text>
                            <TextInput
                                placeholder="Enter city"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Country</Text>
                            <TextInput
                                placeholder="Enter country"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.BUSINESS:
                    return (
                        <View>
                            <Text style={styles.miniTitle}>Company Name</Text>
                            <TextInput
                                placeholder="Enter name"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Industry</Text>
                            <TextInput
                                placeholder="e.g Food/Agency"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Phone</Text>
                            <TextInput
                                placeholder="Enter phone"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Email</Text>
                            <TextInput
                                placeholder="Enter email"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Website</Text>
                            <TextInput
                                placeholder="Enter website"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Address</Text>
                            <TextInput
                                placeholder="Enter address"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>City</Text>
                            <TextInput
                                placeholder="Enter city"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='next'
                            />
                            <Text style={styles.miniTitle}>Country</Text>
                            <TextInput
                                placeholder="Enter country"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.LOCATION:
                    return (
                        <View style={{}}>
                            <Text style={styles.miniTitle}>Location</Text>
                            <TextInput
                                placeholder="Enter location"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.WHATSAPP:
                    return (
                        <View style={{}}>
                            <Text style={styles.miniTitle}>WhatsApp Number</Text>
                            <TextInput
                                placeholder="Enter number"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.EMAIL:
                    return (
                        <View style={{}}>
                            <Text style={styles.miniTitle}>Email</Text>
                            <TextInput
                                placeholder="Enter email address"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.TWITTER:
                    return (
                        <View style={{}}>
                            <Text style={styles.miniTitle}>Username</Text>
                            <TextInput
                                placeholder="Enter twitter username"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.INSTAGRAM:
                    return (
                        <View style={{}}>
                            <Text style={styles.miniTitle}>Username</Text>
                            <TextInput
                                placeholder="Enter Instagram username"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
                case QR_TYPE.TELEPHONE:
                    return (
                        <View style={{}}>
                            <Text style={styles.miniTitle}>Phone Number</Text>
                            <TextInput
                                placeholder="+92xxxxxxxxxx"
                                // value={input}
                                // onChangeText={setInput}
                                style={styles.textInput}
                                placeholderTextColor={Colors.SoftSilverWithOpacity}
                                cursorColor={Colors.DefaultYellow}
                                selectionColor={Colors.DefaultYellow}
                                keyboardType='default'
                                returnKeyType='done'
                            />
                        </View>
                    );
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
                        <View style={{ ...styles.qrFormContainer, maxHeight: screenHeight - 150 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image style={{
                                    width: ResponsivePixels.size70,
                                    height: ResponsivePixels.size70,
                                }} source={IMAGES.ic_SplashLogo} />
                            </View>

                            <ScrollView style={{
                                marginTop: ResponsivePixels.size30,
                                marginBottom: ResponsivePixels.size50
                            }} showsVerticalScrollIndicator={false}>
                                {renderGenerateQRForms()}
                            </ScrollView>

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

        borderWidth: 0.2,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderTopColor: Colors.DefaultYellow,
        borderBottomColor: Colors.DefaultYellow,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
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
        fontSize: ResponsivePixels.size16,
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