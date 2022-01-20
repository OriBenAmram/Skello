import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineCreditCard } from "react-icons/ai";


export function TaskHeader({ title }) {
    return (
        <section className='details-header'>
            <AiOutlineCreditCard className='primary-icon header-icon' />
            <textarea defaultValue={title}></textarea>
            <div className="header-sub-title">
                in list <span> todo </span>
            </div>
        </section>
    );
}
