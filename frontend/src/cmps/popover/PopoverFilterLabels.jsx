import React, { useState, useEffect } from 'react';
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank, MdMoreHoriz } from "react-icons/md";

export function PopoverFilterLabels({ label, setFilterBy, filterBy }) {
    const [checkedLabelField, setCheckedLabelField] = useState(false)

    const handleFilter = () => {
        const fieldCurrStatus = !checkedLabelField;
        let labels;
        if (fieldCurrStatus) {
            labels = [...filterBy.labels, label.id]
        } else {
            labels = filterBy.labels.filter(labelId => labelId !== label.id)
        }
        setFilterBy({ ...filterBy, labels })
        setCheckedLabelField(fieldCurrStatus)
    }


    return (
        <li className="labels-filter-preview" onClick={handleFilter}>
            <div className="label-filter-container">
                {(!checkedLabelField) ?
                    <MdCheckBoxOutlineBlank
                        className="check-box-blank"

                    /> : <IoCheckbox
                        className="check-box-checked"
                    />}
            </div >
            <div className="label-preview-bg" style={{ backgroundColor: label.color }}>
                <span>{(label.title) ? label.title : ''}</span>
            </div>
        </li>
    )
}