import React, { useState , useEffect, useMemo} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import '../../Styles/glance-portal-styling.scss';
import FullWidthCard from '../Utilities/FullWidthCard';
import FilterDropDown from '../Utilities/FilterDropDown';

function AuditList(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
            fetch("https://glance-api.azurewebsites.net/AuditorList")
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
                    <h5 className="main-sub-title">by Auditing</h5>
                </div>
            </div>
            <div className="main-inspection-record-view" >
                {
                  items.map( input =>
                            <FullWidthCard 
                        label_A="Audit No." 
                        value_A={input.id}
                        label_B="Location" 
                        value_B={input.location} 
                        label_C="Scan date" 
                        value_C={input.scandate} 
                        label_D="Number of Shelves" 
                        value_D={input.numberOfShelves}
                        value_link={"/shelflist/"+input.id}
                        minibtn = "view-shelfs"
                        /> 
                    )
                }
            </div>
        </Container>
    );
}


export default AuditList;