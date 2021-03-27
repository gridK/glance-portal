import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Styles from '../../Styles/js/style-sheet';

import Heading from '../Heading';
import DetectionImages from '../DetectionImages';
import ShelfGeneralInfo from './ShelfGeneralInfo';  
function ShelfDocument(props){
    const info = props.object

    return(
        <Document>
            <Page size="A4" style={Styles.body} >
                <Heading 
                    recipient="GLANCE AUDITOR"
                    scanDate={info.scanDate}
                    reportId={info.inputId}
                />
                <Text style={Styles.title} >
                    Shelf No. {info.shelfNumber}
                </Text>
                <ShelfGeneralInfo 
                    scanDate={info.scanDate}
                    rowNumbers={info.rowNumber}
                    brandName={info.brandName}
                    storeName={info.storeName}
                    manufacturers={info.manufacturerNames}
                    categoryName={info.categoryName}
                    productNames={info.productNames}
                    numberOfSKUs={info.numberOfSKUs}
                    numberOfFacings={info.numberOfFacings}
                    SKUs = {info.skUs}
                />
                <DetectionImages Image={props.Image} ImagesInfo={info.shelvesImages} labels={props.labels}/>
            </Page>
        </Document>
    );
    
}

export default ShelfDocument;