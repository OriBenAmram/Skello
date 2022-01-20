import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BsTextLeft } from "react-icons/bs";


export function TaskDescription({ description }) {
    return (
        <div className='description-container'>
            <div className="title-container">
                <BsTextLeft className='primary-icon main-content-icon' />
                <h3>Description</h3>
            </div>
            <textarea placeholder={description} className="description-text-area"></textarea>
            <div className="description-edit-container">
                <div>
                    <button className="save-btn">Save</button>
                    <button className="primary-close-btn">X</button>
                </div>
                <button className="details-primary-btn">Formatting help</button>
            </div>
        </div>
    );
}
