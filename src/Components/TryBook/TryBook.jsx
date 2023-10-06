/* eslint-disable no-unused-vars */
import React from 'react';
import "./Trybook.css";
import Bookimg from "../../../public/img/Book_background.jpg";
const TryBook = () => {
    return (
        <div className='position-relative text-center text-white'>
            <img src={Bookimg} alt="snow" className='img-fluid'/>
            <div className="position-absolute top-50 start-50 translate-middle">
                <h6>WELLCOME TO</h6>
                <h1>BOOK YOUR TABLE</h1>
                <button className='btn btn-danger btn-lg'>SEE MORE</button>
            </div>
        </div>
    );
};

export default TryBook;