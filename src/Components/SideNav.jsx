import React from "react";
import '../Styles/glance-portal-styling.scss';
import App from '../App';
import {NavLink} from 'react-router-dom'
const navList = [
    {img: '/img/stack.svg',item: "Manufacturer", pages: '/manufacturer'},
    {img: '/img/audit.svg',item:"Auditor" , pages: '/auditor'}
]


function NavItem(props) {
    return (
        <div>
            <NavLink to={props.pages} activeClassName="active" className="side-nav-item">
                    <img src={props.img} className="side-nav-item-icon" ></img>
                    <p className="side-nav-item-text" >{props.item}</p>
            </NavLink>
        </div>
    );
}


function SideNav(props) {
    return (
        <div className="side-nav">
            <h1 className="side-nav-header">GLANCE</h1>
            {navList.map((navItem) => 
                <NavItem img={navItem.img} item={navItem.item} pages={navItem.pages}/> 
            )}
        </div>
    );
}

export default SideNav;