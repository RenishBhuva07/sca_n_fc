import React, { useEffect, useState } from 'react';
import { Button, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';

interface IGenerateQRProps {
    header_title: string;
}

interface IGenerateQRState { }

const GenerateQR = (props: IGenerateQRProps) => {

    const [state, setState] = useState<IGenerateQRState>({});

    // useEffect(() => {
    //     return () => {
    //     }
    // }, [])


    const {
        header_title,
    } = props?.route?.params;

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
                        leftColumn={header_title}
                        rightColumn={IMAGES.ic_Line_Menu}
                        rightColumnImageStyle={{
                            padding: 10,
                            backgroundColor: Colors.CharcoalGray,
                            borderRadius: 6,
                        }}
                        customHeaderBackgroundColor={"transparent"}
                    />
                    {/* <View style={styles.qrContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter text"
                            placeholderTextColor="#ccc"
                        />
                        <Button title="Generate QR Code" onPress={() => { }} />
                    </View> */}
                    <Text style={{ color: Colors.BlushPink }}>Generate QR</Text>
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
        // justifyContent: 'center',
        backgroundColor: Colors.CharcoalGrayOpacity,
    },
    qrContainer: {
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: Colors.CharcoalGray,
        borderRadius: 10,
    },
    textInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#fff', // Text color
    },
});

export default GenerateQR;