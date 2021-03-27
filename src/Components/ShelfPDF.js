import React, { useState , useEffect, useMemo} from 'react';
import MyDocument from './ShelfPDFComponents/ShelfDocument';
import { PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/js/Pdf-Font-loader';
import {
  useParams
} from "react-router-dom";
function ShelfPDF(props)  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [images, setImage] = useState([]);
    const [labels, setlabels] = useState([]);
    const  params  = useParams();
    useEffect(() => {
      fetch(`https://glance-api.azurewebsites.net/reportbyshelf/shelfNumber=${params.shelfNumber},inputId=${params.inputId}`)
        .then(res => res.json())
        .then(    
          (result) => {
            setItems(result);
            const Pimages = []
            const colors = []
            // const reducer = (accumulator, currentValue) => accumulator.concat(currentValue.coordinateOnShelf);
            const labels = result.shelvesImages.map(shelf =>  
              shelf.detectedProducts.length
            )
            console.log(labels)
            const renderLabelColor =  labels.map( async label => {
              return await fetch(`http://127.0.0.1:4000/get-colors/${label}`,{
                  method: 'GET', // *GET, POST, PUT, DELETE, etc.
                  })
                  // implement body
                  .then(response => response.json())
                    .then(    
                      (response) => {
                         colors.push(response)
                      },
                      (error) => {
                        setError(error);
                        setIsLoaded(false);
                      }
                    )
            });
            console.log(colors)
            const intdata = result.shelvesImages.map( shelf => ({
              imageUrl: shelf.shelfImageUrl , isGrouped: true,
              productCoords: shelf.detectedProducts.map(product => product.coordinateOnShelf)
              
            }
            ) )
            console.log(intdata)
            const requests =  intdata.map( async image => {
              return await fetch("http://127.0.0.1:4000/highlight-image",{
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
            return Promise.all(renderLabelColor).then(() => {
              return Promise.all(requests).then(() => {
                console.log("Code is here");
                console.log(Pimages)
                setImage(Pimages)
                setlabels(colors)
                setIsLoaded(true);
              })
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
              <MyDocument Image={images} object={items} labels={labels}/>
          </PDFViewer>
      : 
      
        <Row className="d-flex justify-content-center align-items-center" style={{height:'100%'}}>
          <h1>Generating report...</h1>
        </Row>
      }
      </>
        );
    
}

export default ShelfPDF;