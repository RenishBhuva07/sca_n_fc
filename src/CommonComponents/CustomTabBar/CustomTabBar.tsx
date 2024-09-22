import { StyleSheet, Text, View, } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';

interface ICustomTabBarProps { }

interface ICustomTabBarState { }

const CustomTabBar = (props: ICustomTabBarProps) => {

    const Tab = createMaterialTopTabNavigator();

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
            >
                <Tab.Screen name="Scan" component={ScanScreen} options={{
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
                                }}>Scan</Text>
                            </View>
                        )
                    },
                    tabBarShowIcon: false,
                }} />
                <Tab.Screen name="Create" component={CreateScreen} options={{
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
                                }}>Create</Text>
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
        borderRadius: 6,
        backgroundColor: Colors.CharcoalGray,
        position: 'absolute',
        right: 20,
        left: 20,
        borderWidth: 0, // Remove border
    },
});

export default CustomTabBar;