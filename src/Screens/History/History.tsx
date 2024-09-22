import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';
import HistoryList from './HistoryList';
import CustomTabBar from '../../CommonComponents/CustomTabBar/CustomTabBar';

interface IHistoryProps { }

interface IHistoryState {
    projectData: Array<any>;
}

const History = (props: IHistoryProps) => {

    // const [state, setState] = useState<IHistoryState>({});

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
            />
            <CustomTabBar />
            <HistoryList />
        </>
    );
};

const styles = StyleSheet.create({});

export default History;