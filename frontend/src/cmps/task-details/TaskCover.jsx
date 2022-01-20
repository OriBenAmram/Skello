import React from 'react';
import { Link } from 'react-router-dom';

export function TaskCover({ onCloseModal }) {
    return (
        <section className='details-cover'>
            <button className="close-modal-btn" onClick={() => {
                onCloseModal()
            }}>X</button>
        </section>
    );
}
