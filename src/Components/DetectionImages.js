import React,  { useState , useEffect, useMemo} from 'react';
import Styles from '../Styles/js/style-sheet';

import { Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

function DetectionImages(props){
   // var result = Object.keys(images).map((key) => [Number(key), images[key]]);
   console.log(props.ImageInfo )
   return(
       <View style={Styles.DetectedimageView}>
           { (props.ImagesInfo != undefined) ?
               props.Image.map( (shelf,index) => 
               <>
                  {
                      (index == 0) ?
                        <View>
                            <View wrap={false} >
                                <Text style={Styles.HeaderimageView}>Detected Shelves</Text>
                                <Image 
                                    style={Styles.image}
                                    src={URL.createObjectURL(shelf)}
                                />
                                
                            </View>
                                {
                                props.ImagesInfo[index].detectedProducts.map((product,indexing) =>
                                    <Text style ={Styles.description} >
                                        <Text style = {{color: props.labels[index][indexing],fontSize:18 }}>
                                        • 
                                        </Text> 
                                        {("  "+product.productName ) }
                                    </Text>
                                )
                                }
                        </View>
                       :
                        <View >
                            <Image 
                                style={Styles.image}
                                src={URL.createObjectURL(shelf)}
                            />
                            {
                            props.ImagesInfo[index].detectedProducts.map((product,indexing) =>
                                <Text style ={Styles.description} >
                                       <Text style = {{color: props.labels[index][indexing],fontSize:18 }}>
                                       • 
                                       </Text> 
                                       {("  "+product.productName ) }
                                </Text>
                            )
                            }
                        </View>
                  }
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