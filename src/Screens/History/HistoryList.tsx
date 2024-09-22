import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image, } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { navigate } from '../../Navigators/Navigator';

interface IHistoryListProps {
    historyToRender: string;
}

interface IHistoryListState { }

const HistoryList = (props: IHistoryListProps) => {

    // const [state, setState] = useState<IHistoryListState>({});

    const renderProjects = ({ item, index }: any) => {
        console.error('renderProjects__', item);
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

    const {
        historyToRender,
    } = props;
    console.log(historyToRender);
    return (
        <View style={{ marginTop: ResponsivePixels.size100 }}>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <FlatList
                        scrollEnabled
                        data={historyToRender}
                        renderItem={(item) => renderProjects(item)}
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
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
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

export default HistoryList;