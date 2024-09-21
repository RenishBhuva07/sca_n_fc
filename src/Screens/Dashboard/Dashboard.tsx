import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import QrMenuList from '../QrMenuList/QrMenuList';

interface IDashboardProps { }

interface IDashboardState {
    projectData: Array<any>;
}

const Dashboard = (props: IDashboardProps) => {

    // const [state, setState] = useState<IDashboardState>({});

    return (
        <>
            {/* <StatusBar backgroundColor={Colors.DefaultYellow} networkActivityIndicatorVisible barStyle={'default'} /> */}
            <QrMenuList />
        </>
    );
};

const styles = StyleSheet.create({});

export default Dashboard;