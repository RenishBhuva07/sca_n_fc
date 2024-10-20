import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { IMAGES } from '../../Assets/Images';
import { navigate } from '../../Navigators/Navigator';
import { formatDate } from '../../Utils/Utils';

interface IHistoryListProps {
    historyToRender: string;
    deleteHistoryItem: (item: any) => void;
}

interface IHistoryListState { }

const HistoryList = (props: IHistoryListProps) => {

    const {
        historyToRender,
        deleteHistoryItem,
    } = props,
        historyLength = historyToRender && historyToRender.length,
        renderHistoryItem = ({ item, index }: any) => {
            return (
                <Pressable key={index + 1} style={[styles.historyListItem, styles.shadowStyle]} onPress={() => { navigate("Details", { detailItem: item }) }}>

                    <View style={{ marginTop: ResponsivePixels.size7 }}>
                        <Image style={{ width: ResponsivePixels.size40, height: ResponsivePixels.size40, resizeMode: "contain" }} source={IMAGES.ic_Scan_History} />
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: "column",
                        marginStart: ResponsivePixels.size10
                    }}>
                        <View style={{ flexDirection: "row", }}>
                            <Text style={{
                                flex: 1,
                                color: Colors.DefaultWhite,
                                marginBottom: ResponsivePixels.size8,
                            }}>{item?.title}</Text>

                            <Pressable onPress={() => deleteHistoryItem(item)}>
                                <Image style={{
                                    width: ResponsivePixels.size16,
                                    height: ResponsivePixels.size20,
                                    resizeMode: 'contain',
                                    marginBottom: ResponsivePixels.size8,
                                }} source={IMAGES.ic_Delete} />
                            </Pressable>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{
                                flex: 1,
                                color: Colors.NeutralSilver,
                            }}>{item?.subTitle}</Text>
                            <Text style={{ color: Colors.NeutralSilver }}>{formatDate(item?.created_date) || "N/A"}</Text>
                        </View>

                    </View>
                </Pressable>
            )
        };

    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled
                data={historyToRender}
                renderItem={(item) => renderHistoryItem(item)}
                contentContainerStyle={historyLength > 0 ? styles.historyListWrapper : styles.emptyHistoryListWrapper}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                stickyHeaderHiddenOnScroll={true}
                invertStickyHeaders={true}
                numColumns={1}
                style={{
                    // paddingVertical: 20,
                }}
                ListEmptyComponent={() => {
                    return (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                        }}>
                            <Text style={{
                                color: Colors.NeutralSilver,
                                fontSize: ResponsivePixels.size16,
                            }}>Your QR History will be here</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    shadowStyle: {
        // shadowColor: Colors.DefaultYellow,
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.82,
        // shadowRadius: 3.5,
        // elevation: 5,
        // borderColor: Colors.DefaultYellow,
        borderBottomWidth: 3,
        borderWidth: 0.01,
        borderTopColor: Colors.CharcoalGray,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
        borderBottomColor: Colors.DefaultYellow,
    },
    container: {
        flex: 1,
        marginTop: ResponsivePixels.size100,
    },
    emptyHistoryListWrapper: {
        paddingHorizontal: 20,
        paddingBottom: 150,
        width: "100%",
        flex: 1,
    },
    historyListWrapper: {
        flexDirection: "column",
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        paddingBottom: 150,
        width: "100%",
    },
    historyListItem: {
        flex: 1,
        width: '100%',
        flexDirection: "row",
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.CharcoalGray,
        opacity: 1,
        marginVertical: ResponsivePixels.size7,
        paddingVertical: ResponsivePixels.size10,
        paddingHorizontal: ResponsivePixels.size15,
        borderRadius: 6,
    },
});

export default HistoryList;