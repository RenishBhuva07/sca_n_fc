import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack } from '../../Navigators/Navigator';

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
                <View style={styles.container}>
                    <Text style={{ color: 'black' }}>Settings</Text>

                    <View style={{
                        backgroundColor: Colors.CharcoalGray,
                        borderRadius: 10,
                        borderWidth: 0.2,
                        borderBottomWidth: 3,
                        borderTopColor: Colors.CharcoalGray,
                        borderStartColor: Colors.CharcoalGray,
                        borderEndColor: Colors.CharcoalGray,
                        borderBottomColor: Colors.DefaultYellow,
                    }}>
                        <View style={{}}></View>
                        <View style={{}}>
                            <Text style={{ color: 'black' }}>Project Name</Text>
                            <Text style={{ color: 'black' }}>Project Name</Text>
                        </View>
                        <View style={{}}></View>
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
    container: {
        marginHorizontal: ResponsivePixels.size24,
    },
});

export default Settings;