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
    // let CustomImageStyle = {
    //     height: 40,
    //     width: 40,
    //     ...rightColumnImageStyle,
    //     padding: 10,
    // };
    return (
        <>
            {
                numberOfFlexColumns === 3 &&
                (<View style={styles.headerView}>
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
                numberOfFlexColumns === 2 &&
                (<View style={styles.headerView}>
                    {
                        typeof (leftColumn) === "number" ?
                            (<TouchableOpacity onPress={() => handleLeftColumnClick ? handleLeftColumnClick() : null}>
                                <Image style={styles.imageView} source={leftColumn} />
                            </TouchableOpacity>)
                            :
                            (<View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={styles.title}>{leftColumn}</Text>
                            </View>)
                    }
                    {
                        typeof (rightColumn) === "number" ?
                            (<TouchableOpacity style={rightColumnImageStyle} onPress={() => handleRightColumnClick ? handleRightColumnClick() : null}>
                                <Image style={styles.imageView} source={rightColumn} />
                            </TouchableOpacity>)
                            :
                            (<View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={styles.title}>{rightColumn}</Text>
                            </View>)
                    }
                </View>)
            }
        </>
    )
}

const styles = StyleSheet.create(({
    headerView: {
        paddingHorizontal: ResponsivePixels.size35,
        paddingTop: 55,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.CharcoalGray,
        opacity: 0.84,
    },
    imageView: {
        height: 30,
        width: 30,
        tintColor: Colors.DefaultYellow,
    },
    title: {
        fontSize: ResponsivePixels.size22,
        color: Colors.SoftSilver,
        fontWeight: 'bold'
    }
}))