import React, { useState, useRef, useEffect } from 'react';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
    Easing,
} from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack } from '../../Navigators/Navigator';
import { FontName } from '../../Assets/Styles/FontName';
import * as Animatable from 'react-native-animatable';
import CustomHeader from '../../CommonComponents/CustomHeader/CustomHeader';
import { showToast } from '../../Utils/Utils';

interface IRateUsProps {}

const STAR_LABELS = ['Terrible', 'Bad', 'Okay', 'Good', 'Amazing!'];
const STAR_EMOJIS = ['😞', '😕', '😐', '😊', '🤩'];
const STAR_COLORS = ['#E74C3C', '#E67E22', '#F1C40F', '#2ECC71', '#FDB623'];

const RateUs = (props: IRateUsProps) => {
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const starAnimations = useRef([...Array(5)].map(() => new Animated.Value(1))).current;
    const emojiScale = useRef(new Animated.Value(0)).current;
    const submitButtonOpacity = useRef(new Animated.Value(0)).current;
    const thankYouScale = useRef(new Animated.Value(0)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Start a subtle pulse animation on the star container
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.03,
                    duration: 1500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const handleStarPress = (rating: number) => {
        if (isSubmitted) return;
        setSelectedRating(rating);

        // Animate the pressed star with a bounce
        Animated.sequence([
            Animated.timing(starAnimations[rating - 1], {
                toValue: 1.4,
                duration: 150,
                easing: Easing.out(Easing.back(4)),
                useNativeDriver: true,
            }),
            Animated.timing(starAnimations[rating - 1], {
                toValue: 1,
                duration: 200,
                easing: Easing.out(Easing.bounce),
                useNativeDriver: true,
            }),
        ]).start();

        // Animate emoji appearance
        Animated.spring(emojiScale, {
            toValue: 1,
            friction: 5,
            tension: 80,
            useNativeDriver: true,
        }).start();

        // Show submit button
        Animated.timing(submitButtonOpacity, {
            toValue: 1,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start();
    };

    const handleSubmit = () => {
        if (selectedRating === 0) return;

        setIsSubmitted(true);

        // Animate thank you message
        Animated.spring(thankYouScale, {
            toValue: 1,
            friction: 5,
            tension: 60,
            useNativeDriver: true,
        }).start();

        showToast('Thank you for your feedback! ⭐', 2500);
    };

    const renderStar = (index: number) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= selectedRating;

        return (
            <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => handleStarPress(starNumber)}
                disabled={isSubmitted}
            >
                <Animated.Text
                    style={[
                        styles.starText,
                        {
                            transform: [{ scale: starAnimations[index] }],
                            color: isFilled
                                ? (STAR_COLORS[selectedRating - 1] || Colors.DefaultYellow)
                                : Colors.CharcoalGrayOpacity,
                        },
                    ]}
                >
                    ★
                </Animated.Text>
            </TouchableOpacity>
        );
    };

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
                        Rate Us
                    </Animatable.Text>

                    {!isSubmitted ? (
                        <>
                            {/* Rate Us Card */}
                            <Animatable.View
                                animation={'fadeInUp'}
                                duration={600}
                                delay={200}
                                easing={'ease-in-out'}
                                style={styles.rateCard}
                            >
                                {/* Emoji Feedback */}
                                <View style={styles.emojiContainer}>
                                    {selectedRating > 0 ? (
                                        <Animated.Text
                                            style={[
                                                styles.emojiText,
                                                { transform: [{ scale: emojiScale }] },
                                            ]}
                                        >
                                            {STAR_EMOJIS[selectedRating - 1]}
                                        </Animated.Text>
                                    ) : (
                                        <Text style={styles.emojiText}>⭐</Text>
                                    )}
                                </View>

                                <Text style={styles.cardTitle}>
                                    How would you rate{'\n'}your experience?
                                </Text>
                                <Text style={styles.cardSubtitle}>
                                    Your feedback helps us improve and serve you better.
                                </Text>

                                {/* Stars Row */}
                                <Animated.View
                                    style={[
                                        styles.starsContainer,
                                        { transform: [{ scale: pulseAnim }] },
                                    ]}
                                >
                                    {[0, 1, 2, 3, 4].map(renderStar)}
                                </Animated.View>

                                {/* Rating Label */}
                                {selectedRating > 0 && (
                                    <Animatable.Text
                                        animation={'fadeIn'}
                                        duration={300}
                                        style={[
                                            styles.ratingLabel,
                                            { color: STAR_COLORS[selectedRating - 1] },
                                        ]}
                                    >
                                        {STAR_LABELS[selectedRating - 1]}
                                    </Animatable.Text>
                                )}
                            </Animatable.View>

                            {/* Submit Button */}
                            <Animated.View style={{ opacity: submitButtonOpacity }}>
                                <Animatable.View
                                    animation={selectedRating > 0 ? 'fadeInUp' : undefined}
                                    duration={400}
                                    delay={100}
                                >
                                    <TouchableOpacity
                                        style={[
                                            styles.submitButton,
                                            selectedRating === 0 && styles.submitButtonDisabled,
                                        ]}
                                        activeOpacity={0.8}
                                        onPress={handleSubmit}
                                        disabled={selectedRating === 0}
                                    >
                                        <Text style={styles.submitButtonText}>Submit Rating</Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            </Animated.View>

                            {/* Skip Text */}
                            <Animatable.View
                                animation={'fadeInUp'}
                                duration={600}
                                delay={400}
                                easing={'ease-in-out'}
                            >
                                <TouchableOpacity
                                    onPress={() => goBack()}
                                    activeOpacity={0.6}
                                >
                                    <Text style={styles.skipText}>Maybe later</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </>
                    ) : (
                        /* Thank You State */
                        <Animated.View
                            style={[
                                styles.thankYouContainer,
                                { transform: [{ scale: thankYouScale }] },
                            ]}
                        >
                            <Animatable.View
                                animation={'bounceIn'}
                                duration={800}
                                style={styles.thankYouCard}
                            >
                                <Text style={styles.thankYouEmoji}>🎉</Text>
                                <Text style={styles.thankYouTitle}>Thank You!</Text>
                                <Text style={styles.thankYouSubtitle}>
                                    Your {selectedRating}-star rating means a lot to us.{'\n'}
                                    We appreciate your feedback!
                                </Text>
                                <View style={styles.thankYouStars}>
                                    {[...Array(selectedRating)].map((_, i) => (
                                        <Animatable.Text
                                            key={i}
                                            animation={'bounceIn'}
                                            delay={200 + i * 100}
                                            style={[
                                                styles.thankYouStar,
                                                { color: Colors.DefaultYellow },
                                            ]}
                                        >
                                            ★
                                        </Animatable.Text>
                                    ))}
                                </View>
                                <TouchableOpacity
                                    style={styles.doneButton}
                                    activeOpacity={0.8}
                                    onPress={() => goBack()}
                                >
                                    <Text style={styles.doneButtonText}>Done</Text>
                                </TouchableOpacity>
                            </Animatable.View>
                        </Animated.View>
                    )}
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
        marginBottom: ResponsivePixels.size20,
        marginTop: ResponsivePixels.size20,
        fontSize: ResponsivePixels.size26,
        fontFamily: FontName.bold,
    },
    rateCard: {
        backgroundColor: Colors.CharcoalGray,
        borderRadius: 16,
        borderWidth: 0.2,
        borderBottomWidth: 3,
        borderTopColor: Colors.CharcoalGray,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
        borderBottomColor: Colors.DefaultYellow,
        paddingHorizontal: ResponsivePixels.size24,
        paddingVertical: ResponsivePixels.size30,
        alignItems: 'center',
        opacity: 0.92,
    },
    emojiContainer: {
        marginBottom: ResponsivePixels.size16,
    },
    emojiText: {
        fontSize: ResponsivePixels.size60,
    },
    cardTitle: {
        color: Colors.GrayishSilver,
        fontSize: ResponsivePixels.size20,
        fontFamily: FontName.bold,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: ResponsivePixels.size8,
        lineHeight: ResponsivePixels.size28,
    },
    cardSubtitle: {
        color: Colors.PaleSilver,
        fontSize: ResponsivePixels.size14,
        fontFamily: FontName.regular,
        textAlign: 'center',
        marginBottom: ResponsivePixels.size24,
        lineHeight: ResponsivePixels.size20,
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: ResponsivePixels.size8,
        marginBottom: ResponsivePixels.size12,
    },
    starText: {
        fontSize: ResponsivePixels.size42,
        textShadowColor: 'rgba(253, 182, 35, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
    },
    ratingLabel: {
        fontSize: ResponsivePixels.size18,
        fontFamily: FontName.bold,
        fontWeight: 'bold',
        marginTop: ResponsivePixels.size4,
    },
    submitButton: {
        backgroundColor: Colors.DefaultYellow,
        borderRadius: 12,
        paddingVertical: ResponsivePixels.size16,
        alignItems: 'center',
        marginTop: ResponsivePixels.size24,
        shadowColor: Colors.DefaultYellow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    submitButtonDisabled: {
        opacity: 0.4,
    },
    submitButtonText: {
        color: Colors.Defaultblack,
        fontSize: ResponsivePixels.size16,
        fontFamily: FontName.bold,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    skipText: {
        color: Colors.NeutralSilver,
        fontSize: ResponsivePixels.size14,
        fontFamily: FontName.regular,
        textAlign: 'center',
        marginTop: ResponsivePixels.size20,
        textDecorationLine: 'underline',
    },
    thankYouContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thankYouCard: {
        backgroundColor: Colors.CharcoalGray,
        borderRadius: 20,
        borderWidth: 0.2,
        borderBottomWidth: 3,
        borderTopColor: Colors.CharcoalGray,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
        borderBottomColor: Colors.DefaultYellow,
        paddingHorizontal: ResponsivePixels.size30,
        paddingVertical: ResponsivePixels.size40,
        alignItems: 'center',
        width: '100%',
        opacity: 0.92,
    },
    thankYouEmoji: {
        fontSize: ResponsivePixels.size70,
        marginBottom: ResponsivePixels.size16,
    },
    thankYouTitle: {
        color: Colors.DefaultYellow,
        fontSize: ResponsivePixels.size28,
        fontFamily: FontName.bold,
        fontWeight: 'bold',
        marginBottom: ResponsivePixels.size10,
    },
    thankYouSubtitle: {
        color: Colors.PaleSilver,
        fontSize: ResponsivePixels.size15,
        fontFamily: FontName.regular,
        textAlign: 'center',
        lineHeight: ResponsivePixels.size22,
        marginBottom: ResponsivePixels.size20,
    },
    thankYouStars: {
        flexDirection: 'row',
        gap: ResponsivePixels.size6,
        marginBottom: ResponsivePixels.size24,
    },
    thankYouStar: {
        fontSize: ResponsivePixels.size30,
    },
    doneButton: {
        backgroundColor: Colors.DefaultYellow,
        borderRadius: 12,
        paddingVertical: ResponsivePixels.size14,
        paddingHorizontal: ResponsivePixels.size50,
        shadowColor: Colors.DefaultYellow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    doneButtonText: {
        color: Colors.Defaultblack,
        fontSize: ResponsivePixels.size16,
        fontFamily: FontName.bold,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});

export default RateUs;
