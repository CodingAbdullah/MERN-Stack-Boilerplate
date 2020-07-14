import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
    
 // Links correspond to which element to render to the dom
    return(
        <div className="homepage">
           <Link to="/login"><button type="button">Log In</button></Link>
           <Link to="/signUp"><button type="button">Sign Up</button></Link>
        </div>
    )
}

export default HomePage;