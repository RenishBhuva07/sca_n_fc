import { Platform } from "react-native";

export const FontName = {
  bold: Platform.OS == "ios" ? "PlusJakartaSans-Bold" : "PlusJakartaSans-Bold",
  semibold: Platform.OS == "ios" ? "PlusJakartaSans-SemiBold" : "PlusJakartaSans-SemiBold",
  medium: Platform.OS == "ios" ? "PlusJakartaSans-Medium" : "PlusJakartaSans-Medium",
  regular: Platform.OS == "ios" ? "PlusJakartaSans-Regular" : "PlusJakartaSans-Regular",
  book: Platform.OS == "ios" ? "PlusJakartaSans-Regular" : "PlusJakartaSans-Regular",
};