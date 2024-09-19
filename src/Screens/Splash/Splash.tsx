import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { IMAGES } from "../../Assets/Images";
import { Colors } from '../../Assets/Styles/Colors';
import { FontName } from '../../Assets/Styles/FontName';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';


interface ISplashProps {
    navigation: any;
}

const Splash = (props: ISplashProps) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Intro')
        }, 2000);
    }, [])

    return (
        <View style={styles.mainView}>
            <StatusBar backgroundColor={Colors.DefaultYellow} networkActivityIndicatorVisible />
            <View>
                <Image style={styles.splashLogo} source={IMAGES.ic_SplashLogo} />
            </View>
            <Text style={styles.tagLine}>Scan  Tap  Repeat</Text>
            <View />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: Colors.DefaultYellow,
        alignItems: 'center',
    },
    splashLogo: {
        height: ResponsivePixels.size200,
        width: ResponsivePixels.size200,
    },
    tagLine: {
        color: Colors.CharcoalGray,
        textAlign: 'center',
        fontSize: ResponsivePixels.size28,
        fontWeight: 'bold',
        letterSpacing: ResponsivePixels.size2,
    },
});

export default Splash;