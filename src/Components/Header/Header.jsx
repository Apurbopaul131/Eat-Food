/* eslint-disable no-unused-vars */
import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <nav className='d-flex justify-content-between mt-3 h-10 align-items-center sticky-top bg-white w-100'>
            <h3 className='ms-3'>Eat-Food</h3>
            <ul className='d-flex'>
                <li><a href="/home">HOME</a></li>
                <li><a href="/reservarion">RESERVATION</a></li>
                <li><a href="/menu">MENU</a></li>
                <li><a href="/contact">CONTACT US</a></li>
                <li><a href="/login">LOGIN</a></li>
                <li>
                    <FontAwesomeIcon className='icon' icon={faSearch}></FontAwesomeIcon>
                </li>
                <li className=''>
                    <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>
                    <span className='cart-circle'>1</span>
                </li>

            </ul>
        </nav>
    );


}

export default Header;