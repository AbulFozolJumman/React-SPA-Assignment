import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='mb-5'>
            <nav className='container d-flex justify-content-between align-items-center py-4'>
                <h1>Knowledge Cafe</h1>
                <img className='rounded-circle' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </nav>
            <hr />
        </div>
    );
};

export default Header;