import React, { Component } from "react";
import { Text, Dimensions, BackHandler } from "react-native";
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";
import { View } from "native-base";
import { Colors } from "../../Assets/Styles/Colors";
import { FontName } from "../../Assets/Styles/FontName";
import ResponsivePixels from "../../Assets/Styles/ResponsivePixels";

export default class AlertDialog extends Component {
  override state = {};

  static dialogInstance;

  static show(config) {
    this.dialogInstance.showDialog(config);
  }

  static hide() {
    this.dialogInstance.hideDialog();
  }

  hideDialog = () => {
    this.setState({
      visible: false,
    });
  };

  override componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }
  override componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton() {
    return true;
  }
  showDialog(config) {
    this.setState({
      visible: true,
      title: config.title,
      message: config.message,
      positiveButton: config.positiveButton,
      negativeButton: config.negativeButton,
      cancelable: config.cancelable,
      children: config.extraView,
    });
  }

  override render() {
    let {
      visible,
      onDismiss,
      children,
      cancelable,
      title,
      message,
      positiveButton,
      negativeButton,
      onTouchOutside,
    } = { ...this.props, ...this.state };
    return (
      <Dialog
        visible={visible || false}
        containerStyle={{ borderRadius: 4 }}
        dialogStyle={{ margin: 24, borderRadius: 4 }}
        onTouchOutside={() => {
          if (cancelable) {
            this.hideDialog();
          }
          if (onTouchOutside) onTouchOutside();
        }}
        onDismiss={onDismiss}
        footer={
          negativeButton && positiveButton ? (
            <DialogFooter>
              {negativeButton ? (
                <DialogButton
                  text={negativeButton.title}
                  textStyle={styles.negativeTextStyle}
                  onPress={negativeButton.onPress}
                />
              ) : (
                <View />
              )}
              {positiveButton ? (
                <DialogButton
                  textStyle={styles.positiveTextStyle}
                  text={positiveButton.title}
                  onPress={() => {
                    positiveButton.onPress();
                  }}
                />
              ) : (
                <View />
              )}
            </DialogFooter>
          ) : positiveButton ? (
            <DialogFooter>
              {positiveButton ? (
                <DialogButton
                  textStyle={styles.positiveTextStyle}
                  text={positiveButton.title}
                  onPress={() => {
                    positiveButton.onPress();
                  }}
                />
              ) : (
                <View />
              )}
            </DialogFooter>
          ) : null
        }
        dialogTitle={
          title ? (
            <DialogTitle
              textStyle={styles.titleStyle}
              style={{ backgroundColor: "white", borderBottomWidth: 0 }}
              align="center"
              title={title}
            />
          ) : undefined
        }
      >
        <DialogContent
          style={{
            backgroundColor: "white",
            width: Dimensions.get("window").width - 80,
          }}
        >
          {message ? <Text style={styles.messageStyle}>{message}</Text> : null}
          {children}
        </DialogContent>
      </Dialog>
    );
  }
}

const styles = {
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#90111111",
  },
  textStyle: {
    color: "black",
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
  },
  optionWrapper: {
    backgroundColor: "white",
    borderRadius: 8,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    color: Colors.Defaultblack,
    marginBottom: 16,
    fontFamily: FontName.medium,
    fontSize: ResponsivePixels.size24,
  },
  messageStyle: {
    color: Colors.DarkGreyColor,
    fontFamily: FontName.regular,
    fontSize: ResponsivePixels.size19,
    lineHeight: 25,
  },
  dialog: {
    padding: 16,
    width: Dimensions.get("window").width - 80,
    backgroundColor: "white",
    borderRadius: 4,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnStyle: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  positiveTextStyle: {
    color: Colors.secondaryColor,
    fontFamily: FontName.medium,
    fontSize: ResponsivePixels.size17,
  },
  negativeTextStyle: {
    color: Colors.NormalGreyColor,
    fontFamily: FontName.medium,
    fontSize: ResponsivePixels.size17,
  },
};
