import React from 'react';
import './MainPage.css'; // Importing the CSS file

const MainPage = () => {
    return (
        <div className="main-container">
            <nav className="navbar">
                <button className="nav-button">Home</button>
                <button className="nav-button">Catalog</button>
                <button className="nav-button">Collections</button>
                <button className="nav-button">Cart</button>
                <button className="nav-button">About</button>
            </nav>
            <div className="background-image">
                {/* Here you can put any content you want on top of the background image */}
            </div>
        </div>
    );
};

export default MainPage;
