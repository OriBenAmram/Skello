import React, { useState, useEffect } from 'react';
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank, MdMoreHoriz } from "react-icons/md";

export function PopoverFilterUser({ member, setFilterBy, filterBy }) {

    const [checkedUserField, setCheckedUserField] = useState(false)

    const handleFilter = (memberId) => {
        const fieldCurrStatus = !checkedUserField;
        let members;
        if (fieldCurrStatus) {
            console.log('true');
            members = [...filterBy.members, memberId]
        } else {
            members = filterBy.members.filter(entityId => entityId !== memberId)
        }
        setFilterBy({ ...filterBy, members })
        setCheckedUserField(fieldCurrStatus)
    }

    if (!member) return <></>
    return (<li key={member._id} onClick={() => {
        handleFilter(member._id)
    }

    }>
        <div className="user-preview-container flex">
            {(!checkedUserField) ?
                <MdCheckBoxOutlineBlank
                    className="check-box-blank"

                /> : <IoCheckbox
                    className="check-box-checked"
                />}
            <div className="user-info">
                <div className="user-img-container">
                    <img src={member.imgUrl} alt="" />
                </div>
                <span className="user-name">{member.fullname}</span>
            </div>
        </div>

    </li>)
}