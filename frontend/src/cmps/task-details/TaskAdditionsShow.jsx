import React, { useState, useEffect } from 'react';
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import femaleGuest from '../../assets/imgs/female-guest.svg';


// Cmps
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'
import { DatePreview } from '../dynamic-actions/DatePreview.jsx';

export function TaskAdditionsShow({ board, group, task }) {
    const [taskLabels, setTaskLabels] = useState([]);
    const [modal, setModal] = useState({ isModalOpen: false, type: null });

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


    const toggleModal = ({ event, type }) => {
        console.log('type:', type);
        console.log('event:', event);


        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }
        setModal({ isModalOpen: true, type, event })
    }

    const getAvatarInnerText = (member) => {
        if (member.imgUrl) return ''
        return member.fullname.charAt(0).toUpperCase()
    }

    const getAvatarBackground = (member) => {
        if (!member) return {}
        if (member.fullname === 'Guest') return { background: `url(${femaleGuest}) center center / cover` }
        if (member.url) return { background: `url(${member.url}) center center / cover` }
        return { backgroundColor: member.color }
    }

    return (
        <section className='details-additions-container'>
            {/* Members */}
            {task.members && <section className='type-container'>
                <h4>Members</h4>
                <div className='items-container'>
                    {task.members.map(member => <div key={member.fullname} className={`member-avatar ${(member.imgUrl) ? 'with-image' : ''}`} style={getAvatarBackground(member)} onClick={() => {
                        onClickAvatar(member)
                    }}>
                        {getAvatarInnerText(member)}
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
                    <div className='label-box plus-item' onClick={(event) => {
                        toggleModal({ event, type: 'labels' })
                    }}>+</div>
                </div>
            </section>}

            {/* DueDate */}

            {task.dueDate &&

                <section className="type-container">
                    <h4>Due date</h4>
                    <div className="items-container flex align-center" >

                        <DatePreview
                            toggleModal={toggleModal}
                            board={board}
                            groupId={group.id}
                            task={task}
                        // onClick={(ev) => {
                        //     console.log('baba')

                        // }




                        />

                    </div>
                </section>}
            {modal.isModalOpen && <DynamicActionModal event={modal.event} task={task} group={group} board={board} toggleModal={toggleModal} type={modal.type} />}
        </section>
    );
}

