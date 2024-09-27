import React from 'react';
import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack, navigate } from '../../Navigators/Navigator';

interface IDetailsProps { }

interface IDetailsState {
    projectData: Array<any>;
}

const Details = (props: IDetailsProps) => {

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
                    rightColumn={"Result"}
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
                <View style={styles.container}>

                    <View style={{
                        backgroundColor: Colors.CharcoalGray,
                        borderRadius: 6,
                    }}>
                        <View style={{}}>
                            <Text style={{ color: 'black' }}>Data</Text>
                            <Text style={{ color: 'black' }}>16 Dec 2022, 9:30 pm</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ color: 'black' }}>Dethttps://www.youtube.com/watch?v=Zd9g7sKvgIMails</Text>
                            <Pressable onPress={() => navigate("ShowQR")}><Text style={{ color: 'black' }}>Show QR Code</Text></Pressable>
                        </View>
                    </View>

                    <View>
                        <Pressable onPress={() => { }}>
                            <Text>Share</Text>
                        </Pressable>
                        <Pressable onPress={() => { }}>
                            <Text>Copy</Text>
                        </Pressable>
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
        marginHorizontal: ResponsivePixels.size35,
    },
});

export default Details;