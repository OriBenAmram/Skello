import { useState } from "react";

// CMPS
import { MembersModalContent  } from './MembersModalContent.jsx'

export function DynamicActionModal({ toggleModal, type, pos }) {
    console.log('pos.clientY:', pos.clientY);

    const [modalContent, setModalContent] = useState({ isSearch: true });

    // Switch if that decide if
    const getContentForDisplay = () => {
        switch (type) {
            case 'members':
                return <MembersModalContent task />
        }
    }

    return (
        <section className='dynamic-action-modal' style={{ top: `${pos.clientY + 130}px`, left: `${pos.clientX - 70}px` }} >
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}>x</button>
                {type}
            </section>
            <section className='modal-content'>
                <input placeholder={`Search ${type}...`} type="text" className='modal-main-input' autoFocus />
                {/* CONTENT */}
                {/* {getContentForDisplay()} */}
            </section>
        </section>
    );
}
