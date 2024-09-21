import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import QrMenuList from '../QrMenuList/QrMenuList';
import MainContainer from '../../CommonComponents/MainContainer/MainContainer';
import { CustomHeader } from '../../CommonComponents/CustomHeader/CustomHeader';
import { Colors } from '../../Assets/Styles/Colors';
import { IMAGES } from '../../Assets/Images';

interface IDashboardProps { }

interface IDashboardState {
    projectData: Array<any>;
}

const Dashboard = (props: IDashboardProps) => {

    // const [state, setState] = useState<IDashboardState>({});

    return (
        <>
            <StatusBar backgroundColor={Colors.CharcoalGrayOpacity} networkActivityIndicatorVisible barStyle={'default'} />
            <CustomHeader
                numberOfFlexColumns={2}
                leftColumn={"Generate QR"}
                rightColumn={IMAGES.ic_Line_Menu}
                rightColumnImageStyle={{

                }}
            />
            <QrMenuList />
        </>
    );
};

const styles = StyleSheet.create({});

export default Dashboard;