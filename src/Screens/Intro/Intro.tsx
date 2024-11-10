import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { IMAGES } from "../../Assets/Images";
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { resetNavigation } from '../../Navigators/Navigator';
import { CustomAnimation } from '../../CommonComponents/CustomAnimation/CustomAnimation';
import { ANIMATIONS } from '../../Assets/Animations';
const screenWidth = Dimensions.get("window").width;


interface IIntroProps { }

const Intro = (props: IIntroProps) => {

    const flatListRef = useRef<FlatList>(null),
        [pageIndex, setPageIndex] = useState(0),

        introductionData = [
            {
                key: '1',
                title: 'Quick, Clear, and Connected',
                description: 'Effortlessly connect to digital content in seconds. Just point, scan, and access information, menus, contacts, or web links with ease. Simplifying interactions, one scan at a time',
                image: IMAGES.ic_Intro_QR,
                animation: ANIMATIONS.Scan,
            },
            {
                key: '2',
                title: 'Smart Touch, Instant Access',
                description: 'Experience the future of information sharing with a simple tap. Use NFC to instantly read and write data, enabling seamless exchanges across devices. Secure, swift, and versatile, all with a touch',
                image: IMAGES.ic_NFC_Tap,
                animation: ANIMATIONS.Scan_NFC,
            },
        ],

        handleButtonPress = () => {
            if (pageIndex === 0) {
                flatListRef.current?.scrollToIndex({ index: 1, animated: true });
                setPageIndex(1);
            } else {
                resetNavigation('BottomTab');
            }
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

            <FlatList
                ref={flatListRef}
                data={introductionData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled
                renderItem={({ item }) => (
                    <View style={styles.pageContainer}>
                        <View style={styles.contentContainer}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                {/* <Image style={styles.introIcon} source={item.image} /> */}
                                <CustomAnimation
                                    animationFile={item.animation}
                                    animationStyle={{
                                        width: ResponsivePixels.size300,
                                        height: ResponsivePixels.size300,
                                    }}
                                />

                            </View>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />

            <View style={{
                position: 'relative',
                bottom: 0,
                marginTop: "auto",
            }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleButtonPress()}
                    activeOpacity={0.7}>
                    <Image style={styles.buttonIcon} source={IMAGES.ic_Arrow} />
                </TouchableOpacity>
                <Image style={{
                    height: ResponsivePixels.size170,
                    width: screenWidth,
                    marginLeft: ResponsivePixels.size10,
                    bottom: 0,
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
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: ResponsivePixels.size55,
    },
    title: {
        fontSize: ResponsivePixels.size21,
        fontWeight: 'bold',
        color: Colors.CharcoalGray,
        textAlign: "justify",
    },
    description: {
        fontSize: ResponsivePixels.size16,
        color: Colors.LightCharcoalGray,
        textAlign: 'justify',
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
    pageContainer: {
        width: screenWidth,
        alignItems: 'center',
    },
});

export default Intro;