import React, { Component } from "react";
import { View, SafeAreaView, StatusBar, ImageBackground } from "react-native";
import RNKeyboardAvoidingView from "../RNKeyboardAvoidingView/RNKeyboardAvoidingView";
import { CustomHeader } from "../CustomHeader/CustomHeader";
import { isIos } from "../../Utils/Utils";
import ResponsivePixels from "../../Assets/Styles/ResponsivePixels";

export interface MainContainerProps {
  loading: boolean;
  header: any;
  isTabs: boolean;
  children: any;
  mainContainerBackgroundColor: any;
  bottomBarColor: any;
  topBarColor: any;
  backgroundImageHeight: any;
  backgroundImageColor: any;
  backgroundImage: any;
}

export interface IState {
  loadingPatch: boolean;
}

export class MainContainer extends Component<MainContainerProps, IState> {
  override render() {
    const { loading, header, isTabs, children, mainContainerBackgroundColor, backgroundImageHeight, backgroundImage, bottomBarColor, topBarColor, backgroundImageColor } =
      this.props;
    return (
      <RNKeyboardAvoidingView isTabs={isTabs ? isTabs : undefined}>
        {/* <ImageBackground source={this.props.backgroundImage ? this.props.backgroundImage : IMAGES.ic_bgCommanImg}
          resizeMode="cover"
          style={{
            flex: 1,
          }}
          imageStyle={{
            height: backgroundImageHeight ? backgroundImageHeight : ResponsivePixels.size260,
            backgroundColor: backgroundImageColor ? backgroundImageColor : "transparent"
          }}> */}
        {header ? (
          <>
            <SafeAreaView style={{ paddingTop: !isIos() ? ResponsivePixels.size20 : null, backgroundColor: topBarColor ? topBarColor : 'transparent', }}>
              <StatusBar barStyle={'dark-content'} backgroundColor={mainContainerBackgroundColor || 'transparent'} />
              <CustomHeader backgroundColor={"transparent"} {...header} />
            </SafeAreaView>
          </>
        ) : (
          <SafeAreaView style={{ backgroundColor: "transparent" }}>
            <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
          </SafeAreaView>)}
        <StatusBar barStyle={'dark-content'} translucent backgroundColor={mainContainerBackgroundColor || 'transparent'} />
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              // paddingHorizontal: ResponsivePixels.size10,
              // paddingVertical: ResponsivePixels.size15,
            }}
          >
            {children}
          </View>
        </SafeAreaView>
        {isIos() && <View style={{ backgroundColor: bottomBarColor ? bottomBarColor : 'transparent', width: '100%', }} />}
        {/* </ImageBackground> */}
      </RNKeyboardAvoidingView>
    );
  }
}

export default MainContainer;