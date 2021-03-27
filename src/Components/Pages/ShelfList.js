import React, { useState , useEffect, useMemo} from 'react';
import Container from 'react-bootstrap/Container';
import '../../Styles/glance-portal-styling.scss';
import FullWidthCard from '../Utilities/FullWidthCard';
import {
    useParams
  } from "react-router-dom";

function ShelfList(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const  params  = useParams();
    useEffect(() => {
            fetch(`https://localhost:5001/shelflist/inputId=${params.inputId}`)
            .then(res => res.json())
            .then(    
                (result) => {
                setItems(result);
                setIsLoaded(true);
                console.log(result)
                },
                (error) => {
                    setError(error);
                    setIsLoaded(false);
                }
            )
    },[])
    return(
        <Container fluid >
            <div className="view-bread-position-fixed">
                <div>
                    <h5 className="main-title">Share of Shelf</h5>
                    <h5 className="main-sub-title">for Auditing No. {params.inputId}</h5>
                </div>
            </div>
            <div className="main-inspection-record-view" >
                {
                  items.map( input =>
                            <FullWidthCard 
                        label_A="Shelf No." 
                        value_A={input.number}
                        label_B="Row No." 
                        value_B={input.rowNumber} 
                        label_C="Number of SKUs" 
                        value_C={input.numberOfSKU} 
                        label_D="Number of facings" 
                        value_D={input.sumOfproductsOnShelf}
                        value_link={"/shelfpdf/"+params.inputId+"/"+input.number}
                        /> 
                    )
                }
            </div>
        </Container>
    );
}


export default ShelfList;