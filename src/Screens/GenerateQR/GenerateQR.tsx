import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import ResponsivePixels from '../../Assets/Styles/ResponsivePixels';
import { goBack, navigate } from '../../Navigators/Navigator';
import { QR_TYPE } from '../../Utils/AppConstants';
import { isEmpty, showDangerToast, triggerVibration } from '../../Utils/Utils';
import * as Animatable from "react-native-animatable";
import { setQRListInfo } from '../../Redux/Actions/Actions';
import { connect } from 'react-redux';

interface IGenerateQRProps {
    qr_menu_item: any;
    route: any;
    qrHistoryProps: any;
}

interface IGenerateQRState {
    qrMenuItem: any;
}

const GenerateQR = (props: IGenerateQRProps) => {

    const [state, setState] = useState<IGenerateQRState>({ qrMenuItem: {}, }),
        [textt, setTextt] = useState<string>(""),
        [websitee, setWebsitee] = useState<string>(""),
        [network, setNetwork] = useState<string>(""),
        [password, setPassword] = useState<string>(""),
        [eventName, setEventName] = useState<string>(""),
        [startDate, setStartDate] = useState<string>(""),
        [endDate, setEndDate] = useState<string>(""),
        [location, setLocation] = useState<string>(""),
        [description, setDescription] = useState<string>(""),
        [firstName, setFirstName] = useState<string>(""),
        [lastName, setLastName] = useState<string>(""),
        [company, setCompany] = useState<string>(""),
        [jobTitle, setJobTitle] = useState<string>(""),
        [phoneNumber, setPhoneNumber] = useState<string>(""),
        [email, setEmail] = useState<string>(""),
        [address, setAddress] = useState<string>(""),
        [city, setCity] = useState<string>(""),
        [country, setCountry] = useState<string>(""),
        [industry, setIndustry] = useState<string>(""),
        [userName, setUserName] = useState<string>(""),
        [dynamicIcon, setDynamicIcon] = useState<string>(""),
        [qrHistoryRedux, setQrHistoryRedux] = useState<any[]>([]),
        [newQrHistory, setNewQrHistory] = useState<any>({});

    let screenHeight = Dimensions.get("window").height;

    const {
        qr_menu_item,
    } = props?.route?.params;

    useEffect(() => {
        console.warn("qrHistoryProps_______", props.qrHistoryProps);
        setState({ qrMenuItem: qr_menu_item });
        setQrHistoryRedux(props.qrHistoryProps);
        justifyIconDynamically(qr_menu_item.qr_type);
    }, []);

    const justifyIconDynamically = (qr_typee: number) => {
        switch (qr_typee) {
            case QR_TYPE.TEXT:
                setDynamicIcon(IMAGES.ic_Text_yl);
                break;
            case QR_TYPE.WEBSITE:
                setDynamicIcon(IMAGES.ic_Website_yl);
                break;
            case QR_TYPE.WI_FI:
                setDynamicIcon(IMAGES.ic_Wi_Fi_yl);
                break;
            case QR_TYPE.EVENT:
                setDynamicIcon(IMAGES.ic_Event_yl);
                break;
            case QR_TYPE.CONTACT:
                setDynamicIcon(IMAGES.ic_Contact_yl);
                break;
            case QR_TYPE.BUSINESS:
                setDynamicIcon(IMAGES.ic_Business_yl);
                break;
            case QR_TYPE.LOCATION:
                setDynamicIcon(IMAGES.ic_Location_yl);
                break;
            case QR_TYPE.WHATSAPP:
                setDynamicIcon(IMAGES.ic_Whatsapp_yl);
                break;
            case QR_TYPE.EMAIL:
                setDynamicIcon(IMAGES.ic_Email_yl);
                break;
            case QR_TYPE.TWITTER:
                setDynamicIcon(IMAGES.ic_Twitter_yl);
                break;
            case QR_TYPE.INSTAGRAM:
                setDynamicIcon(IMAGES.ic_Instagram_yl);
                break;
            case QR_TYPE.TELEPHONE:
                setDynamicIcon(IMAGES.ic_Telephone_yl);
                break;
            default:
                setDynamicIcon(IMAGES.ic_SplashLogo);
                break;
        }
    };

    const generateQRCode = () => {
        switch (state.qrMenuItem.qr_type) {
            case QR_TYPE.TEXT:
                handleText();
                break;
            case QR_TYPE.WEBSITE:
                handleWebsite();
                break;
            case QR_TYPE.WI_FI:
                handleWiFi();
                break;
            case QR_TYPE.EVENT:
                handleEvent();
                break;
            case QR_TYPE.CONTACT:
                handleContact();
                break;
            case QR_TYPE.BUSINESS:
                handleBusiness();
                break;
            case QR_TYPE.LOCATION:
                handleLocation();
                break;
            case QR_TYPE.WHATSAPP:
                handleWhatsapp();
                break;
            case QR_TYPE.EMAIL:
                handleEmail();
                break;
            case QR_TYPE.TWITTER:
                handleTwitter();
                break;
            case QR_TYPE.INSTAGRAM:
                handleInstagram();
                break;
            case QR_TYPE.TELEPHONE:
                handleTelephone();
                break;
        }

        // const qrHistoryToSave = qrHistoryRedux && qrHistoryRedux.length > 0 ? [...qrHistoryRedux, { title: textt, subTitle: state.qrMenuItem.title, created_date: new Date().getTime() }] : [{ title: textt, subTitle: state.qrMenuItem.title, created_date: new Date().getTime() }];
        // setQRListInfo(qrHistoryToSave);
    },
        handleText = () => {
            if (isEmpty(textt)) {
                showDangerToast("Please enter text");
            } else {
                setDataInReduxAndNavigate({
                    title: textt,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleWebsite = () => {
            const urlPattern = /^(www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
            if (isEmpty(websitee)) {
                showDangerToast("Please enter url");
            } else if (!urlPattern.test(websitee)) {
                showDangerToast("Please enter valid url");
            } else {
                setDataInReduxAndNavigate({
                    title: websitee,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleWiFi = () => {
            if (isEmpty(network)) {
                showDangerToast("Please enter network name");
            } else if (isEmpty(password)) {
                showDangerToast("Please enter password");
            } else {
                setDataInReduxAndNavigate({
                    title: network,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleEvent = () => {
            if (isEmpty(eventName)) {
                showDangerToast("Please enter event name");
            } else if (isEmpty(startDate)) {
                showDangerToast("Please enter start date");
            } else if (isEmpty(endDate)) {
                showDangerToast("Please enter end date");
            } else if (isEmpty(location)) {
                showDangerToast("Please enter location");
            } else if (isEmpty(description)) {
                showDangerToast("Please enter description");
            } else {
                setDataInReduxAndNavigate({
                    title: eventName,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleContact = () => {
            if (isEmpty(firstName)) {
                showDangerToast("Please enter first name");
            } else if (isEmpty(lastName)) {
                showDangerToast("Please enter last name");
            } else if (isEmpty(company)) {
                showDangerToast("Please enter company name");
            } else if (isEmpty(jobTitle)) {
                showDangerToast("Please enter job title");
            } else if (isEmpty(phoneNumber)) {
                showDangerToast("Please enter phone number");
            } else if (isEmpty(email)) {
                showDangerToast("Please enter email");
            } else if (isEmpty(websitee)) {
                showDangerToast("Please enter website");
            } else if (isEmpty(address)) {
                showDangerToast("Please enter address");
            } else if (isEmpty(city)) {
                showDangerToast("Please enter city");
            } else if (isEmpty(country)) {
                showDangerToast("Please enter country");
            } else {
                setDataInReduxAndNavigate({
                    title: firstName + " " + lastName,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleBusiness = () => {
            if (isEmpty(company)) {
                showDangerToast("Please enter company name");
            } else if (isEmpty(industry)) {
                showDangerToast("Please enter industry");
            } else if (isEmpty(phoneNumber)) {
                showDangerToast("Please enter phone number");
            } else if (isEmpty(email)) {
                showDangerToast("Please enter email");
            } else if (isEmpty(websitee)) {
                showDangerToast("Please enter website");
            } else if (isEmpty(address)) {
                showDangerToast("Please enter address");
            } else if (isEmpty(city)) {
                showDangerToast("Please enter city");
            } else if (isEmpty(country)) {
                showDangerToast("Please enter country");
            } else {
                setDataInReduxAndNavigate({
                    title: company,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleLocation = () => {
            if (isEmpty(location)) {
                showDangerToast("Please enter location");
            } else {
                setDataInReduxAndNavigate({
                    title: location,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleWhatsapp = () => {
            if (isEmpty(phoneNumber)) {
                showDangerToast("Please enter phone number");
            } else {
                setDataInReduxAndNavigate({
                    title: `wa.me/91${phoneNumber}`,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleEmail = () => {
            if (isEmpty(email)) {
                showDangerToast("Please enter email");
            } else {
                setDataInReduxAndNavigate({
                    title: `mailto:${email}`,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleTwitter = () => {
            if (isEmpty(userName)) {
                showDangerToast("Please enter twitter username");
            } else {
                setDataInReduxAndNavigate({
                    title: `https://x.com/${userName}`,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleInstagram = () => {
            if (isEmpty(userName)) {
                showDangerToast("Please enter instagram username");
            } else {
                setDataInReduxAndNavigate({
                    title: `https://www.instagram.com/${userName}`,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        handleTelephone = () => {
            if (isEmpty(phoneNumber)) {
                showDangerToast("Please enter phone number");
            } else {
                setDataInReduxAndNavigate({
                    title: `Tel:91${phoneNumber}`,
                    subTitle: state.qrMenuItem.title
                });
            }
        },
        setDataInReduxAndNavigate = (item: any) => {
            const qrHistoryToSave = qrHistoryRedux && qrHistoryRedux.length > 0 ? [...qrHistoryRedux, { ...item, created_date: new Date().getTime() }] : [{ ...item, created_date: new Date().getTime() }];
            setQRListInfo(qrHistoryToSave);

            navigate("ShowQR", {
                detailItem: item
            });
            triggerVibration(100);
        };


    const renderGenerateQRForms = () => {
        switch (state.qrMenuItem.qr_type) {
            case QR_TYPE.TEXT:
                return (
                    <View style={{}}>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Text</Animatable.Text>
                        <TextInput
                            placeholder="Enter text"
                            value={textt}
                            onChangeText={(text) => setTextt(text)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='none'
                        />
                    </View>
                );
            case QR_TYPE.WEBSITE:
                return (
                    <View>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Website URL</Animatable.Text>
                        <TextInput
                            placeholder="www.qrcode.com"
                            value={websitee}
                            onChangeText={(url) => setWebsitee(url)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='URL'
                        />
                    </View>
                );
            case QR_TYPE.WI_FI:
                return (
                    <View>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Network</Animatable.Text>
                        <TextInput
                            placeholder="Enter network name"
                            value={network}
                            onChangeText={(txt) => setNetwork(txt)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='username'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Password</Animatable.Text>
                        <TextInput
                            placeholder="Enter password"
                            value={password}
                            onChangeText={(paswrd) => setPassword(paswrd)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='password'
                        />
                    </View>
                );
            case QR_TYPE.EVENT:
                return (
                    <View>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Event Name</Animatable.Text>
                        <TextInput
                            placeholder="Enter name"
                            value={eventName}
                            onChangeText={(evName) => setEventName(evName)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='name'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Start Date and Time</Animatable.Text>
                        <TextInput
                            placeholder="12 Dec 2022, 10:40 pm"
                            value={startDate}
                            onChangeText={(strtDte) => setStartDate(strtDte)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='none'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>End Date and Time</Animatable.Text>
                        <TextInput
                            placeholder="12 Dec 2022, 10:40 pm"
                            value={endDate}
                            onChangeText={(endDte) => setEndDate(endDte)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='none'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Event Location</Animatable.Text>
                        <TextInput
                            placeholder="Enter location"
                            value={location}
                            onChangeText={(lction) => setLocation(lction)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='location'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Description</Animatable.Text>
                        <TextInput
                            placeholder="Enter any details"
                            value={description}
                            onChangeText={(dscrption) => setDescription(dscrption)}
                            style={{
                                ...styles.textInput, height: ResponsivePixels.size60
                            }}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            numberOfLines={2}
                            multiline
                            inputMode='text'
                            returnKeyType='done'
                            textContentType='none'
                        />
                    </View>
                );
            case QR_TYPE.CONTACT:
                return (
                    <View>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>First Name</Animatable.Text>
                        <TextInput
                            placeholder="Enter name"
                            value={firstName}
                            onChangeText={(frstNme) => setFirstName(frstNme)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='name'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Last Name</Animatable.Text>
                        <TextInput
                            placeholder="Enter name"
                            value={lastName}
                            onChangeText={(lstNme) => setLastName(lstNme)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='middleName'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Company</Animatable.Text>
                        <TextInput
                            placeholder="Enter company"
                            value={company}
                            onChangeText={(cmpny) => setCompany(cmpny)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='organizationName'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Job</Animatable.Text>
                        <TextInput
                            placeholder="Enter job"
                            value={jobTitle}
                            onChangeText={(job) => setJobTitle(job)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='jobTitle'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Phone</Animatable.Text>
                        <TextInput
                            placeholder="Enter phone"
                            value={phoneNumber}
                            onChangeText={(phnNo) => setPhoneNumber(phnNo)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='telephoneNumber'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Email</Animatable.Text>
                        <TextInput
                            placeholder="Enter email"
                            value={email}
                            onChangeText={(emil) => setEmail(emil)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='emailAddress'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Website</Animatable.Text>
                        <TextInput
                            placeholder="Enter website"
                            value={websitee}
                            onChangeText={(wbSite) => setWebsitee(wbSite)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='URL'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Address</Animatable.Text>
                        <TextInput
                            placeholder="Enter address"
                            value={address}
                            onChangeText={(adrss) => setAddress(adrss)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='addressCityAndState'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>City</Animatable.Text>
                        <TextInput
                            placeholder="Enter city"
                            value={city}
                            onChangeText={(cty) => setCity(cty)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='addressCity'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Country</Animatable.Text>
                        <TextInput
                            placeholder="Enter country"
                            value={country}
                            onChangeText={(cntry) => setCountry(cntry)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='countryName'
                        />
                    </View>
                );
            case QR_TYPE.BUSINESS:
                return (
                    <View>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Company Name</Animatable.Text>
                        <TextInput
                            placeholder="Enter name"
                            value={company}
                            onChangeText={(cmpny) => setCompany(cmpny)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='organizationName'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Industry</Animatable.Text>
                        <TextInput
                            placeholder="e.g Food/Agency"
                            value={industry}
                            onChangeText={(indtry) => setIndustry(indtry)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='none'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Phone</Animatable.Text>
                        <TextInput
                            placeholder="Enter phone"
                            value={phoneNumber}
                            onChangeText={(phnNo) => setPhoneNumber(phnNo)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='telephoneNumber'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Email</Animatable.Text>
                        <TextInput
                            placeholder="Enter email"
                            value={email}
                            onChangeText={(emil) => setEmail(email)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='emailAddress'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Website</Animatable.Text>
                        <TextInput
                            placeholder="Enter website"
                            value={websitee}
                            onChangeText={(url) => setWebsitee(url)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='URL'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Address</Animatable.Text>
                        <TextInput
                            placeholder="Enter address"
                            value={address}
                            onChangeText={(adrss) => setAddress(adrss)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='addressCityAndState'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>City</Animatable.Text>
                        <TextInput
                            placeholder="Enter city"
                            value={city}
                            onChangeText={(cty) => setCity(cty)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='next'
                            textContentType='addressCity'
                        />
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Country</Animatable.Text>
                        <TextInput
                            placeholder="Enter country"
                            value={country}
                            onChangeText={(cntry) => setCountry(cntry)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='countryName'
                        />
                    </View>
                );
            case QR_TYPE.LOCATION:
                return (
                    <View style={{}}>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Location</Animatable.Text>
                        <TextInput
                            placeholder="Enter location"
                            value={location}
                            onChangeText={(lction) => setLocation(lction)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='location'
                        />
                    </View>
                );
            case QR_TYPE.WHATSAPP:
                return (
                    <View style={{}}>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>WhatsApp Number</Animatable.Text>
                        <TextInput
                            placeholder="Enter number"
                            value={phoneNumber}
                            onChangeText={(phnNo) => setPhoneNumber(phnNo)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='telephoneNumber'
                        />
                    </View>
                );
            case QR_TYPE.EMAIL:
                return (
                    <View style={{}}>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Email</Animatable.Text>
                        <TextInput
                            placeholder="Enter email address"
                            value={email}
                            onChangeText={(emil) => setEmail(emil)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='emailAddress'
                        />
                    </View>
                );
            case QR_TYPE.TWITTER:
                return (
                    <View style={{}}>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Username</Animatable.Text>
                        <TextInput
                            placeholder="Enter twitter username"
                            value={userName}
                            onChangeText={(usrName) => setUserName(usrName)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='username'
                        />
                    </View>
                );
            case QR_TYPE.INSTAGRAM:
                return (
                    <View style={{}}>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Username</Animatable.Text>
                        <TextInput
                            placeholder="Enter Instagram username"
                            value={userName}
                            onChangeText={(usrName) => setUserName(usrName)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='username'
                        />
                    </View>
                );
            case QR_TYPE.TELEPHONE:
                return (
                    <View style={{}}>
                        <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={styles.miniTitle}>Phone Number</Animatable.Text>
                        <TextInput
                            placeholder="+92xxxxxxxxxx"
                            value={phoneNumber}
                            onChangeText={(phnNo) => setPhoneNumber(phnNo)}
                            style={styles.textInput}
                            placeholderTextColor={Colors.SoftSilverWithOpacity}
                            cursorColor={Colors.DefaultYellow}
                            selectionColor={Colors.DefaultYellow}
                            keyboardType='default'
                            returnKeyType='done'
                            textContentType='telephoneNumber'
                        />
                    </View>
                );
            default:
                return <Animatable.Text animation={'slideInLeft'} duration={800} easing={'ease-in-out'} style={{ color: Colors.DefaultWhite, textAlign: 'center' }}>No form available for this option</Animatable.Text>;
        }
    };

    return (
        <>
            <StatusBar backgroundColor={"transparent"} networkActivityIndicatorVisible barStyle={'default'} />
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={IMAGES.bg_Background_Design}
                    style={styles.background}
                    resizeMode="cover"
                >
                    <CustomHeader
                        numberOfFlexColumns={2}
                        leftColumn={IMAGES.ic_Back}
                        rightColumn={qr_menu_item?.title}
                        leftColumnImageStyle={{
                            paddingVertical: ResponsivePixels.size7,
                            paddingHorizontal: ResponsivePixels.size10,
                            backgroundColor: Colors.CharcoalGray,
                            borderRadius: 6,
                            resizeMode: 'contain',
                        }}
                        rightColumnImageStyle={{
                            alignItems: 'flex-start',
                            marginStart: ResponsivePixels.size25,
                        }}
                        customHeaderBackgroundColor={"transparent"}
                        handleLeftColumnClick={() => goBack()}
                        imageStyles={{
                            height: 20,
                            width: 12,
                        }}
                    />

                    <Animatable.View
                        animation={'fadeInUp'}
                        duration={700}
                        easing={'ease-in-out'}
                        style={{ flex: 1, justifyContent: 'center' }}
                    >
                        <View style={{ ...styles.qrFormContainer, maxHeight: screenHeight - 150 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Animatable.Image
                                    animation={'bounceIn'}
                                    duration={1200}
                                    easing={'ease-in-out'}
                                    style={{
                                        width: ResponsivePixels.size70,
                                        height: ResponsivePixels.size70,
                                        resizeMode: "contain",
                                    }} source={dynamicIcon} />
                            </View>

                            <ScrollView style={{
                                marginTop: ResponsivePixels.size30,
                                marginBottom: ResponsivePixels.size50
                            }} showsVerticalScrollIndicator={false}>
                                {renderGenerateQRForms()}
                            </ScrollView>

                            <Animatable.View
                                animation={'bounceIn'}
                                duration={1200}
                                easing={'ease-in-out'}
                            >
                                <Pressable style={styles.btnStyle} onPress={() => generateQRCode()} >
                                    <Text style={styles.btnTextStyle}>Generate QR Code</Text>
                                </Pressable>
                            </Animatable.View>

                        </View>
                    </Animatable.View>

                </ImageBackground>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: Colors.CharcoalGrayOpacity,
    },
    qrFormContainer: {
        marginHorizontal: ResponsivePixels.size35,
        padding: ResponsivePixels.size20,
        backgroundColor: Colors.CharcoalGray,
        opacity: 0.78,
        borderRadius: 10,

        borderWidth: 0.2,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderTopColor: Colors.DefaultYellow,
        borderBottomColor: Colors.DefaultYellow,
        borderStartColor: Colors.CharcoalGray,
        borderEndColor: Colors.CharcoalGray,
    },
    miniTitle: {
        fontSize: ResponsivePixels.size18,
        color: Colors.DefaultWhite,
        marginBottom: ResponsivePixels.size10,
    },
    textInput: {
        height: ResponsivePixels.size40,
        borderColor: Colors.SoftSilver,
        borderWidth: 1,
        marginBottom: ResponsivePixels.size10,
        paddingHorizontal: ResponsivePixels.size10,
        color: Colors.DefaultWhite,
        borderRadius: 6,
        fontSize: ResponsivePixels.size16,
        backgroundColor: Colors.CharcoalGray,
    },
    btnStyle: {
        backgroundColor: Colors.DefaultYellow,
        padding: ResponsivePixels.size15,
        marginHorizontal: ResponsivePixels.size50,
        borderRadius: 6,
    },
    btnTextStyle: {
        textAlign: 'center',
        color: Colors.CharcoalGray,
        fontSize: ResponsivePixels.size16,
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state: any) => ({
    qrHistoryProps: state.qrData.qrHistoryList,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(GenerateQR);
// export default GenerateQR;