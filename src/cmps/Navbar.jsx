import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
export const Navbar = () => {
	let location = useLocation();
    useEffect(()=>{
        setIsTask(location.pathname === '/' ? true : false)
    },[location.pathname])

    const [isTask, setIsTask] = useState(true);

	return <div className="Navbar">{isTask ? <Link to="/contact">Contact</Link> : <Link to="/">Task</Link>}</div>;
};
