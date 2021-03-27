import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Styles from '../Styles/js/style-sheet';

function GeneralInfo(props){
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
    const DateString = String(props.scanDate).split("/")
    const currentMonth = monthNames[parseInt(DateString[0])]
    const Products = props.productNames.split(",")

    return (
        <View style={Styles.infoPart}>
            <Text style={Styles.subTitle}>
                Report for {currentMonth+" "+ DateString[2]} 
            </Text>
            <View style={Styles.twentyBottomMargin}></View>
            <InfoRow label="Shelf No." value={props.shelfNumbers}/>
            <InfoRow label="Brand" value={props.brandName}/>
            <InfoRow label="Store" value={props.storeName}/>
            <InfoRow label="Products" value={Products[0]}/>
            {Products.map((value, index) => {
                return (<>{ index > 0 ?<InfoRow value={value}/> : null}</>);
            })}
            <InfoRow label="Manufacturer" value={props.manufacturerName} />
            <InfoRow label="Number of facings" value={props.numberOfFacings}/>
            <InfoRow label="Category" value={props.categoryName} />
            <InfoRow label="Date of scan" value={props.scanDate}/>
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
            : <Text >           </Text>
        }    
            <Text style={Styles.description} >
                {props.value}
            </Text>
        </View>
    );
}

export default GeneralInfo;