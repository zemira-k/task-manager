import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
export const Navbar = () => {
  const [isTask, setIsTask] = useState(false);

  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    setIsTask(!isTask);
  }, [location.pathname]);

  return (
    <div className="Navbar">
      {/* {isTask ? <Link to="/Member">Member</Link> : <Link to="/">Task</Link>} */}
    </div>
  );
};
