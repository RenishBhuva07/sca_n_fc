import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, } from 'react-native';
import MainContainer from '../../CommonComponents/MainContainer/MainContainer';
import { Colors } from '../../Assets/Styles/Colors';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { navigate } from '../../Navigators/Navigator';

interface IDashboardProps { }

interface IDashboardState {
    projectData: Array<any>;
}

const Dashboard = (props: IDashboardProps) => {

    const [state, setState] = useState<IDashboardState>({
        projectData: [
            {
                project_name: "Parth",
            },
            {
                project_name: "project_two",
            },
            {
                project_name: "project_three",
            },
            {
                project_name: "project_four",
            },
            {
                project_name: "project_five",
            },
            {
                project_name: "project_six",
            },
            {
                project_name: "project_seven",
            },
            {
                project_name: "project_eight",
            },
            {
                project_name: "project_nine",
            },
            {
                project_name: "project_ten",
            },
            {
                project_name: "project_eleven",
            },
            {
                project_name: "project_twelve",
            },
            {
                project_name: "project_thirteen",
            },
            {
                project_name: "project_foruteen",
            },
            {
                project_name: "project_fifteen",
            },
            {
                project_name: "project_sixteen",
            },
            {
                project_name: "project_seventeen",
            },
            {
                project_name: "project_eighteen",
            },
            {
                project_name: "project_ninteen",
            },
            {
                project_name: "project_twenty",
            },
            {
                project_name: "project_twentyone",
            },
            {
                project_name: "project_twentytwo",
            },
        ],
    });

    useEffect(() => {
    }, []);

    const renderProjects = ({ item, index }: any) => {
        console.error("item__---====>>>", item, index);
        return (
            <Pressable key={index + 1} style={styles.projectListItem} onPress={() => navigate("Details", { name: item?.project_name })}>
                <Text style={styles.projectListItemText}>{item?.project_name}</Text>
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
        <MainContainer
            bottomBarColor={Colors.RoyalPurple}
            mainContainerBackgroundColor={Colors.RoyalPurple}
            header={{
                title: "Projects",
                titleColor: Colors.DefaultWhite,
                left: {
                    // image: IMAGES.ic_BackBlackIcon,
                    // color: Colors.DefaultWhite,
                    // onPress: () => goBack(),
                },
            }}
        // backgroundImage={IMAGES.ic_MainImg}
        // backgroundImageHeight={280}
        >
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <FlatList
                        scrollEnabled
                        data={state.projectData}
                        renderItem={(item) => renderProjects(item)}
                        keyExtractor={(item) => item.cca3}
                        contentContainerStyle={styles.projectList}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}

                        stickyHeaderHiddenOnScroll={true}
                        StickyHeaderComponent={() => renderStickyHeaderComponent()}
                        invertStickyHeaders={true}
                        style={{
                            paddingVertical: 20,
                        }}
                    />
                </View>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.RoyalPurple,
    },
    container: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        backgroundColor: Colors.DefaultWhite,
        // paddingBottom: 20
    },
    projectList: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
    },
    projectListItem: {
        backgroundColor: Colors.BlushPink,
        marginHorizontal: 10,
        minWidth: '45%',
        paddingHorizontal: ResponsivePixels.size10,
        paddingVertical: ResponsivePixels.size25,
        marginVertical: ResponsivePixels.size5,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.RoyalPurple
    },
    projectListItemText: {
        textAlign: 'center',
        color: Colors.DefaultWhite,
        fontSize: ResponsivePixels.size16,
    }
});

export default Dashboard;