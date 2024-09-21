import React from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { IMAGES } from "../../Assets/Images";
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { navigate } from '../../Navigators/Navigator';
const screenWidth = Dimensions.get("window").width;


interface IIntroProps {
    navigation: any;
}

const Intro = (props: IIntroProps) => {

    const navigateToDashboard = () => {
        navigate('Dashboard');
    };

    return (
        <View style={styles.container}>

            <StatusBar translucent backgroundColor="transparent" />

            <Image style={{
                height: ResponsivePixels.size210,
                width: screenWidth,
                alignItems: 'center',
                resizeMode: 'cover',
            }} source={IMAGES.bg_Intro_Top} />

            <View style={styles.contentContainer}>
                <View style={{ flex: 1.5 }}>
                    <Image style={styles.introIcon} source={IMAGES.ic_Intro_QR} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Get Started</Text>
                    <Text style={styles.description}>Go and enjoy our features for free and make your life easy with us.</Text>
                </View>
            </View>

            <View style={{
                position: 'relative',
            }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigateToDashboard()}
                    activeOpacity={0.7}>
                    <Image style={styles.buttonIcon} source={IMAGES.ic_Arrow} />
                </TouchableOpacity>
                <Image style={{
                    height: ResponsivePixels.size160,
                    width: screenWidth - ResponsivePixels.size40,
                    marginLeft: ResponsivePixels.size45,
                    marginBottom: -ResponsivePixels.size15,
                    resizeMode: 'contain'
                }} source={IMAGES.bg_Intro_End} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DefaultYellow,
    },
    waveTop: {
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    waveBottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: ResponsivePixels.size20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: ResponsivePixels.size20,
    },
    title: {
        fontSize: ResponsivePixels.size32,
        fontWeight: 'bold',
        color: Colors.CharcoalGray,
    },
    description: {
        fontSize: ResponsivePixels.size16,
        color: Colors.LightCharcoalGray,
        textAlign: 'center',
        marginTop: ResponsivePixels.size10,
        marginBottom: ResponsivePixels.size30,
    },
    button: {
        backgroundColor: Colors.DefaultYellow,
        borderRadius: 50,
        height: ResponsivePixels.size80,
        width: ResponsivePixels.size80,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowOpacity: 0.1,
        shadowColor: Colors.DefaultWhite,
        position: 'absolute',
        bottom: ResponsivePixels.size20,
        right: ResponsivePixels.size20,
        zIndex: 1,
    },
    buttonIcon: {
        width: ResponsivePixels.size22,
        height: ResponsivePixels.size18,
    },
    introIcon: {
        height: ResponsivePixels.size200,
        width: ResponsivePixels.size200,
    },
});

export default Intro;