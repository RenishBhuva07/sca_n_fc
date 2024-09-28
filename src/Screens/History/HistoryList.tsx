import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { IMAGES } from '../../Assets/Images';
import { navigate } from '../../Navigators/Navigator';

interface IHistoryListProps {
    historyToRender: string;
}

interface IHistoryListState { }

const HistoryList = (props: IHistoryListProps) => {

    // const [state, setState] = useState<IHistoryListState>({});

    const renderHistoryItem = ({ item, index }: any) => {
        return (
            <Pressable key={index + 1} style={[styles.historyListItem, styles.shadowStyle]} onPress={() => { navigate("Details", { detailItem: item }) }}>

                <View style={{ marginTop: ResponsivePixels.size7 }}>
                    <Image style={{ width: ResponsivePixels.size40, height: ResponsivePixels.size40, resizeMode: "contain" }} source={item?.icon} />
                </View>

                <View style={{}}>
                    <Text style={{
                        color: Colors.DefaultWhite,
                        marginBottom: ResponsivePixels.size8,
                    }}>{item?.title}</Text>
                    <Text style={{
                        color: Colors.NeutralSilver
                    }}>{item?.subTitle}</Text>
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                    <Image style={{
                        width: ResponsivePixels.size16,
                        height: ResponsivePixels.size20,
                        resizeMode: 'contain',
                        marginBottom: ResponsivePixels.size8,
                    }} source={IMAGES.ic_Delete} />
                    <Text style={{ color: Colors.NeutralSilver }}>{item?.created_date}</Text>
                </View>
            </Pressable>
        )
    };

    const {
        historyToRender,
    } = props;
    console.log(historyToRender);
    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled
                data={historyToRender}
                renderItem={(item) => renderHistoryItem(item)}
                contentContainerStyle={styles.historyListWrapper}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                stickyHeaderHiddenOnScroll={true}
                invertStickyHeaders={true}
                numColumns={1}
                style={{
                    // paddingVertical: 20,
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
        marginTop: ResponsivePixels.size100
    },
    historyListWrapper: {
        flexDirection: "row",
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        paddingBottom: 150,
    },
    historyListItem: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
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