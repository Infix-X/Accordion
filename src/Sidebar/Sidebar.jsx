import React, { useState } from 'react';
import logo from './attachment_145517454.png'; 
import './style.css' // Ensure you have the correct path to the logo image
import 'bootstrap/dist/css/bootstrap.min.css';



const navItem = ["home", "about", "services", "contact"];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className='inner'>
                <header>
                    <button
                        type='button'
                        className='sidebar-burger'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span>{isOpen ? 'close' : 'menu'}</span>
                    </button>
                    <img src={logo} alt="Logo" />
                </header>
                <nav>
                    {navItem.map((item) => (
                        <button key={item} type='button'>
                            <span>{item}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
