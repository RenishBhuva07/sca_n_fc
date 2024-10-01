import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { navigate } from '../../Navigators/Navigator';
import { IMAGES } from '../../Assets/Images';
import { QR_TYPE } from '../../Utils/AppConstants';
import * as Animatable from "react-native-animatable";

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
                qr_type: QR_TYPE.TEXT,
            },
            {
                id: 2,
                title: "Website",
                icon: IMAGES.ic_Website,
                qr_type: QR_TYPE.WEBSITE,
            },
            {
                id: 3,
                title: "Wi-Fi",
                icon: IMAGES.ic_Wi_Fi,
                qr_type: QR_TYPE.WI_FI,
            },
            {
                id: 4,
                title: "Event",
                icon: IMAGES.ic_Event,
                qr_type: QR_TYPE.EVENT,
            },
            {
                id: 5,
                title: "Contact",
                icon: IMAGES.ic_Contact,
                qr_type: QR_TYPE.CONTACT,
            },
            {
                id: 6,
                title: "Business",
                icon: IMAGES.ic_Business,
                qr_type: QR_TYPE.BUSINESS,
            },
            {
                id: 7,
                title: "Location",
                icon: IMAGES.ic_Location,
                qr_type: QR_TYPE.LOCATION,
            },
            {
                id: 8,
                title: "Whatsapp",
                icon: IMAGES.ic_Whatsapp,
                qr_type: QR_TYPE.WHATSAPP,
            },
            {
                id: 9,
                title: "Email",
                icon: IMAGES.ic_Email,
                qr_type: QR_TYPE.EMAIL,
            },
            {
                id: 10,
                title: "Twitter",
                icon: IMAGES.ic_Twitter,
                qr_type: QR_TYPE.TWITTER,
            },
            {
                id: 11,
                title: "Instagram",
                icon: IMAGES.ic_Instagram,
                qr_type: QR_TYPE.INSTAGRAM,
            },
            {
                id: 12,
                title: "Telephone",
                icon: IMAGES.ic_Telephone,
                qr_type: QR_TYPE.TELEPHONE,
            },
        ],
    });

    const renderProjects = ({ item, index }: any) => {
        return (
            <Animatable.View
                animation={'bounceIn'}
                duration={1000}
                easing={'ease-in-out'}
            >
                <Pressable key={index + 1} style={styles.projectListItem} onPress={() => navigate("GenerateQR", { qr_menu_item: item })}>
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
            </Animatable.View>
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
        opacity: 1,
    }
});

export default QrMenuList;