import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

export interface RNKeyboardAvoidingViewProps {
    isTabs?: boolean,
    header?: any,
    children: any
}

const RNKeyboardAvoidingView: React.FC<RNKeyboardAvoidingViewProps> = props => {
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={
                Platform.OS === 'ios' ? (props.isTabs ? -130 : 0) : 0
            }
            style={{ flex: 1 }}
            behavior={Platform.select({ android: undefined, ios: 'padding' })}>
            {props.children}
        </KeyboardAvoidingView>
    );
};

export default RNKeyboardAvoidingView;