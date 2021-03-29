import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navigation() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/DetailInfo">DetailInfo</NavLink>    
            <NavLink to="/Results">Results</NavLink>
        </div>
    )
}
