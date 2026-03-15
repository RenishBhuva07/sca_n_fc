import React, { useState } from 'react';
import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    LayoutAnimation,
    Platform,
    UIManager,
} from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack } from '../../Navigators/Navigator';
import { FontName } from '../../Assets/Styles/FontName';
import * as Animatable from 'react-native-animatable';
import CustomHeader from '../../CommonComponents/CustomHeader/CustomHeader';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface IPrivacyPolicyProps {}

interface PolicySection {
    id: string;
    title: string;
    icon: string;
    content: string;
}

const POLICY_SECTIONS: PolicySection[] = [
    {
        id: 'info_collection',
        title: 'Information We Collect',
        icon: '📋',
        content:
            'We collect minimal information to provide you with the best scanning experience. This includes:\n\n• Camera access for QR code and barcode scanning\n• NFC permissions for tag reading and writing\n• Device information for app optimization\n• Scan history stored locally on your device\n\nWe do NOT collect personal identification information, location data, or any data from scanned content.',
    },
    {
        id: 'data_usage',
        title: 'How We Use Your Data',
        icon: '🔧',
        content:
            'Your data is used solely to enhance your app experience:\n\n• Scan history is stored locally on your device for your convenience\n• Device information helps us optimize performance across different devices\n• Vibration and beep preferences are saved to personalize your experience\n\nWe never sell, share, or transmit your personal data to third parties.',
    },
    {
        id: 'data_storage',
        title: 'Data Storage & Security',
        icon: '🔒',
        content:
            'Your privacy and security are our top priorities:\n\n• All scan data is stored locally on your device\n• No cloud storage or external servers are used for your scan data\n• We implement industry-standard security measures\n• Your data remains under your full control at all times\n\nYou can clear your scan history at any time from the app settings.',
    },
    {
        id: 'permissions',
        title: 'App Permissions',
        icon: '📱',
        content:
            'SCA N FC requires the following permissions:\n\n• Camera: Required for scanning QR codes and barcodes\n• NFC: Required for reading and writing NFC tags\n• Vibration: Optional, for haptic feedback on successful scans\n• Storage: For saving generated QR codes to your gallery\n\nAll permissions are requested only when needed and can be managed through your device settings.',
    },
    {
        id: 'third_party',
        title: 'Third-Party Services',
        icon: '🌐',
        content:
            'We may use select third-party services to improve the app:\n\n• Analytics: Anonymous usage statistics to improve app performance\n• Crash reporting: To identify and fix bugs quickly\n\nThese services collect anonymized, non-identifiable data only. No personal information is shared with any third party.',
    },
    {
        id: 'your_rights',
        title: 'Your Rights',
        icon: '⚖️',
        content:
            'As a user, you have the following rights:\n\n• Right to access your stored data\n• Right to delete all your scan history\n• Right to opt-out of optional data collection\n• Right to revoke app permissions at any time\n• Right to request information about data handling\n\nExercise these rights through the app settings or by contacting our support team.',
    },
    {
        id: 'updates',
        title: 'Policy Updates',
        icon: '🔄',
        content:
            'We may update this privacy policy from time to time:\n\n• You will be notified of any significant changes\n• Continued use of the app constitutes acceptance of updated terms\n• The latest version is always available within the app\n\nLast updated: March 2026',
    },
    {
        id: 'contact',
        title: 'Contact Us',
        icon: '📧',
        content:
            'If you have questions or concerns about our privacy policy:\n\n• Email: support@scanfc.app\n• In-app: Use the feedback option in Settings\n\nWe aim to respond to all privacy-related inquiries within 48 hours.',
    },
];

const PrivacyPolicy = (props: IPrivacyPolicyProps) => {
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

    const toggleSection = (sectionId: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpandedSections((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(sectionId)) {
                newSet.delete(sectionId);
            } else {
                newSet.add(sectionId);
            }
            return newSet;
        });
    };

    const renderSection = (section: PolicySection, index: number) => {
        const isExpanded = expandedSections.has(section.id);

        return (
            <Animatable.View
                key={section.id}
                animation={'fadeInUp'}
                duration={500}
                delay={200 + index * 80}
                easing={'ease-in-out'}
            >
                <TouchableOpacity
                    style={[
                        styles.sectionCard,
                        isExpanded && styles.sectionCardExpanded,
                    ]}
                    activeOpacity={0.8}
                    onPress={() => toggleSection(section.id)}
                >
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionIcon}>{section.icon}</Text>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        <Text style={styles.expandIcon}>
                            {isExpanded ? '▲' : '▼'}
                        </Text>
                    </View>
                    {isExpanded && (
                        <View style={styles.sectionContent}>
                            <View style={styles.divider} />
                            <Text style={styles.sectionText}>{section.content}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </Animatable.View>
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

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <Animatable.Text
                        animation={'fadeInUp'}
                        duration={600}
                        easing={'ease-in-out'}
                        style={styles.headerTitle}
                    >
                        Privacy Policy
                    </Animatable.Text>

                    {/* Intro Card */}
                    <Animatable.View
                        animation={'fadeInUp'}
                        duration={600}
                        delay={100}
                        easing={'ease-in-out'}
                        style={styles.introCard}
                    >
                        <Text style={styles.introIcon}>🛡️</Text>
                        <Text style={styles.introTitle}>Your Privacy Matters</Text>
                        <Text style={styles.introSubtitle}>
                            We are committed to protecting your privacy and ensuring the security of your data.
                            Tap on any section below to learn more.
                        </Text>
                    </Animatable.View>

                    {/* Policy Sections */}
                    {POLICY_SECTIONS.map((section, index) => renderSection(section, index))}

                    {/* Footer */}
                    <Animatable.View
                        animation={'fadeInUp'}
                        duration={500}
                        delay={900}
                        easing={'ease-in-out'}
                        style={styles.footer}
                    >
                        <Text style={styles.footerText}>
                            By using SCA N FC, you agree to this Privacy Policy.
                        </Text>
                        <Text style={styles.versionText}>Version 1.0.0 • March 2026</Text>
                    </Animatable.View>
                </ScrollView>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.CharcoalGrayOpacity,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: ResponsivePixels.size24,
        paddingBottom: ResponsivePixels.size40,
    },
    headerTitle: {
        color: Colors.DefaultYellow,
        marginBottom: ResponsivePixels.size16,
        marginTop: ResponsivePixels.size20,
        fontSize: ResponsivePixels.size26,
        fontFamily: FontName.bold,
    },
    introCard: {
        backgroundColor: Colors.CharcoalGray,
        borderRadius: 16,
        borderWidth: 0.2,
        borderBottomWidth: 3,
        borderTopColor: Colors.CharcoalGray,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
        borderBottomColor: Colors.DefaultYellow,
        paddingHorizontal: ResponsivePixels.size20,
        paddingVertical: ResponsivePixels.size24,
        alignItems: 'center',
        marginBottom: ResponsivePixels.size24,
        opacity: 0.92,
    },
    introIcon: {
        fontSize: ResponsivePixels.size50,
        marginBottom: ResponsivePixels.size10,
    },
    introTitle: {
        color: Colors.DefaultYellow,
        fontSize: ResponsivePixels.size20,
        fontFamily: FontName.bold,
        fontWeight: 'bold',
        marginBottom: ResponsivePixels.size8,
    },
    introSubtitle: {
        color: Colors.PaleSilver,
        fontSize: ResponsivePixels.size14,
        fontFamily: FontName.regular,
        textAlign: 'center',
        lineHeight: ResponsivePixels.size20,
    },
    sectionCard: {
        backgroundColor: Colors.CharcoalGray,
        borderRadius: 12,
        borderWidth: 0.2,
        borderBottomWidth: 2,
        borderTopColor: Colors.CharcoalGray,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
        borderBottomColor: Colors.LightCharcoalGray,
        paddingHorizontal: ResponsivePixels.size16,
        paddingVertical: ResponsivePixels.size14,
        marginBottom: ResponsivePixels.size12,
        opacity: 0.90,
    },
    sectionCardExpanded: {
        borderBottomColor: Colors.DefaultYellow,
        borderBottomWidth: 3,
        opacity: 0.95,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionIcon: {
        fontSize: ResponsivePixels.size22,
        marginRight: ResponsivePixels.size12,
    },
    sectionTitle: {
        flex: 1,
        color: Colors.GrayishSilver,
        fontSize: ResponsivePixels.size15,
        fontFamily: FontName.medium,
        fontWeight: 'bold',
    },
    expandIcon: {
        color: Colors.DefaultYellow,
        fontSize: ResponsivePixels.size12,
    },
    sectionContent: {
        marginTop: ResponsivePixels.size10,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.LightCharcoalGray,
        marginBottom: ResponsivePixels.size12,
    },
    sectionText: {
        color: Colors.PaleSilver,
        fontSize: ResponsivePixels.size13,
        fontFamily: FontName.regular,
        lineHeight: ResponsivePixels.size20,
    },
    footer: {
        alignItems: 'center',
        paddingVertical: ResponsivePixels.size24,
        marginTop: ResponsivePixels.size10,
    },
    footerText: {
        color: Colors.NeutralSilver,
        fontSize: ResponsivePixels.size13,
        fontFamily: FontName.regular,
        textAlign: 'center',
        marginBottom: ResponsivePixels.size6,
    },
    versionText: {
        color: Colors.SlateGray,
        fontSize: ResponsivePixels.size12,
        fontFamily: FontName.regular,
    },
});

export default PrivacyPolicy;
