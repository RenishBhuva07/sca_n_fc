import { StyleSheet, Text, View, } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { Component } from 'react';

interface ICustomTabBarProps {
    leftTabTitle: string;
    rightTabTitle: string;
    leftTabScreen: () => Component<{}, {}, any>;
    rightTabScreen: () => Component<{}, {}, any>;
}

interface ICustomTabBarState { }

const CustomTabBar = (props: ICustomTabBarProps) => {

    const Tab = createMaterialTopTabNavigator();

    const {
        leftTabTitle,
        rightTabTitle,
        leftTabScreen,
        rightTabScreen,
    } = props;

    function ScanScreen() {
        return (
            <View style={styles.container}>
                <Text>Scan Screen</Text>
            </View>
        );
    }

    function CreateScreen() {
        return (
            <View style={styles.container}>
                <Text>Create Screen</Text>
            </View>
        );
    }
    const tabScreenOptions = {
        headerShown: false,
        lazy: true,
    }

    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => null, // No icons, just text
                    tabBarStyle: {
                        ...styles.tabBarStyle,
                    },
                    tabBarLabelStyle: { fontSize: 20 },
                    tabBarContentContainerStyle: {
                        // backgroundColor: Colors.CharcoalGray,
                    }
                })}
                tabBarOptions={{
                    activeTintColor: Colors.DefaultYellow,
                    inactiveTintColor: 'transparent',
                    indicatorStyle: {
                        backgroundColor: 'transparent', // This will remove the underline
                    },
                }}
                initialRouteName="Scan"
                tabBarPosition="top"
                sceneContainerStyle={{ backgroundColor: Colors.CharcoalGray, opacity: 0.84 }}
            >
                <Tab.Screen name={leftTabTitle} component={leftTabScreen} options={{
                    ...tabScreenOptions,
                    tabBarShowLabel: true,
                    tabBarAndroidRipple: {
                        color: "transparent",
                    },
                    tabBarLabel: ({ focused, color, size }) => {
                        return (
                            <View style={{
                                backgroundColor: color,
                                paddingVertical: ResponsivePixels.size10,
                                width: ResponsivePixels.size150,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 6,
                            }}>
                                <Text style={{
                                    color: focused ? Colors.DefaultWhite : Colors.SoftSilver,
                                    fontSize: ResponsivePixels.size20,
                                    fontWeight: "bold",
                                }}>{leftTabTitle}</Text>
                            </View>
                        )
                    },
                    tabBarShowIcon: false,
                }} />
                <Tab.Screen name={rightTabTitle} component={rightTabScreen} options={{
                    ...tabScreenOptions,
                    tabBarShowLabel: true,
                    tabBarAndroidRipple: {
                        color: "transparent",
                    },
                    swipeEnabled: true,
                    tabBarLabel: ({ focused, color, size }) => {
                        return (
                            <View style={{
                                backgroundColor: color,
                                paddingVertical: ResponsivePixels.size10,
                                width: ResponsivePixels.size150,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 6,
                            }}>
                                <Text style={{
                                    color: focused ? Colors.DefaultWhite : Colors.SoftSilver,
                                    fontSize: ResponsivePixels.size20,
                                    fontWeight: "bold",
                                }}>{rightTabTitle}</Text>
                            </View>
                        )
                    },
                    tabBarShowIcon: false,
                }} />
            </Tab.Navigator>
        </>
    );
};

const styles = StyleSheet.create({
    shadowStyle: {
        shadowColor: Colors.DefaultYellow,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: Colors.CharcoalGray,
        position: 'absolute',
        right: 20,
        left: 20,
        borderRadius: 6,
        borderWidth: 0, // Remove border
        marginVertical: ResponsivePixels.size15,
    },
});

export default CustomTabBar;