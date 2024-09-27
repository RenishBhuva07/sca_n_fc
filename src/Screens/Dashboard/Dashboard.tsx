import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import QrMenuList from '../QrMenuList/QrMenuList';
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
            <StatusBar translucent backgroundColor={Colors.CharcoalGrayOpacity} networkActivityIndicatorVisible barStyle={'default'} />
            <CustomHeader
                numberOfFlexColumns={2}
                leftColumn={"Generate QR"}
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
            />
            <QrMenuList />
        </>
    );
};

const styles = StyleSheet.create({});

export default Dashboard;