import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export function TaskAdditionsShow({ board, task }) {
    const [taskLabels, setTaskLabels] = useState([]);

    useEffect(() => {
        setLabels()
    }, []);

    const onClickAvatar = (member) => {
    }

    const onClickLabel = (label) => {

    }

    const getLabelById = (labelId) => {
        return board.labels.find(label => {
            return label.id === labelId
        })
    }

    const setLabels = () => {
        const labels = task.labelIds.map(labelId => {
            const label = getLabelById(labelId)
            return label
        })
        setTaskLabels(labels)
    }

    return (
        <section className='details-additions-container'>
            {/* Members */}
            {task.members && <section className='type-container'>
                <h4>Members</h4>
                <div className='items-container'>
                    {task.members.map(member => <div style={{ backgroundColor: 'pink' }} className='member-avatar' key={member._id} onClick={() => {
                        onClickAvatar(member)
                    }}>
                        {member.fullname.charAt(0).toUpperCase()}
                    </div>)}
                    <div className='plus-item member-avatar'>+</div>
                </div>
            </section>}
            {/* Labels */}
            {taskLabels && <section className='type-container'>
                <h4>Labels</h4>
                <div className='items-container'>
                    {taskLabels.map(label => <div style={{ backgroundColor: `${label.color}` }} className='label-box' key={label.id} onClick={() => {
                        onClickLabel(label)
                    }}>
                        {label.title}
                    </div>)}
                    <div className='label-box plus-item'>+</div>
                </div>
            </section>}

        </section>
    );
}