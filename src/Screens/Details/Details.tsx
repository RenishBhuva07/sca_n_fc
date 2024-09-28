import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack, navigate } from '../../Navigators/Navigator';

interface IDetailsProps {
    detailItem: any;
}

interface IDetailsState {
    detailItemData: any;
}

const Details = (props: IDetailsProps) => {

    const [state, setState] = useState<IDetailsState>({
        detailItemData: {},
    });

    useEffect(() => {
        const { detailItem } = props?.route?.params;
        setState({ detailItemData: detailItem });
        return () => {
        }
    }, [])


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
                        backgroundColor: Colors.Graphite,
                        borderRadius: 6,
                        paddingHorizontal: ResponsivePixels.size24,
                        paddingTop: ResponsivePixels.size20,
                        paddingBottom: ResponsivePixels.size6,
                        marginTop: ResponsivePixels.size40,
                        marginBottom: ResponsivePixels.size42,

                        elevation: 10,
                        shadowColor: Colors.CharcoalGray,
                    }}>
                        <View style={{ flexDirection: 'row', borderBottomColor: Colors.SlateGray, borderBottomWidth: 0.3, paddingBottom: ResponsivePixels.size21 }}>
                            <View style={{}}>
                                <Image style={{
                                    width: ResponsivePixels.size50,
                                    height: ResponsivePixels.size50,
                                }} source={IMAGES.ic_QR_History} />
                            </View>
                            <View style={{ marginStart: ResponsivePixels.size16 }}>
                                <Text style={{
                                    color: Colors.SoftSilver,
                                    marginBottom: ResponsivePixels.size11,
                                    fontSize: ResponsivePixels.size22,
                                }}>{state.detailItemData?.subTitle}</Text>
                                <Text style={{
                                    color: Colors.NeutralSilver,
                                    fontSize: ResponsivePixels.size13,
                                }}>{state.detailItemData?.created_date}</Text>
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={{
                                color: Colors.SoftSilver,
                                marginTop: ResponsivePixels.size10,
                                fontSize: ResponsivePixels.size17
                            }}>{state.detailItemData?.title}</Text>
                            <Pressable onPress={() => navigate("ShowQR")}>
                                <Text style={{
                                    color: Colors.DefaultYellow,
                                    textAlign: 'center',
                                    fontSize: ResponsivePixels.size15,
                                    paddingVertical: ResponsivePixels.size14,
                                }}>Show QR Code</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                        <Pressable onPress={() => { }} style={{ justifyContent: "center" }}>
                            <Image style={{
                                width: ResponsivePixels.size80,
                                height: ResponsivePixels.size80,
                            }} source={IMAGES.ic_Share_Big} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: ResponsivePixels.size15,
                                color: Colors.SoftSilver,
                            }}>Share</Text>
                        </Pressable>
                        <Pressable onPress={() => { }}>
                            <Image style={{
                                width: ResponsivePixels.size80,
                                height: ResponsivePixels.size80,
                            }} source={IMAGES.ic_Copy} />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: ResponsivePixels.size15,
                                color: Colors.SoftSilver,
                            }}>Copy</Text>
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