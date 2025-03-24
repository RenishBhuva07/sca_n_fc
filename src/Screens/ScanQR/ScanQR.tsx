import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import { showDangerToast, triggerVibration } from '../../Utils/Utils';
import { connect } from 'react-redux';
import { Camera } from 'react-native-camera-kit';
import { useIsFocused } from '@react-navigation/native';

interface IScanQRProps {
    isScanMode: boolean;
    getQRCodeDetails: () => void;

}

interface IScanQRState {
}

const ScanQR = (props: IScanQRProps) => {

    const [qrCode, setQRcode] = useState(''),
        [isQRRead, setIsQRRead] = useState(''),
        isFocusedOne = useIsFocused();
    let focusModeCamera = isFocusedOne === true ? 'on' : 'off';

    let handleCodeScan = (e: any) => {
        if (e && e.nativeEvent && e.nativeEvent.codeStringValue) {
            setQRcode(e.nativeEvent?.codeStringValue);
            if (qrCode && qrCode !== '' && !isQRRead) {
                getQRCodeDetails(qrCode);
            }
        } else {
            showDangerToast("Invalid QR Code");
        }
    }, getQRCodeDetails = (qrCode: string) => {
        console.log(qrCode);
        triggerVibration(1000);
    };

    const {
        isScanMode,
    } = props;

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Camera
                        style={{ flex: 1 }}
                        scanBarcode={isFocusedOne}
                        onReadCode={handleCodeScan}
                        focusMode={focusModeCamera}
                        showFrame={false}
                        laserColor={Colors.DefaultYellow}
                        frameColor={Colors.DefaultYellow}
                        // torchOnImage={IMAGES.FlashOn}
                        torchImageStyle={{ tintColor: Colors.DefaultRedColor }}
                        // torchOffImage={IMAGES.FlashOff}
                        hideControls={false}
                        offsetForScannerFrame={10}   //(default 30) optional, offset from left and right side of the screen
                        heightForScannerFrame={300}  //(default 200) optional, change height of the scanner frame
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
        flex: 1,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
});

const mapStateToProps = (state: any) => ({
    isScanMode: state.baseData?.isScanModeEnabled,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(ScanQR);