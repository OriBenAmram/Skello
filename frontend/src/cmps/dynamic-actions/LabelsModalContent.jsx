import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// CMPS

export function LabelsModalContent({ board, task }) {

    // const [modalContent, setModalContent] = useState({ isSearch: true });

    console.log('board.labels:', board.labels);
    
    return (
        <section className='labels-modal-content'>
            <div className='modal-title'>
                <h4>Labels</h4>
            </div>
            <ul className='modal-items-to-edit'>
                {/* {board.labels.map(label => {

                })} */}
            </ul>
            <div className='edit-submit-option'>

            </div>
        </section>
    );
}
