import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Styles from '../Styles/js/style-sheet';

function ShelfInfo(props) {
    console.log(props.numberOfFacingsAvailableOnshelf)
    console.log(props.numberOfFacingsFromSameCategory)
    const shelfPercentage = ((props.numberOfFacings / props.numberOfFacingsAvailableOnshelf) * 100).toFixed(2).toString();
    const categoryPercentage = ((props.numberOfFacings / props.numberOfFacingsFromSameCategory) * 100).toFixed(2).toString();
    return (
        <View style={Styles.row} wrap={true} >
            <ShelfInfoCard 
                header="Based on products on the same shelf" 
                value={shelfPercentage+"%"}
                description={'From '+ props.numberOfFacingsAvailableOnshelf+' facings products'}    
                />
            <ShelfInfoCard />
            <View  style={Styles.marginLeft}/>
            <ShelfInfoCard 
                header="Based on products of same category" 
                value={categoryPercentage+"%"}
                description={'From ' + props.numberOfFacingsFromSameCategory +' facings products'}    
                />
            <ShelfInfoCard />
        </View>
    );
}

function ShelfInfoCard(props){
    return (
    <View style={Styles.infoCard} wrap={true} >
        <Text style={Styles.infoCardHeader} wrap={true}>
            {props.header}
        </Text>
        <Text style={Styles.infoCardValue} >
            {props.value}
        </Text>
        <Text style={Styles.infoCardDescription}>
            {props.description}
        </Text>
    </View>
    );
}

export default ShelfInfo;