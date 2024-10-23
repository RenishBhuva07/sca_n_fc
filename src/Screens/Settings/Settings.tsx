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
                        animation={'slideInLeft'}
                        duration={800}
                        easing={'ease-in-out'}
                        style={{
                            color: Colors.DefaultYellow,
                            marginBottom: ResponsivePixels.size30,
                            fontSize: ResponsivePixels.size26,
                        }}>Settings</Animatable.Text>

                    <Animatable.View animation={'bounceIn'} duration={800} easing={'ease-in-out'} style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <View style={{}}>
                            <Animatable.Image animation={'fadeInLeft'} duration={600} easing={'ease-in-out'} delay={600} style={styles.iconStyle} source={IMAGES.ic_Vibrate} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.titleText}>Vibrate</Animatable.Text>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.subTitleText}>Vibration when scan is done</Animatable.Text>
                        </View>
                        <Animatable.View animation={'fadeInRight'} duration={600} easing={'ease-in-out'} delay={600}>
                            <Switch
                                trackColor={{ false: Colors.CharcoalGrayOpacity, true: 'rgba(253, 182, 35, 0.5)' }}
                                thumbColor={isVibrateOnScan ? Colors.DefaultYellow : Colors.SoftSilver}
                                value={isVibrateOnScan}
                                onValueChange={() => setIsVibrateOnScan(!isVibrateOnScan)}
                                style={{}}
                            />
                        </Animatable.View>
                    </Animatable.View>
                    <Animatable.View animation={'bounceIn'} duration={800} easing={'ease-in-out'} style={styles.settingItemWrapper}>
                        <View style={{}}>
                            <Animatable.Image animation={'fadeInLeft'} duration={600} easing={'ease-in-out'} delay={600} style={styles.iconStyle} source={IMAGES.ic_Beep} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.titleText}>Beep</Animatable.Text>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.subTitleText}>Beep when scan is done</Animatable.Text>
                        </View>
                        <Animatable.View animation={'fadeInRight'} duration={600} easing={'ease-in-out'} delay={600}>
                            <Switch
                                trackColor={{ false: Colors.CharcoalGrayOpacity, true: 'rgba(253, 182, 35, 0.5)' }}
                                thumbColor={isBeepOnScan ? Colors.DefaultYellow : Colors.SoftSilver}
                                value={isBeepOnScan}
                                onValueChange={() => setIsBeepOnScan(!isBeepOnScan)}
                                style={{}}
                            />
                        </Animatable.View>
                    </Animatable.View>

                </View>
                <View style={styles.sectionContainer}>
                    <Animatable.Text
                        animation={'slideInLeft'}
                        duration={800}
                        easing={'ease-in-out'}
                        style={{
                            color: Colors.DefaultYellow,
                            marginVertical: ResponsivePixels.size30,
                            fontSize: ResponsivePixels.size26,
                        }}>Support</Animatable.Text>

                    <Animatable.View animation={'bounceIn'} duration={800} easing={'ease-in-out'} style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <View style={{}}>
                            <Animatable.Image animation={'fadeInLeft'} duration={600} easing={'ease-in-out'} delay={600} style={styles.iconStyle} source={IMAGES.ic_Rate_Us} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.titleText}>Rate Us</Animatable.Text>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.subTitleText}>Your best reward to us.</Animatable.Text>
                        </View>
                    </Animatable.View>
                    <Animatable.View animation={'bounceIn'} duration={800} easing={'ease-in-out'} style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <View style={{}}>
                            <Animatable.Image animation={'fadeInLeft'} duration={600} easing={'ease-in-out'} delay={600} style={styles.iconStyle} source={IMAGES.ic_Privacy_Policy} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.titleText}>Privacy Policy</Animatable.Text>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.subTitleText}>Follow our policies that benefits you.</Animatable.Text>
                        </View>
                    </Animatable.View>
                    <Animatable.View animation={'bounceIn'} duration={800} easing={'ease-in-out'} style={styles.settingItemWrapper}>
                        <View style={{}}>
                            <Animatable.Image animation={'fadeInLeft'} duration={600} easing={'ease-in-out'} delay={600} style={styles.iconStyle} source={IMAGES.ic_Share} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.titleText}>Share</Animatable.Text>
                            <Animatable.Text animation={'fadeInUp'} duration={600} easing={'ease-in-out'} delay={600} style={styles.subTitleText}>Share app with others.</Animatable.Text>
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