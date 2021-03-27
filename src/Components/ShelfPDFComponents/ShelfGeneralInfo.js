import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import '../../Styles/glance-portal-styling.scss';
import Styles from '../../Styles/js/style-sheet';
function ShelfGeneralInfo(props){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
    const DateString = String(props.scanDate).split("/")
    const currentMonth = monthNames[parseInt(DateString[0])]
    const SKUs =  props.SKUs
    return (
        <View style={Styles.infoPart} >
            {/* <Text style={Styles.subTitle}>
                Report for {currentMonth+" "+ DateString[2]} 
            </Text> */}
            <View style={Styles.twentyBottomMargin}></View>
            <InfoRow label="Row No." value={props.rowNumbers}/>
            <InfoRow label="Store" value={props.storeName}/>
            <InfoRow label="Manufacturers" value={props.manufacturers} type="multiple"/>
            {/* {props.manufacturers.map((value, index) => {
                return (<>{ index > 0 ?<InfoRow value={value}/> : null}</>);
            })} */}
            <InfoRow label="Date of auditing" value={props.scanDate}/>
            <InfoRow label="Number of SKUs" value={props.numberOfSKUs}/>
            <InfoRow label="Number of facings" value={props.numberOfFacings}/> 
            <InfoRow label="SKUs" value={props.SKUs[0]} type="SKU"/>
            {props.SKUs.map((value, index) => {
                console.log(value);
                return (<>{ index > 0 ?
                <>
                    <InfoRow value={value} type="SKU"/>
                </>
                : null}</>);
            })}
            
        </View>
    );
}

function InfoRow(props) {
    return (
        <View style={Styles.infoRow}>
        {    
            (props.label != undefined) ?
                <Text style={Styles.subTitle} >
                    {props.label+":"}
                </Text>
            : <Text ></Text>
        }    
        {
            (props.type === "multiple") ?
                <Text style={Styles.description} >
                    {
                    props.value.map( (res) =>
                       ( res+", ")
                    )
                    }
                </Text>
            : (props.type === "SKU") ?
                <Text style={Styles.description} >
                    {props.value.skuName+"  ( "+props.value.skuNumberOfFacings+" facings )"}
                </Text>
            :
                <Text style={Styles.description} >
                    {props.value}
                </Text>
        }
        </View>
        
    );
}

export default ShelfGeneralInfo;