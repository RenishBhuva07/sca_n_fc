import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from "react-native-permissions";
import { Linking, Platform } from "react-native";
import AlertDialog from "../CommonComponents/AlertDialog/AlertDialog";

export default class PermissionUtils {
  static checkPermission = async (
    isIosOnly: any,
    permissionName: any,
    message: any,
    onSuccess: any,
    canAskForPermissionAgain: boolean = true,
    stringsReference: any
  ) => {
    // if (!await isInternetAvailable()) {
    //   return;
    // }
    if (isIosOnly) {
      onSuccess(true);
    }
    check(permissionName)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            onSuccess(false);
            break;
          case RESULTS.DENIED:
            if (canAskForPermissionAgain) {
              request(permissionName).then((result) => {
                PermissionUtils.checkPermission(
                  isIosOnly,
                  permissionName,
                  message,
                  onSuccess,
                  false,
                  stringsReference
                );
              });
            } else {
              AlertDialog.show({
                title: "Permission",
                message: message,
                positiveButton: {
                  title: "Settings",
                  onPress: async () => {
                    if (Platform.OS === "ios") {
                      await Linking.openURL("app-settings:");
                    } else {
                      await openSettings();
                    }
                    AlertDialog.hide();
                  },
                },
                negativeButton: {
                  title: "Cancel",
                  onPress: () => {
                    AlertDialog.hide();
                  },
                },
              });
              break;

            }
            break;
          case RESULTS.LIMITED:
            if (canAskForPermissionAgain) {
              request(permissionName).then((result) => {
                PermissionUtils.checkPermission(
                  isIosOnly,
                  permissionName,
                  message,
                  onSuccess,
                  false,
                  stringsReference
                );
              });
            } else {
              onSuccess(true);
            }
            break;
          case RESULTS.GRANTED:
            onSuccess(true);
            break;
          case RESULTS.BLOCKED:
            AlertDialog.show({
              title: "Permission",
              message: message,
              positiveButton: {
                title: "Settings",
                onPress: async () => {
                  if (Platform.OS === "ios") {
                    await Linking.openURL("app-settings");
                  } else {
                    await openSettings();
                  }
                  AlertDialog.hide();
                },
              },
              negativeButton: {
                title: "Cancel",
                onPress: () => {
                  AlertDialog.hide();
                },
              },
            });
            break;
        }
      })
      .catch((error) => {
        console.log('Permission error =>', error)
      });
  };

  static requestCameraAndGalleryPermission = (
    onPermission: any,
    stringsReference: any
  ) => {
    PermissionUtils.checkPermission(
      false,
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      stringsReference.storageEnablePermissionSettings,
      (onSuccess: any) => {
        if (onSuccess) {
          PermissionUtils.checkPermission(
            false,
            Platform.OS === "ios"
              ? PERMISSIONS.IOS.PHOTO_LIBRARY
              : PERMISSIONS.ANDROID.CAMERA,
            stringsReference.galleryEnablePermissionSettings,
            (onSuccess1: any) => {
              onPermission(onSuccess1);
            },
            true,
            stringsReference
          );
        }
      },
      true,
      stringsReference
    );
  };

  static requestContactListPermission = (
    onPermission: any,
    stringsReference: any
  ) => {
    PermissionUtils.checkPermission(
      false,
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.CONTACTS
        : PERMISSIONS.ANDROID.READ_CONTACTS,
      stringsReference.contactPermissionSettings,
      (onsuccess: any) => {
        onPermission(onsuccess);
      },
      true,
      stringsReference
    );
  };

  static requestStoragePermission = (
    onPermission: any,
    stringsReference: any
  ) => {
    PermissionUtils.checkPermission(
      false,
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.CONTACTS
        : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      stringsReference.storageEnablePermissionSettings,
      (onsuccess: any) => {
        onPermission(onsuccess);
      },
      true,
      stringsReference
    );
  };

  static checkPermissionNonMandatory = (
    isIosOnly: any,
    permissionName: any,
    msg: any,
    onSuccess: any,
    canAskForPermissionAgain: boolean = true
  ) => {
    isIosOnly ? onSuccess(true) : null;

    check(permissionName)
      .then((result) => {
        console.log("permission name", result);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              "This feature is not available (on this device / in this context)"
            );
            onSuccess(false);
            break;
          case RESULTS.DENIED:
            if (canAskForPermissionAgain) {
              request(permissionName).then((result) => {
                PermissionUtils.checkPermissionNonMandatory(
                  isIosOnly,
                  permissionName,
                  msg,
                  onSuccess,
                  false
                );
              });
            } else {
              onSuccess(false);
            }
            console.log(
              "The permission has not been requested / is denied but requestable"
            );
            break;
          case RESULTS.LIMITED:
            if (canAskForPermissionAgain) {
              request(permissionName).then((result) => {
                PermissionUtils.checkPermissionNonMandatory(
                  isIosOnly,
                  permissionName,
                  msg,
                  onSuccess,
                  false
                );
              });
            } else {
              onSuccess(true);
            }
            console.log("The permission is limited: some actions are possible");
            break;
          case RESULTS.GRANTED:
            onSuccess(true);
            console.log("The permission is granted");
            break;
          case RESULTS.BLOCKED:
            onSuccess(false);
            break;
        }
      })
      .catch((error) => { });
  };
}
