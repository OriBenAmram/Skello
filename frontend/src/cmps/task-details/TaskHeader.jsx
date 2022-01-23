import React from 'react';
import { AiOutlineCreditCard } from "react-icons/ai";

export function TaskHeader({ title, group }) {
    return (
        <section className='details-header'>
            <AiOutlineCreditCard className='primary-icon header-icon' />
            <textarea defaultValue={title} className='basic-textarea'></textarea>
            <div className="header-sub-title">
                in list <span> {group.title} </span>
            </div>
        </section>
    );
}
