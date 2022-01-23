import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export function TaskAdditionsShow({ board, task }) {
    const [taskLabels, setTaskLabels] = useState([]);

    useEffect(() => {
        setLabels()
    }, [board, task]);

    const onClickAvatar = (member) => {
        console.log('member:', member);
    }

    const onClickLabel = (label) => {

    }

    const getLabelById = (labelId) => {
        return board.labels.find(label => label.id === labelId)
    }

    const setLabels = () => {

        if (!task.labelIds?.length) return;
        let labels = task.labelIds.map(labelId => {
            const label = getLabelById(labelId)
            return label
        })
        // Why do I get undefined in one of them? The Details update happen later on after I activate this cmp, for some reason.
        labels = labels.filter(label => (label))
        setTaskLabels(labels)
    }

    return (
        <section className='details-additions-container'>
            {/* Members */}
            {task.members && <section className='type-container'>
                <h4>Members</h4>
                <div className='items-container'>
                    {task.members.map(member => <div style={{ backgroundColor: member.color }} className='member-avatar' key={member._id} onClick={() => {
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