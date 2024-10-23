import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { Colors } from '../../Assets/Styles/Colors';
import Dashboard from '../../Screens/Dashboard/Dashboard';
import { IMAGES } from '../../Assets/Images';
import History from '../../Screens/History/History';
import { connect } from 'react-redux';

interface IBottomTabProps {
    isScanMode: boolean;
}

interface IBottomTabState { }

const BottomTab = (props: IBottomTabProps) => {

    const Tab = createBottomTabNavigator(), { isScanMode } = props;

    const screenOptions = {
        tabBarStyle: {
            height: 80,
            backgroundColor: Colors.CharcoalGray,
            position: 'absolute',
            right: 20,
            left: 20,
            bottom: 25,
            borderRadius: 6,
            borderTopWidth: 0,
            ...styles.shadowStyle,
        },
        tabBarItemStyle: {
            // marginBottom: ResponsivePixels.size6,
        },
        // tabBarLabelStyle: {
        //     fontSize: ResponsivePixels.size14,
        //     fontFamily: FontName.semibold,
        // },
    };

    const tabScreenOptions = {
        headerShown: false,
        lazy: true,
    }

    return (
        <>
            <Tab.Navigator
                screenOptions={screenOptions}
                headerShown={false}
                tabBarOptions={{
                    activeTintColor: Colors.DefaultYellow,
                    inactiveTintColor: Colors.DefaultWhite,
                    keyboardHidesTabBar: true,
                    Animated
                }}
                initialRouteName={'Dashboard'}
            >
                <Tab.Screen name={isScanMode ? "Generate" : "Write"} component={Dashboard} options={{
                    ...tabScreenOptions,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image style={{
                                    width: ResponsivePixels.size30,
                                    height: ResponsivePixels.size30,
                                    tintColor: color,
                                    resizeMode: 'contain',
                                }} source={IMAGES.ic_Generate_QR} />
                                <Text style={{
                                    color: color,
                                    fontSize: ResponsivePixels.size18,
                                    borderBottomColor: focused ? Colors.DefaultYellow : 'transparent',
                                    borderBottomWidth: 7,
                                    paddingBottom: 7,
                                    width: 80,
                                    textAlign: 'center',
                                }}>{isScanMode ? "Generate" : "Write"}</Text>
                            </View>
                        );
                    },
                    tabBarIconStyle: {
                        marginBottom: -10,
                    },
                    // tabBarVisibilityAnimationConfig: {
                    //     hide: {
                    //         animation: 'spring',
                    //         config: {
                    //             bounciness: 8,
                    //             speed: 5,
                    //             delay: 200,
                    //             isInteraction: true,
                    //         }
                    //     },
                    //     show: {
                    //         animation: 'spring',
                    //         config: {
                    //             bounciness: 12,
                    //             speed: 6,
                    //             delay: 200,
                    //         }
                    //     }
                    // },
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                }} />
                <Tab.Screen name='Scan' component={Dashboard} options={{
                    ...tabScreenOptions,
                    tabBarButton: ({ children }) => (
                        <TouchableOpacity
                            style={{
                                top: -ResponsivePixels.size35,
                                justifyContent: 'center',
                                alignItems: 'center',
                                ...styles.shadowStyle,
                            }}
                        // onPress={{}}
                        >
                            <View style={{
                                width: ResponsivePixels.size70,
                                height: ResponsivePixels.size70,
                                backgroundColor: Colors.DefaultYellow,
                                borderRadius: 50,
                                ...styles.shadowStyle,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image style={{
                                    marginTop: ResponsivePixels.size5,
                                    width: ResponsivePixels.size45,
                                    height: ResponsivePixels.size45,
                                    resizeMode: 'contain',
                                }} source={IMAGES.ic_Scan_QR} />
                            </View>
                        </TouchableOpacity>
                    ),
                    tabBarHideOnKeyboard: true,
                }} />
                <Tab.Screen name='History' component={History} options={{
                    ...tabScreenOptions,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image style={{
                                    width: ResponsivePixels.size30,
                                    height: ResponsivePixels.size30,
                                    tintColor: color,
                                    resizeMode: 'contain',
                                }} source={IMAGES.ic_History} />
                                <Text style={{
                                    color: color,
                                    fontSize: ResponsivePixels.size18,
                                    borderBottomColor: focused ? Colors.DefaultYellow : 'transparent',
                                    borderBottomWidth: 7,
                                    paddingBottom: 7,
                                    width: 80,
                                    textAlign: 'center',
                                }}>History</Text>
                            </View>
                        );
                    },
                    tabBarIconStyle: {
                        marginBottom: -9,
                    },
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
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
});

// export default BottomTab;
const mapStateToProps = (state: any) => ({
    isScanMode: state.baseData?.isScanModeEnabled,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);