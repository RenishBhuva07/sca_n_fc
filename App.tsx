/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { LogBox, View } from 'react-native';
import { Colors } from './src/Assets/Styles/Colors';
import { navigationRef } from './src/Navigators/Navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeBaseProvider } from "native-base";
import { MenuProvider } from "react-native-popup-menu";
import AlertDialog from './src/CommonComponents/AlertDialog/AlertDialog';
import { NavigationContainer } from "@react-navigation/native";
import CoreAppStack from './src/Navigators/CoreAppStack';
import { Provider } from 'react-redux';
import ConfigureStore from './src/Redux/ConfigureStore';
export const store = ConfigureStore();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, [])


  return (
    <View
      style={{ flex: 1 }}
      collapsable={false}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NativeBaseProvider>
          <Provider store={store}>
            <MenuProvider
              customStyles={{
                menuProviderWrapper: { flex: 1 },
                backdrop: { backgroundColor: Colors.defaultRedColor },
              }}
            >
              <AlertDialog
                ref={(c: any) => {
                  if (c) AlertDialog.dialogInstance = c;
                }}
              />
              <NavigationContainer ref={navigationRef}>
                {/* <Spinner visible={false} overlayColor={"rgba(0, 0, 0, 0.25)"} /> */}
                <CoreAppStack />
              </NavigationContainer>
            </MenuProvider>
          </Provider>
        </NativeBaseProvider>
      </GestureHandlerRootView>
    </View>
  );
}

export default App;
