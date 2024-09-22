import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { navigate } from '../../Navigators/Navigator';
import { IMAGES } from '../../Assets/Images';

interface IQrMenuListProps { }

interface IQrMenuListState {
    qrMenuList: Array<any>;
}

const QrMenuList = (props: IQrMenuListProps) => {

    const [state, setState] = useState<IQrMenuListState>({
        qrMenuList: [
            {
                id: 1,
                title: "Text",
                icon: IMAGES.ic_Text,
            },
            {
                id: 2,
                title: "Website",
                icon: IMAGES.ic_Website,
            },
            {
                id: 3,
                title: "Wi-Fi",
                icon: IMAGES.ic_Wi_Fi,
            },
            {
                id: 4,
                title: "Event",
                icon: IMAGES.ic_Event,
            },
            {
                id: 5,
                title: "Contact",
                icon: IMAGES.ic_Contact,
            },
            {
                id: 6,
                title: "Business",
                icon: IMAGES.ic_Business,
            },
            {
                id: 7,
                title: "Location",
                icon: IMAGES.ic_Location,
            },
            {
                id: 8,
                title: "Whatsapp",
                icon: IMAGES.ic_Whatsapp,
            },
            {
                id: 9,
                title: "Email",
                icon: IMAGES.ic_Email,
            },
            {
                id: 10,
                title: "Twitter",
                icon: IMAGES.ic_Twitter,
            },
            {
                id: 11,
                title: "Instagram",
                icon: IMAGES.ic_Instagram,
            },
            {
                id: 12,
                title: "Telephone",
                icon: IMAGES.ic_Telephone,
            },
        ],
    });

    const renderProjects = ({ item, index }: any) => {
        return (
            <Pressable key={index + 1} style={styles.projectListItem} onPress={() => navigate("Details", { name: item?.title })}>
                <View style={{
                    height: 90,
                    width: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Colors.CharcoalGray,
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: Colors.DefaultYellow,
                    position: 'relative',
                }}>
                    <Text style={styles.projectListItemText}>{item?.title}</Text>
                    <Image style={{
                        width: 40,
                        height: 40,
                        tintColor: Colors.SoftSilver,
                        resizeMode: 'contain',
                    }} source={item?.icon} />
                </View>
            </Pressable>
        )
    };
    const renderStickyHeaderComponent = () => {
        return (
            <View style={{
                backgroundColor: 'red',
            }}>
                <Text style={{ backgroundColor: 'red', color: Colors.DefaultGreenColor }}>Hey</Text>
            </View>
        )
    };



    return (
        <>
            {/* <StatusBar backgroundColor={'transparent'} networkActivityIndicatorVisible barStyle={'light-content'} /> */}
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <FlatList
                        scrollEnabled
                        data={state.qrMenuList}
                        renderItem={(item) => renderProjects(item)}
                        contentContainerStyle={styles.projectList}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}

                        stickyHeaderHiddenOnScroll={true}
                        // StickyHeaderComponent={() => renderStickyHeaderComponent()}
                        invertStickyHeaders={true}
                        style={{
                            // paddingVertical: 20,
                        }}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.CharcoalGray,
        opacity: 0.84,
    },
    container: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    projectList: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 120,
    },
    projectListItem: {
        marginHorizontal: 5,
        marginVertical: ResponsivePixels.size40,
        minWidth: '30.5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    projectListItemText: {
        textAlign: 'center',
        color: Colors.CharcoalGray,
        fontSize: ResponsivePixels.size12,
        backgroundColor: Colors.DefaultYellow,
        fontWeight: '600',
        position: 'absolute',
        top: -12,
        paddingVertical: ResponsivePixels.size2,
        paddingHorizontal: ResponsivePixels.size7,
        borderRadius: 4,
        zIndex: 5,
    }
});

export default QrMenuList;