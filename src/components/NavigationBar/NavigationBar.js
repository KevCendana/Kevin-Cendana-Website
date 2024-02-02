//--------------------------------------------------------------------------------------//
//                                 NavigationBar.js                                     //
//--------------------------------------------------------------------------------------//

// Libaries & Files
import React, { useState } from 'react';   // Import useState hook from React
import { Link } from 'react-scroll';       // Import Link from react-scroll for smooth scrolling
import classNames from 'classnames';       // Import classNames to dynamically set class names
import './NavigationBar.css';              // Import CSS for the navigation bar
import DarkModeToggle from '../../shared/DarkModeToggle/DarkModeToggle'; // Import the DarkModeToggle component

// Icons for the top right of the nav bar
import githubIcon from '../../images/github_icon.png'; // Import the GitHub logo
import csvIcon from '../../images/csv_icon.png';       // Import the CSV logo
import linkedinIcon from '../../images/linkedin_icon.png';       // Import the CSV logo

function NavigationBar() {
    // State to track which section is active
    const [activeSection, setActiveSection] = useState('');

    // Function to set active section and update active state
    const onSetActive = (section) => {
        setActiveSection(section);
    };

    // Function to get active class for section
    const getActiveClass = (section) => {
        return classNames({ 'navbar__link-active': activeSection === section });
    };

    // Return the Navigation Bar
    return (
        <nav className="navbar" role = "navigation">
            <div className="navbar__list-wrapper">
                {/* List of Navigation Bar sections to go to. "Offset" arg changes the position they are detected. */}
                <ul className="navbar__list">
                    <Link className={`borderXwidth ${getActiveClass('home')}`} to="home" offset={0} spy={true} onSetActive={() => onSetActive('home')}>
                        <li>Home</li>
                    </Link>
                    <Link className={`borderXwidth ${getActiveClass('about')}`} to="about" offset={-270} spy={true} onSetActive={() => onSetActive('about')}>
                        <li>About</li>
                    </Link>
                    <Link className={`borderXwidth ${getActiveClass('skills')}`} to="skills" offset={-280} spy={true} onSetActive={() => onSetActive('skills')}>
                        <li>Skills</li>
                    </Link>
                    <Link className={`borderXwidth ${getActiveClass('projects')}`} to="projects" offset={-260} spy={true} onSetActive={() => onSetActive('projects')}>
                        <li>Projects</li>
                    </Link>
                    <Link className={`borderXwidth ${getActiveClass('contact')}`} to="contact" offset = {-420} spy={true} onSetActive={() => onSetActive('contact')}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>

            {/* Items in the top right of the nav bar: GitHub logo & Dark Mode switch */}
            <div className="top-right-items">
            <a href="https://docs.google.com/document/d/1xiAtzAXNMSw3ZkajAZaag-O40Fxn4iWoJ1nj-sb5YCA/edit?usp=sharing

" target="_blank" className="github-logo-link" rel="noopener noreferrer">
                <img src = {csvIcon} className = "navbar-icon csv-icon" alt = "CSV Logo Link"></img>
            </a>
            <a href="https:/linkedin.com/in/kevincendana" target="_blank" className="linkedin-icon-link" rel="noopener noreferrer">
                <img src = {linkedinIcon} className = "navbar-icon linkedin-icon" alt = "LinkedIn Logo Link"></img>
            </a>
            <a href="https://github.com/KevCendana" target="_blank" className="github-icon-link" rel="noopener noreferrer">
                <img src = {githubIcon} className = "navbar-icon github-icon" alt = "GitHub Logo Link"></img>
            </a>
                <div className="toggle__container">
                    <label className="switch">
                        <DarkModeToggle />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;
