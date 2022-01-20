import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function TaskCover(props) {
    return (
        <section className='details-cover'>
            <button className="close-modal-btn">X</button>
        </section>
    );
}
