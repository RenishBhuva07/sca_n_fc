import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import CustomTabBar from '../../CommonComponents/CustomTabBar/CustomTabBar';
import HistoryList from './HistoryList';
import { navigateToSetting } from '../../Utils/Utils';

interface IHistoryProps { }

interface IHistoryState {
    scanHistoryList: Array<any>;
    createHistoryList: Array<any>;
}

const History = (props: IHistoryProps) => {

    const [state, setState] = useState<IHistoryState>({
        scanHistoryList: [
            {
                id: 1,
                icon: IMAGES.ic_Scan_History,
                title: "https://instagram.com",
                subTitle: "Instagram",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 2,
                icon: IMAGES.ic_Scan_History,
                title: "https://google.com",
                subTitle: "Google",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 3,
                icon: IMAGES.ic_Scan_History,
                title: "https://spotify.com",
                subTitle: "Spotify",
                created_date: "16 Dec 2024, 9:30 PM",
            }, {
                id: 4,
                icon: IMAGES.ic_Scan_History,
                title: "https://itunes.com",
                subTitle: "iTunes",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 5,
                icon: IMAGES.ic_Scan_History,
                title: "https://twitter.com",
                subTitle: "Twitter",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 6,
                icon: IMAGES.ic_Scan_History,
                title: "https://facebook.com",
                subTitle: "Facebook",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 7,
                icon: IMAGES.ic_Scan_History,
                title: "https://whatsapp.com",
                subTitle: "Whatsapp",
                created_date: "16 Dec 2024, 9:30 PM",
            },
        ],
        createHistoryList: [
            {
                id: 1,
                icon: IMAGES.ic_Scan_History,
                title: "https://instagram.com",
                subTitle: "Instagram",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 2,
                icon: IMAGES.ic_Scan_History,
                title: "https://google.com",
                subTitle: "Google",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 3,
                icon: IMAGES.ic_Scan_History,
                title: "https://spotify.com",
                subTitle: "Spotify",
                created_date: "16 Dec 2024, 9:30 PM",
            }, {
                id: 4,
                icon: IMAGES.ic_Scan_History,
                title: "https://itunes.com",
                subTitle: "iTunes",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 5,
                icon: IMAGES.ic_Scan_History,
                title: "https://twitter.com",
                subTitle: "Twitter",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 6,
                icon: IMAGES.ic_Scan_History,
                title: "https://facebook.com",
                subTitle: "Facebook",
                created_date: "16 Dec 2024, 9:30 PM",
            },
            {
                id: 7,
                icon: IMAGES.ic_Scan_History,
                title: "https://whatsapp.com",
                subTitle: "Whatsapp",
                created_date: "16 Dec 2024, 9:30 PM",
            },
        ]
    });

    return (
        <>
            <StatusBar backgroundColor={Colors.CharcoalGrayOpacity} networkActivityIndicatorVisible barStyle={'default'} />
            <CustomHeader
                numberOfFlexColumns={2}
                leftColumn={"History"}
                rightColumn={IMAGES.ic_Line_Menu}
                rightColumnImageStyle={{
                    padding: 10,
                    backgroundColor: Colors.CharcoalGray,
                    borderRadius: 6,
                }}
                imageStyles={{
                    height: 30,
                    width: 30,
                }}
                handleRightColumnClick={navigateToSetting}
            />
            <CustomTabBar
                leftTabTitle='Scan'
                rightTabTitle='Create'
                leftTabScreen={() => <HistoryList historyToRender={state.scanHistoryList} />}
                rightTabScreen={() => <HistoryList historyToRender={state.createHistoryList} />}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default History;