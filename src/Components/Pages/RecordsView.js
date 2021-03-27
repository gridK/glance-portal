import React, { useState , useEffect, useMemo} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import '../../Styles/glance-portal-styling.scss';
import FullWidthCard from '../Utilities/FullWidthCard';
import FilterDropDown from '../Utilities/FilterDropDown';

function RecordsView(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        if(props.page === "home")
        {
            fetch("https://localhost:5001/MaufacturerList")
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
            console.log(items)
        }
        else if(props.page === "audit")
        {
            fetch("https://localhost:5001/AuditorList")
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
            console.log(items)
        }
    },[])
    return(
        <Container fluid >
            <div className="view-bread-position-fixed">
            { props.page === 'home' ?
                <div>
                    <h5 className="main-title">Share of Shelf</h5>
                    <h5 className="main-sub-title">by Manufacturer</h5>
                </div>
             :props.page === 'audit' ?
                <div>
                    <h5 className="main-title">Share of Shelf</h5>
                    <h5 className="main-sub-title">by Auditing</h5>
                </div>
             :
                <div>
                    <h5 className="main-title">Share of Shelf</h5>
                    <h5 className="main-sub-title">by shelf</h5>
                </div>
            }
            </div>
            <div className="main-inspection-record-view" >
            { props.page === 'home' ?
            <>
                {
                  items.map( report =>
                            <FullWidthCard 
                        label_A="Manufacturer" 
                        value_A={report.manufacturerName}
                        label_B="Location" 
                        value_B="Tesco lotus" 
                        label_C="Scan date" 
                        value_C={report.generatedDate}
                        label_D="Number of Facings" 
                        value_D={report.numberOfFacings}
                        value_link={"/pdf/"+report.id}
                        /> 
                    )
                }
            </>
            : props.page === 'audit' ?
            <>
                {
                  items.map( input =>
                            <FullWidthCard 
                        label_A="Audit No." 
                        value_A={input.id}
                        label_B="Location" 
                        value_B={input.location} 
                        label_C="Scan date" 
                        value_C={input.scandate} 
                        label_D="Number of Facings" 
                        value_D={input.numberOfShelves}
                        value_link={"/shelflist/"+input.id}
                        /> 
                    )
                }
            </>
            :
            <>
                {
                  items.map( input =>
                            <FullWidthCard 
                        label_A="Audit No." 
                        value_A={input.id}
                        label_B="Location" 
                        value_B={input.location} 
                        label_C="Scan date" 
                        value_C={input.scandate} 
                        label_D="Number of Facings" 
                        value_D={input.numberOfShelves}
                        minibtn="view-shelfs"
                        /> 
                    )
                }
            </>
            }
            </div>
        </Container>
    );
}


export default RecordsView;