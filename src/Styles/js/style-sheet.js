import React from 'react';
import {StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 45,
    },
    title:{
        fontFamily: 'Quicksand',
        fontWeight: 'semibold',
        fontSize: 18,
        marginBottom: 20,
    },
    row:{
        flexDirection: 'row',
    },
    logo:{
        height: 70,
        width: 130,
    },
    subHeadingBold:{
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
        fontSize: 11,
        marginBottom: 6,
        textAlign: 'right',
    },
    subHeading:{
        fontFamily: 'Quicksand',
        fontSize: 11,
        textAlign: 'right',
    },
    headingBar:{
        marginVertical: 10,
        marginBottom: 10,
        backgroundColor: '#4A90E2',
        width: '100%',
        height: 10,

    },
    textBox:{
        alignItems: 'baseline',
        paddingRight: 140,
        height:'100%',
        width:'100%',
        paddingTop: 20,
    },
    text:{
        fontFamily: 'Quicksand',
        fontSize: 9,
    },
    infoPart:{
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 50,
    },
    subTitle:{
        fontFamily: 'Quicksand',
        fontWeight: 'medium',
        fontSize: 12,
    },
    twentyBottomMargin:{
        marginBottom: 20,
    },
    description:{
        marginLeft: 10,
        fontFamily: 'Quicksand',
        fontSize: 12,
    },
    infoRow:{
        flexDirection: 'row',
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    infoCard:{
        marginLeft: 30,
        textAlign: 'center',    
        marginLeft: 30,
    },
    infoCardHeader:{
        fontFamily: 'Quicksand',
        fontWeight: 'medium',
        fontSize: 14,
        width: '40%',
        
    },
    infoCardValue:{
        fontFamily: 'Quicksand',
        fontWeight: 'semibold',
        fontSize: 20,
        width: '40%',
        marginTop: 10,
    },
    infoCardDescription:{
        fontFamily: 'Quicksand',
        fontSize: 12,
        width: '40%',
        marginTop: 10,
    },
    marginLeft:{
        marginLeft: 170,
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    DetectedimageView: {
        marginTop: 10,
    }, 
});

export default styles; 