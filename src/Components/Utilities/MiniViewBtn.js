import React from 'react';
import '../../Styles/glance-portal-styling.scss';
import {NavLink} from 'react-router-dom'

function MiniViewBtn(props) {
    return(
        <>
        { props.type == "view" ?
            <NavLink to={props.value_link} className="mini-btn view-btn">
                <h5>View</h5>
                <img src="/img/google-docs.svg"></img>
            </NavLink>
          : 
            <NavLink to={props.value_link} className="mini-btn view-btn">
                <h5>View</h5>
                <img src="/img/chevron-pointing.svg"></img>
            </NavLink>
        }
        </>
    );

}

export default MiniViewBtn;