import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiPencil } from "react-icons/bi";

// 

// CMPS

export function LabelsModalContent({ board, task }) {

    // const [modalContent, setModalContent] = useState({ isSearch: true });

    console.log('board.labels:', board.labels);
    
    return (
        <section className='labels-modal-content'>
            <div className='modal-title'>
                <h4>Labels</h4>
            </div>
            <section className='modal-items-to-edit'>
                {board.labels.map(label => {
                    console.log('label:', label);
                    return <div key={label.id} className='label-container'>
                        <button className='edit-label-btn'><BiPencil /></button>
                        <div style={{ backgroundColor: label.color, hover: `box-shadow: -8px 0 ${label.color}` }} className='label-box'>{label.title}</div>
                    </div>
                })}
            </section>
            <div className='edit-submit-option'>
                <button className='details-primary-btn new-label-btn'>Create a new label</button>
            </div>
        </section>
    );
}
