import React, { useState } from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack } from '../../Navigators/Navigator';
import { FontName } from '../../Assets/Styles/FontName';
import * as Animatable from "react-native-animatable";
import CustomHeader from '../../CommonComponents/CustomHeader/CustomHeader';

interface ISettingsProps { }

const Settings = (props: ISettingsProps) => {

    const [isVibrateOnScan, setIsVibrateOnScan] = useState<boolean>(false),
        [isBeepOnScan, setIsBeepOnScan] = useState<boolean>(false);

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
                    leftColumnImageStyle={{
                        paddingVertical: ResponsivePixels.size7,
                        paddingHorizontal: ResponsivePixels.size10,
                        backgroundColor: Colors.CharcoalGray,
                        borderRadius: 6,
                        resizeMode: 'contain',
                    }}
                    customHeaderBackgroundColor={"transparent"}
                    handleLeftColumnClick={() => goBack()}
                    imageStyles={{
                        height: 20,
                        width: 12,
                    }}
                />
                <View style={styles.sectionContainer}>
                    <Animatable.Text
                        animation={'fadeInUp'}
                        duration={600}
                        easing={'ease-in-out'}
                        style={{
                            color: Colors.DefaultYellow,
                            marginBottom: ResponsivePixels.size30,
                            fontSize: ResponsivePixels.size26,
                        }}>Settings</Animatable.Text>

                    <Animatable.View animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={200} style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <Image style={styles.iconStyle} source={IMAGES.ic_Vibrate} />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Vibrate</Text>
                            <Text style={styles.subTitleText}>Vibration when scan is done</Text>
                        </View>
                        <Switch
                            trackColor={{ false: Colors.CharcoalGrayOpacity, true: 'rgba(253, 182, 35, 0.5)' }}
                            thumbColor={isVibrateOnScan ? Colors.DefaultYellow : Colors.SoftSilver}
                            value={isVibrateOnScan}
                            onValueChange={() => setIsVibrateOnScan(!isVibrateOnScan)}
                        />
                    </Animatable.View>
                    <Animatable.View animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={400} style={styles.settingItemWrapper}>
                        <Image style={styles.iconStyle} source={IMAGES.ic_Beep} />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Beep</Text>
                            <Text style={styles.subTitleText}>Beep when scan is done</Text>
                        </View>
                        <Switch
                            trackColor={{ false: Colors.CharcoalGrayOpacity, true: 'rgba(253, 182, 35, 0.5)' }}
                            thumbColor={isBeepOnScan ? Colors.DefaultYellow : Colors.SoftSilver}
                            value={isBeepOnScan}
                            onValueChange={() => setIsBeepOnScan(!isBeepOnScan)}
                        />
                    </Animatable.View>

                </View>
                <View style={styles.sectionContainer}>
                    <Animatable.Text
                        animation={'fadeInUp'}
                        duration={600}
                        easing={'ease-in-out'}
                        style={{
                            color: Colors.DefaultYellow,
                            marginVertical: ResponsivePixels.size30,
                            fontSize: ResponsivePixels.size26,
                        }}>Support</Animatable.Text>

                    <Animatable.View animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={200} style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <Image style={styles.iconStyle} source={IMAGES.ic_Rate_Us} />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Rate Us</Text>
                            <Text style={styles.subTitleText}>Your best reward to us.</Text>
                        </View>
                    </Animatable.View>
                    <Animatable.View animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={400} style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <Image style={styles.iconStyle} source={IMAGES.ic_Privacy_Policy} />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Privacy Policy</Text>
                            <Text style={styles.subTitleText}>Follow our policies that benefits you.</Text>
                        </View>
                    </Animatable.View>
                    <Animatable.View animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.settingItemWrapper}>
                        <Image style={styles.iconStyle} source={IMAGES.ic_Share} />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Share</Text>
                            <Text style={styles.subTitleText}>Share app with others.</Text>
                        </View>
                    </Animatable.View>

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
    sectionContainer: {
        marginHorizontal: ResponsivePixels.size24,
        marginTop: ResponsivePixels.size20,
    },
    iconStyle: {
        width: ResponsivePixels.size27,
        height: ResponsivePixels.size27,
        resizeMode: 'contain',
        marginEnd: ResponsivePixels.size12,
    },
    settingItemWrapper: {
        backgroundColor: Colors.CharcoalGray,
        borderRadius: 10,
        borderWidth: 0.2,
        borderBottomWidth: 3,
        borderTopColor: Colors.CharcoalGray,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
        borderBottomColor: Colors.DefaultYellow,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: ResponsivePixels.size20,
        paddingVertical: ResponsivePixels.size15,
        opacity: 0.88,
    },
    titleWrapper: {
        flex: 1,
    },
    titleText: {
        color: Colors.GrayishSilver,
        fontFamily: FontName.medium,
        fontWeight: "bold",
        fontSize: ResponsivePixels.size16,
    },
    subTitleText: {
        color: Colors.PaleSilver,
        fontSize: ResponsivePixels.size14,
    },
});

export default Settings;