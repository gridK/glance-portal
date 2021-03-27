import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import Styles from '../Styles/js/style-sheet';

import Heading from './Heading';
import GeneralInfo from './GeneralInfo';
import ShelfInfo from './ShelfInfo';
import DetectionImages from './DetectionImages';

function Documents(props){
    const info = props.object

    return(
        <Document>
            <Page size="A4" style={Styles.body} >
                <Heading 
                    recipient={info.manufacturerName}
                    scanDate={info.scanDate}
                    reportId={info.reportId}
                />
                <Text style={Styles.title} >
                    {info.brandName}
                </Text>
                <GeneralInfo 
                    scanDate={info.scanDate}
                    shelfNumbers={info.shelfNumbers}
                    brandName={info.brandName}
                    storeName={info.storeName}
                    manufacturerName={info.manufacturerName}
                    categoryName={info.categoryName}
                    productNames={info.productNames}
                    numberOfFacings={info.numberOfFacings}
                />
                <ShelfInfo 
                    numberOfFacings={info.numberOfFacings}
                    numberOfFacingsAvailableOnshelf={info.numberOfFacingsAvailableOnshelf}
                    numberOfFacingsFromSameCategory={info.numberOfFacingsFromSameCategory}
                />
                <DetectionImages Image={props.Image}/>
            </Page>
        </Document>
    );
    
}

export default Documents;