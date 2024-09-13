import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { IMAGES } from "../../Assets/Images";
import { Colors } from '../../Assets/Styles/Colors';


interface ISplashProps {
    navigation: any;
}

const Splash = (props: ISplashProps) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Dashboard')
        }, 2000);
    }, [])

    return (
        <View style={styles.mainView}>
            <View>
                <Image style={styles.image} source={IMAGES.splashLogo} />
                <Text style={styles.tagLine}>Transforming Insights into Action.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.RoyalPurple,
        alignItems: 'center'
    },
    image: {
        height: 300,
        width: 300
    },
    tagLine: {
        color: Colors.DefaultWhite,
        textAlign: 'center',
        fontSize: 19,
    },
});

export default Splash;