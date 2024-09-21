import { Image, ImageStyle, StyleProp, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../Assets/Styles/Colors";
import ResponsivePixels from "../../Assets/Styles/ResponsivePixels";

interface ICustomHeaderProps {
    numberOfFlexColumns: 1 | 2 | 3;
    leftColumn?: number | string;
    rightColumn?: number | string;
    handleRightColumnClick?: () => any;
    handleLeftColumnClick?: () => any;
    middleColumn?: string;
    rightColumnImageStyle?: StyleProp<ImageStyle>;
}
export const CustomHeader = (props: ICustomHeaderProps) => {
    const { numberOfFlexColumns, leftColumn, middleColumn, rightColumn, handleRightColumnClick, handleLeftColumnClick, rightColumnImageStyle } = props
    let CustomImageStyle = {
        height: 40,
        width: 40,
        ...rightColumnImageStyle,
    };
    return (
        <View style={styles.headerView}>
            {
                numberOfFlexColumns === 3 && (<View>
                    {
                        typeof (leftColumn) == "number" ?
                            (<TouchableOpacity onPress={() => handleLeftColumnClick ? handleLeftColumnClick() : null}>
                                <Image style={styles.imageView} source={leftColumn} />
                            </TouchableOpacity>)
                            :
                            (<View style={styles.imageView} />)
                    }
                    {middleColumn ? (<Text style={styles.title}>{middleColumn}</Text>) : (<View style={styles.title} />)}
                    {
                        rightColumn ?
                            (<TouchableOpacity onPress={() => handleRightColumnClick ? handleRightColumnClick() : null}>
                                <Image style={styles.imageView} source={rightColumn} />
                            </TouchableOpacity>)
                            :
                            (<View style={styles.imageView} />)
                    }
                </View>)
            }
            {
                numberOfFlexColumns === 2 && (<View>
                    {
                        typeof (leftColumn) === "number" ?
                            (<TouchableOpacity onPress={() => handleLeftColumnClick ? handleLeftColumnClick() : null}>
                                <Image style={styles.imageView} source={leftColumn} />
                            </TouchableOpacity>)
                            :
                            (<View>
                                <Text style={styles.title}>{leftColumn}</Text>
                            </View>)
                    }
                    {
                        typeof (rightColumn) === "number" ?
                            (<TouchableOpacity onPress={() => handleRightColumnClick ? handleRightColumnClick() : null}>
                                <Image style={CustomImageStyle} source={rightColumn} />
                            </TouchableOpacity>)
                            :
                            (<View>
                                <Text style={styles.title}>{rightColumn}</Text>
                            </View>)
                    }
                </View>)
            }
        </View>
    )
}

const styles = StyleSheet.create(({
    headerView: {
        paddingHorizontal: ResponsivePixels.size35,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.DefaultRedColor,
        opacity: 0.84,
    },
    imageView: {
        height: 40,
        width: 40,
        tintColor: Colors.DefaultWhite,
    },
    title: {
        fontSize: ResponsivePixels.size22,
        color: Colors.DefaultWhite,
        fontWeight: 'bold'
    }
}))