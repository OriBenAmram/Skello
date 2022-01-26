import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';

import { GrClose } from 'react-icons/gr';

import { updateTask } from '../../store/board/board.action'

export function DatesModalContent({ toggleModal, board, task, group }) {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const dispatch = useDispatch()
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const onSetDate = (ev) => {
        task.dueDate = selectedDate ? Date.parse(selectedDate) : 0;
        toggleModal(ev)
        dispatch(updateTask(board._id, group.id, task.id, task))
    }


    return (
        <section className="dates-modal">
            <div className="details-container">

                <section className='modal-header'>
                    <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                    Dates
                </section>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="static"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

                <button className='secondary-btn'
                    onClick={(ev) => onSetDate(ev)}
                >
                    Save
                </button>


            </div>
        </section>

    )
}




