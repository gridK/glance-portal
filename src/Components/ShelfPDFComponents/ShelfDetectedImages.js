import React,  { useState , useEffect, useMemo} from 'react';
import Styles from '../Styles/js/style-sheet';

import { Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

function DetectionImages(props){
    // var result = Object.keys(images).map((key) => [Number(key), images[key]]);
    console.log(props.Image )
    return(
        <View style={Styles.DetectedimageView}>
            <Text style={Styles.HeaderimageView}>Detected Shelves</Text>
            { (props.ImagesInfo != undefined) ?
                props.Image.map( (shelf,index) => 
                    <>
                    <Image 
                        style={Styles.image}
                        src={URL.createObjectURL(shelf)}
                    />
                    <Text>
                    {
                        props.ImagesInfo[index].map( info =>
                            info.detectedProducts.map( product => 
                                (product.productName +", " )
                            )
                        )
                    }
                    </Text>
                    </>
                )
              :
                props.Image.map(shelf => 
                    <Image 
                        style={Styles.image}
                        src={URL.createObjectURL(shelf)}
                    />
                )
            }
        </View>
);

}   

export default DetectionImages;