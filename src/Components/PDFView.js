import React, { useState , useEffect, useMemo} from 'react';
import MyDocument from './Document';
import { PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/js/Pdf-Font-loader';
import {
  useParams
} from "react-router-dom";
function PDFView(props)  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [images, setImage] = useState([]);
    const Pimages = []
    const  params  = useParams();
    console.log(params.reportId)
    useEffect(() => {
      fetch(`https://glance-api.azurewebsites.net/reportId=${params.reportId}`)
        .then(res => res.json())
        .then(    
          (result) => {
            setItems(result);
            
            // const reducer = (accumulator, currentValue) => accumulator.concat(currentValue.coordinateOnShelf);
            const intdata = result.detectedProductsOnShelf.map( shelf => ({
              imageUrl: shelf.shelfImageUrl , isGrouped: false,
              productCoords: shelf.detectedProducts.map(product => product.coordinateOnShelf)
              
            }
            ) )
            const requests = intdata.map(async image => {
               return fetch("http://127.0.0.1:4000/highlight-image",{
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  responseType: 'blob',
                  body: JSON.stringify(image) // body data type must match "Content-Type" header
                  })
                  // implement body
                  .then(response => response.blob())
                    .then(    
                      (response) => {
                        Pimages.push(response);
                      },
                      (error) => {
                        setError(error);
                        setIsLoaded(false);
                      }
                    )
                });
            return Promise.all(requests).then(() => {
              console.log("Code is here");
              console.log(Pimages)
              console.log(error)
              setImage(Pimages)
              setIsLoaded(true);
            })
          },
          (error) => {
            setError(error);
            setIsLoaded(false);
          }
        )
    }, [])
    
    return ( 
      <>
      {isLoaded ?
          <PDFViewer height="950px" width="100%">
              <MyDocument Image={images} object={items}/>
          </PDFViewer>
      : 
      
        <Row className="d-flex justify-content-center align-items-center" style={{height:'100%'}}>
          <h1>Generating report...</h1>
        </Row>
      }
      </>
        );
    
}

export default PDFView;