import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { navigate } from '../../Navigators/Navigator';
import { IMAGES } from '../../Assets/Images';
import { QR_TYPE } from '../../Utils/AppConstants';
import * as Animatable from "react-native-animatable";
import { triggerVibration } from '../../Utils/Utils';
import { connect } from 'react-redux';

interface IQrMenuListProps {
    isScanMode: boolean;
}

interface IQrMenuListState {
    qrMenuList: Array<any>;
    nfcMenuList: Array<any>;
}

const QrMenuList = (props: IQrMenuListProps) => {

    const [state, setState] = useState<IQrMenuListState>({
        qrMenuList: [
            {
                id: 1,
                title: "Text",
                icon: IMAGES.ic_Text_yl,
                qr_type: QR_TYPE.TEXT,
            },
            {
                id: 2,
                title: "Website",
                icon: IMAGES.ic_Website_yl,
                qr_type: QR_TYPE.WEBSITE,
            },
            {
                id: 3,
                title: "Wi-Fi",
                icon: IMAGES.ic_Wi_Fi_yl,
                qr_type: QR_TYPE.WI_FI,
            },
            {
                id: 4,
                title: "Event",
                icon: IMAGES.ic_Event_yl,
                qr_type: QR_TYPE.EVENT,
            },
            {
                id: 5,
                title: "Contact",
                icon: IMAGES.ic_Contact_yl,
                qr_type: QR_TYPE.CONTACT,
            },
            {
                id: 6,
                title: "Business",
                icon: IMAGES.ic_Business_yl,
                qr_type: QR_TYPE.BUSINESS,
            },
            {
                id: 7,
                title: "Location",
                icon: IMAGES.ic_Location_yl,
                qr_type: QR_TYPE.LOCATION,
            },
            {
                id: 8,
                title: "Whatsapp",
                icon: IMAGES.ic_Whatsapp_yl,
                qr_type: QR_TYPE.WHATSAPP,
            },
            {
                id: 9,
                title: "Email",
                icon: IMAGES.ic_Email_yl,
                qr_type: QR_TYPE.EMAIL,
            },
            {
                id: 10,
                title: "Twitter",
                icon: IMAGES.ic_Twitter_yl,
                qr_type: QR_TYPE.TWITTER,
            },
            {
                id: 11,
                title: "Instagram",
                icon: IMAGES.ic_Instagram_yl,
                qr_type: QR_TYPE.INSTAGRAM,
            },
            {
                id: 12,
                title: "Telephone",
                icon: IMAGES.ic_Telephone_yl,
                qr_type: QR_TYPE.TELEPHONE,
            },
        ],
        nfcMenuList: [
            {
                id: 1,
                title: "Text",
                icon: IMAGES.ic_Text_yl,
                qr_type: QR_TYPE.TEXT,
            },
            {
                id: 2,
                title: "Website",
                icon: IMAGES.ic_Website_yl,
                qr_type: QR_TYPE.WEBSITE,
            },
            {
                id: 3,
                title: "Wi-Fi",
                icon: IMAGES.ic_Wi_Fi_yl,
                qr_type: QR_TYPE.WI_FI,
            },
            {
                id: 4,
                title: "Bluetooth",
                icon: IMAGES.ic_Event_yl,
                qr_type: QR_TYPE.EVENT,
            },
            {
                id: 5,
                title: "Contact",
                icon: IMAGES.ic_Contact_yl,
                qr_type: QR_TYPE.CONTACT,
            },
            {
                id: 6,
                title: "Business",
                icon: IMAGES.ic_Business_yl,
                qr_type: QR_TYPE.BUSINESS,
            },
            {
                id: 7,
                title: "Location",
                icon: IMAGES.ic_Location_yl,
                qr_type: QR_TYPE.LOCATION,
            },
            {
                id: 8,
                title: "Whatsapp",
                icon: IMAGES.ic_Whatsapp_yl,
                qr_type: QR_TYPE.WHATSAPP,
            },
            {
                id: 9,
                title: "Email",
                icon: IMAGES.ic_Email_yl,
                qr_type: QR_TYPE.EMAIL,
            },
            {
                id: 10,
                title: "Twitter",
                icon: IMAGES.ic_Twitter_yl,
                qr_type: QR_TYPE.TWITTER,
            },
            {
                id: 11,
                title: "Instagram",
                icon: IMAGES.ic_Instagram_yl,
                qr_type: QR_TYPE.INSTAGRAM,
            },
            {
                id: 12,
                title: "Telephone",
                icon: IMAGES.ic_Telephone_yl,
                qr_type: QR_TYPE.TELEPHONE,
            },
        ],
    }),
        onClickMenu = (menuItem: any) => {
            triggerVibration(100);
            navigate("GenerateQR", { qr_menu_item: menuItem })
        };

    const renderMenus = ({ item, index }: any) => {
        return (
            <Animatable.View
                animation={'bounceIn'}
                duration={1000}
                easing={'ease-in-out'}
            >
                <Pressable key={index + 1} style={styles.projectListItem} onPress={() => onClickMenu(item)}>
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
                        <Animatable.Text
                            animation={'zoomIn'}
                            duration={300}
                            delay={500}
                            easing={'ease-in-out'}
                            style={styles.projectListItemText}>{item?.title}</Animatable.Text>
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
    }, {
        isScanMode,
    } = props;

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <FlatList
                        scrollEnabled
                        data={isScanMode ? state.qrMenuList : state.nfcMenuList}
                        renderItem={(item) => renderMenus(item)}
                        contentContainerStyle={styles.projectList}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}

                        stickyHeaderHiddenOnScroll={true}
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
        backgroundColor: Colors.CharcoalGrayOpacity,
        // opacity: 0.84,
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

const mapStateToProps = (state: any) => ({
    isScanMode: state.baseData?.isScanModeEnabled,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(QrMenuList);