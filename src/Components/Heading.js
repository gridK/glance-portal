import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Styles from '../Styles/js/style-sheet';

function Heading(props){
    const DateString = String(props.scanDate).split("/")

    const ReportIdString = String(props.reportId).padStart(2,'0')
    return(
        <View fixed>
            <View style={Styles.row}>
                <Image style={Styles.logo} src="../img/glance_logo.png"/>
                <View style={Styles.textBox} >
                    <Text style={Styles.subHeadingBold}>Recipient: {props.recipient}</Text>
                    <Text style={Styles.subHeading}>Share of Shelf Report by GLANCE</Text>
                    <Text style={Styles.subHeading}>Report No.: {DateString[0]+DateString[1]+DateString[2]+ReportIdString}</Text>
                </View>
            </View>
            <View style={Styles.headingBar}></View>
        </View>
    );
}

export default Heading;