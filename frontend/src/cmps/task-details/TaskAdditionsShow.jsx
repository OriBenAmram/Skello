import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// Cmps
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'
import { DatePreview } from '../dynamic-actions/DatePreview.jsx';

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

export function TaskAdditionsShow({ board, group, task }) {
    const dispatch = useDispatch();
    const isBlindMode = useSelector(state => state.appModule.isBlindMode);

    const [taskLabels, setTaskLabels] = useState([]);
    const [modal, setModal] = useState({ isModalOpen: false, type: null });

    useEffect(() => {
        setLabels()
    }, [board, task]);


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

    const onClickAvatar = (member) => {
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
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }
        setModal({ isModalOpen: true, type, event })
    }

    // const getAvatarInnerText = (member) => {
    //     if (member.imgUrl) return ''
    //     return member.fullname.charAt(0).toUpperCase()
    // }

    const getAvatarBackground = (member) => {
        if (member.imgUrl) return { background: `url(${member.imgUrl}) center center / cover` }
    }

    return (
        <section className='details-additions-container'>
            {/* Members */}
            {task.members && <section className='type-container'>
                <h4>Members</h4>
                <div className='items-container members-container'>
                    {task.members.map((member, idx) => <div key={idx} className={`member-avatar ${(member.imgUrl) ? 'with-image' : ''}`} style={getAvatarBackground(member)} onClick={() => {
                        onClickAvatar(member)
                    }}>
                        {/* {getAvatarInnerText(member)} */}
                    </div>)}
                    <div className='plus-item member-avatar' onClick={(event) => {
                        toggleModal({ event, type: 'members' })
                    }}>+</div>
                </div>
            </section>}
            {/* Labels */}
            {taskLabels && <section className='type-container'>
                <h4>Labels</h4>
                <div className='items-container'>
                    {taskLabels.map(label => <div style={{ backgroundColor: `${label.color}` }} className={`label-box ${(isBlindMode) ? 'blind-mode' : ''}`} key={label.id} onClick={() => {
                        onClickLabel(label)
                    }}>
                        {isBlindMode && <div>
                            <img className='blind-color-sign-expended-svg' src={getColorBlindSignByColor(label.color)} />
                            <img className='blind-color-sign-expended-svg' style={{ top: '16px' }} src={getColorBlindSignByColor(label.color)} />
                        </div>}
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
                        />

                    </div>
                </section>}
            {modal.isModalOpen && <DynamicActionModal event={modal.event} task={task} group={group} board={board} toggleModal={toggleModal} type={modal.type} />}
        </section>
    );
}

