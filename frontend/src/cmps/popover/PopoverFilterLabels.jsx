import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank, MdMoreHoriz } from "react-icons/md";

// Blind-Mode
import redBlindColorSign from '../../assets/imgs/blind-color/red.svg';
import purpleBlindColorSign from '../../assets/imgs/blind-color/purple.svg';
import yellowBlindColorSign from '../../assets/imgs/blind-color/yellow.svg';
import greenBlindColorSign from '../../assets/imgs/blind-color/green.svg';
import blueBlindColorSign from '../../assets/imgs/blind-color/blue.svg';
import buggerBlindColorSign from '../../assets/imgs/blind-color/bugger-green.svg';
import darkBlindColorSign from '../../assets/imgs/blind-color/dark-navy.svg';
import lightBlueBlindColorSign from '../../assets/imgs/blind-color/light-blue.svg';
import orangeBlindColorSign from '../../assets/imgs/blind-color/orange.svg';
import pinkBlindColorSign from '../../assets/imgs/blind-color/pink.svg';

export function PopoverFilterLabels({ label, setFilterBy, filterBy }) {
    const [checkedLabelField, setCheckedLabelField] = useState(false)
    const isBlindMode = useSelector(state => state.appModule.isBlindMode);

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

    const getColorBlindSignByColor = (color) => {
        switch (color) {
            // red
            case '#ed5a46':
                return redBlindColorSign
            // purple
            case '#c377e0':
                return purpleBlindColorSign
            // yellow
            case '#f2d600':
                return yellowBlindColorSign
            // green
            case '#61bd4f':
                return greenBlindColorSign
            // blue
            case '#0079bf':
                return blueBlindColorSign
            // bugger
            case '#51e898':
                return buggerBlindColorSign
            // dark-navy
            case '#344563':
                return darkBlindColorSign
            // light-blue
            case '#00c2e0':
                return lightBlueBlindColorSign
            // orange
            case '#ff9f1a':
                return orangeBlindColorSign
            // pink
            case '#ff78cb':
                return pinkBlindColorSign

            default:
                return redBlindColorSign
        }
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
            <div className={`label-preview-bg ${(isBlindMode) ? 'blind-mode' : ''}`} style={{ backgroundColor: label.color }}>
                <span className="label-text">{(label.title) ? label.title : ''}</span>
                {isBlindMode && <div>
                    <img className='blind-color-sign-expended-svg' src={getColorBlindSignByColor(label.color)} />
                    <img className='blind-color-sign-expended-svg' style={{ top: '16px' }} src={getColorBlindSignByColor(label.color)} />
                </div>}
            </div>
        </li>
    )
}