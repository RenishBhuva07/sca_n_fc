import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack } from '../../Navigators/Navigator';
import { FontName } from '../../Assets/Styles/FontName';

interface ISettingsProps { }

interface ISettingsState {
    projectData: Array<any>;
}

const Settings = (props: ISettingsProps) => {

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
                    <Text style={{
                        color: Colors.DefaultYellow,
                        marginVertical: ResponsivePixels.size30,
                        fontSize: ResponsivePixels.size26,
                    }}>Settings</Text>

                    <View style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <View style={{}}>
                            <Image style={styles.iconStyle} source={IMAGES.ic_Vibrate} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Vibrate</Text>
                            <Text style={styles.subTitleText}>Vibration when scan is done</Text>
                        </View>
                        <View style={{}}>
                            <Switch
                                trackColor={{ false: Colors.CharcoalGrayOpacity, true: 'rgba(253, 182, 35, 0.5)' }}
                                thumbColor={true ? Colors.DefaultYellow : Colors.SoftSilver}
                                value={true}
                                // onValueChange={toggleSwitch}
                                style={{}}
                            />
                        </View>
                    </View>
                    <View style={styles.settingItemWrapper}>
                        <View style={{}}>
                            <Image style={styles.iconStyle} source={IMAGES.ic_Beep} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Beep</Text>
                            <Text style={styles.subTitleText}>Beep when scan is done</Text>
                        </View>
                        <View style={{}}>
                            <Switch
                                trackColor={{ false: Colors.CharcoalGrayOpacity, true: 'rgba(253, 182, 35, 0.5)' }}
                                thumbColor={false ? Colors.DefaultYellow : Colors.SoftSilver}
                                value={false}
                                // onValueChange={toggleSwitch}
                                style={{}}
                            />
                        </View>
                    </View>

                </View>
                <View style={styles.sectionContainer}>
                    <Text style={{
                        color: Colors.DefaultYellow,
                        marginVertical: ResponsivePixels.size30,
                        fontSize: ResponsivePixels.size26,
                    }}>Support</Text>

                    <View style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <View style={{}}>
                            <Image style={styles.iconStyle} source={IMAGES.ic_Rate_Us} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Rate Us</Text>
                            <Text style={styles.subTitleText}>Your best reward to us.</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.settingItemWrapper, marginBottom: ResponsivePixels.size30 }}>
                        <View style={{}}>
                            <Image style={styles.iconStyle} source={IMAGES.ic_Privacy_Policy} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Privacy Policy</Text>
                            <Text style={styles.subTitleText}>Follow our policies that benefits you.</Text>
                        </View>
                    </View>
                    <View style={styles.settingItemWrapper}>
                        <View style={{}}>
                            <Image style={styles.iconStyle} source={IMAGES.ic_Share} />
                        </View>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleText}>Share</Text>
                            <Text style={styles.subTitleText}>Share app with others.</Text>
                        </View>
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