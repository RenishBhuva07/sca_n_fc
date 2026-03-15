import React, { useRef, useEffect } from 'react';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Share,
    Platform,
    Animated,
    Easing,
    Image,
} from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack } from '../../Navigators/Navigator';
import { FontName } from '../../Assets/Styles/FontName';
import * as Animatable from 'react-native-animatable';
import CustomHeader from '../../CommonComponents/CustomHeader/CustomHeader';
import { showToast } from '../../Utils/Utils';

interface IShareAppProps {}

interface ShareOption {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    action: () => void;
}

const APP_STORE_LINK = Platform.select({
    ios: 'https://apps.apple.com/app/sca-n-fc/id000000000',
    android: 'https://play.google.com/store/apps/details?id=com.scanfc',
    default: 'https://scanfc.app',
});

const SHARE_MESSAGE = `🔍 Check out SCA N FC — the ultimate QR Code & NFC scanner app!\n\nScan QR codes, generate custom codes, and read/write NFC tags all in one beautiful app.\n\nDownload now: ${APP_STORE_LINK}`;

const ShareApp = (props: IShareAppProps) => {
    const glowAnimation = useRef(new Animated.Value(0)).current;
    const floatAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Glow animation for the app icon
        Animated.loop(
            Animated.sequence([
                Animated.timing(glowAnimation, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: false,
                }),
                Animated.timing(glowAnimation, {
                    toValue: 0,
                    duration: 2000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: false,
                }),
            ])
        ).start();

        // Float animation for the app card
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatAnimation, {
                    toValue: -6,
                    duration: 2500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(floatAnimation, {
                    toValue: 0,
                    duration: 2500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const handleGeneralShare = async () => {
        try {
            await Share.share({
                message: SHARE_MESSAGE,
                title: 'Share SCA N FC',
            });
        } catch (error) {
            showToast('Could not share at this time', 2000, 'warning');
        }
    };

    const handleShareViaMessage = async () => {
        try {
            await Share.share({
                message: SHARE_MESSAGE,
            });
        } catch (error) {
            showToast('Could not share at this time', 2000, 'warning');
        }
    };

    const handleShareViaSocial = async () => {
        try {
            await Share.share({
                message: SHARE_MESSAGE,
                title: 'SCA N FC — QR & NFC Scanner',
            });
        } catch (error) {
            showToast('Could not share at this time', 2000, 'warning');
        }
    };

    const SHARE_OPTIONS: ShareOption[] = [
        {
            id: 'share_general',
            title: 'Share via...',
            subtitle: 'Choose any app to share',
            icon: '🚀',
            action: handleGeneralShare,
        },
        {
            id: 'share_message',
            title: 'Send to a Friend',
            subtitle: 'Share via message or email',
            icon: '💌',
            action: handleShareViaMessage,
        },
        {
            id: 'share_social',
            title: 'Share on Social Media',
            subtitle: 'Post to your favorite platform',
            icon: '📱',
            action: handleShareViaSocial,
        },
    ];

    const glowShadowOpacity = glowAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.2, 0.6],
    });

    const glowShadowRadius = glowAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [8, 20],
    });

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
            <ImageBackground
                source={IMAGES.bg_Background_Design}
                style={styles.background}
                resizeMode="cover"
            >
                <CustomHeader
                    numberOfFlexColumns={2}
                    leftColumn={IMAGES.ic_Back}
                    leftColumnImageStyle={{
                        paddingVertical: ResponsivePixels.size7,
                        paddingHorizontal: ResponsivePixels.size10,
                        backgroundColor: Colors.CharcoalGray,
                        borderRadius: 6,
                        resizeMode: 'contain',
                    }}
                    customHeaderBackgroundColor={'transparent'}
                    handleLeftColumnClick={() => goBack()}
                    imageStyles={{
                        height: 20,
                        width: 12,
                    }}
                />

                <View style={styles.container}>
                    <Animatable.Text
                        animation={'fadeInUp'}
                        duration={600}
                        easing={'ease-in-out'}
                        style={styles.headerTitle}
                    >
                        Share App
                    </Animatable.Text>

                    {/* App Preview Card */}
                    <Animatable.View
                        animation={'fadeInUp'}
                        duration={700}
                        delay={200}
                        easing={'ease-in-out'}
                    >
                        <Animated.View
                            style={[
                                styles.appCard,
                                { transform: [{ translateY: floatAnimation }] },
                            ]}
                        >
                            <Animated.View
                                style={[
                                    styles.appIconContainer,
                                    {
                                        shadowOpacity: glowShadowOpacity,
                                        shadowRadius: glowShadowRadius,
                                    },
                                ]}
                            >
                                <Image
                                    source={IMAGES.ic_SplashLogo}
                                    style={styles.appIcon}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                            <Text style={styles.appName}>SCA N FC</Text>
                            <Text style={styles.appTagline}>
                                QR Code & NFC Scanner
                            </Text>
                            <View style={styles.featureBadgesContainer}>
                                <View style={styles.featureBadge}>
                                    <Text style={styles.featureBadgeText}>📷 QR Scan</Text>
                                </View>
                                <View style={styles.featureBadge}>
                                    <Text style={styles.featureBadgeText}>📲 NFC</Text>
                                </View>
                                <View style={styles.featureBadge}>
                                    <Text style={styles.featureBadgeText}>⚡ Fast</Text>
                                </View>
                            </View>
                        </Animated.View>
                    </Animatable.View>

                    {/* Share Message */}
                    <Animatable.Text
                        animation={'fadeInUp'}
                        duration={600}
                        delay={300}
                        easing={'ease-in-out'}
                        style={styles.shareMessage}
                    >
                        Spread the word and help others discover the best scanning experience!
                    </Animatable.Text>

                    {/* Share Options */}
                    {SHARE_OPTIONS.map((option, index) => (
                        <Animatable.View
                            key={option.id}
                            animation={'fadeInUp'}
                            duration={500}
                            delay={400 + index * 120}
                            easing={'ease-in-out'}
                        >
                            <TouchableOpacity
                                style={styles.shareOptionCard}
                                activeOpacity={0.7}
                                onPress={option.action}
                            >
                                <Text style={styles.shareOptionIcon}>{option.icon}</Text>
                                <View style={styles.shareOptionContent}>
                                    <Text style={styles.shareOptionTitle}>{option.title}</Text>
                                    <Text style={styles.shareOptionSubtitle}>
                                        {option.subtitle}
                                    </Text>
                                </View>
                                <Text style={styles.shareArrow}>›</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    ))}

                    {/* Footer */}
                    <Animatable.View
                        animation={'fadeIn'}
                        duration={800}
                        delay={800}
                        style={styles.footer}
                    >
                        <Text style={styles.footerText}>
                            Thank you for sharing! 💛
                        </Text>
                    </Animatable.View>
                </View>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.CharcoalGrayOpacity,
    },
    container: {
        flex: 1,
        marginHorizontal: ResponsivePixels.size24,
    },
    headerTitle: {
        color: Colors.DefaultYellow,
        marginBottom: ResponsivePixels.size16,
        marginTop: ResponsivePixels.size20,
        fontSize: ResponsivePixels.size26,
        fontFamily: FontName.bold,
    },
    appCard: {
        backgroundColor: Colors.CharcoalGray,
        borderRadius: 20,
        borderWidth: 0.2,
        borderBottomWidth: 3,
        borderTopColor: Colors.CharcoalGray,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
        borderBottomColor: Colors.DefaultYellow,
        paddingVertical: ResponsivePixels.size28,
        paddingHorizontal: ResponsivePixels.size24,
        alignItems: 'center',
        opacity: 0.92,
    },
    appIconContainer: {
        width: ResponsivePixels.size80,
        height: ResponsivePixels.size80,
        borderRadius: 20,
        backgroundColor: Colors.Graphite,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: ResponsivePixels.size14,
        shadowColor: Colors.DefaultYellow,
        shadowOffset: { width: 0, height: 0 },
        elevation: 8,
    },
    appIcon: {
        width: ResponsivePixels.size55,
        height: ResponsivePixels.size55,
    },
    appName: {
        color: Colors.DefaultYellow,
        fontSize: ResponsivePixels.size24,
        fontFamily: FontName.bold,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginBottom: ResponsivePixels.size4,
    },
    appTagline: {
        color: Colors.PaleSilver,
        fontSize: ResponsivePixels.size14,
        fontFamily: FontName.regular,
        marginBottom: ResponsivePixels.size16,
    },
    featureBadgesContainer: {
        flexDirection: 'row',
        gap: ResponsivePixels.size8,
    },
    featureBadge: {
        backgroundColor: Colors.LightCharcoalGray,
        borderRadius: 20,
        paddingHorizontal: ResponsivePixels.size12,
        paddingVertical: ResponsivePixels.size6,
    },
    featureBadgeText: {
        color: Colors.SoftSilver,
        fontSize: ResponsivePixels.size12,
        fontFamily: FontName.medium,
    },
    shareMessage: {
        color: Colors.PaleSilver,
        fontSize: ResponsivePixels.size14,
        fontFamily: FontName.regular,
        textAlign: 'center',
        lineHeight: ResponsivePixels.size20,
        marginVertical: ResponsivePixels.size20,
    },
    shareOptionCard: {
        backgroundColor: Colors.CharcoalGray,
        borderRadius: 12,
        borderWidth: 0.2,
        borderBottomWidth: 2,
        borderTopColor: Colors.CharcoalGray,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
        borderBottomColor: Colors.LightCharcoalGray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: ResponsivePixels.size16,
        paddingVertical: ResponsivePixels.size15,
        marginBottom: ResponsivePixels.size12,
        opacity: 0.90,
    },
    shareOptionIcon: {
        fontSize: ResponsivePixels.size28,
        marginRight: ResponsivePixels.size14,
    },
    shareOptionContent: {
        flex: 1,
    },
    shareOptionTitle: {
        color: Colors.GrayishSilver,
        fontSize: ResponsivePixels.size15,
        fontFamily: FontName.medium,
        fontWeight: 'bold',
        marginBottom: ResponsivePixels.size2,
    },
    shareOptionSubtitle: {
        color: Colors.NeutralSilver,
        fontSize: ResponsivePixels.size12,
        fontFamily: FontName.regular,
    },
    shareArrow: {
        color: Colors.DefaultYellow,
        fontSize: ResponsivePixels.size24,
        fontFamily: FontName.bold,
    },
    footer: {
        alignItems: 'center',
        marginTop: ResponsivePixels.size20,
    },
    footerText: {
        color: Colors.NeutralSilver,
        fontSize: ResponsivePixels.size14,
        fontFamily: FontName.regular,
    },
});

export default ShareApp;
