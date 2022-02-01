import { useRef, useEffect, useState } from "react"
import { useDispatch } from 'react-redux';

// CMPS
import { ProfileModalContent } from './ProfileModalContent.jsx'
import { AddMemberModalContent } from './AddMemberModalContent.jsx'
import { TaskProfileMemberModal } from './TaskProfileMemberModal.jsx'
import { OtherMemberModalContent } from './OtherMemberModalContent.jsx'
import { CreateBoardContent } from "./CreateBoardContent.jsx";
import { SpeechToTextModalContent } from "./SpeechToTextMoadlContent.jsx";

export function DynamicBoardActionModal({ isListening, members, isModalOpen, extraMembers,
    member, onToggleModal, boardTitle, type, event, posXAddition = 0, posYAddition = 0, task, groupId }) {
    const dispatch = useDispatch();

    const [windowWidth, setWidth] = useState(window.innerWidth);
    const [windowHeight, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions)
        };
    }, []);

    // const wrapperRef = useRef(null)
    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside, false);
    //     };
    // }, []);

    const handleClickOutside = async (ev) => {
        // dispatch(toggleModal({ event: ev, type: 'profile' }))
        // if (isModalOpen && wrapperRef.current) {
        //     console.log('from handle click outside')
        //     await onToggleModal({ev, type: 'profile'})
        // }
    }

    const getContentForDisplay = () => {
        switch (type) {
            case 'profile':
                return <ProfileModalContent onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} />
            // case 'boards':
            //     return <BoardsModalContent onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} />
            case 'addMemberToBoard':
                return <AddMemberModalContent onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} />
            case 'extraMembers':
                return <AddMemberModalContent onToggleModal={onToggleModal} isExtra={true} extraMembers={extraMembers} type={type} />
            case 'createBoard':
                return <CreateBoardContent boardTitle={boardTitle} onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} isGeneralModal={true} />
            case 'otherMemberModal':
                return <OtherMemberModalContent member={member} onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} />
            case 'taskProfileMemberModal':
                return <TaskProfileMemberModal groupId={groupId} task={task} member={member} onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} />
            case 'stt':
                return <SpeechToTextModalContent isListening={isListening} onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} event={event} isGeneralModal={true} />
        }
    }
    const getModalPositionStyle = () => {
        const { top, left, height, right, width } = event.target.getBoundingClientRect();
        if (type === 'stt') return { top: top + height + 20, left: left - 160, border: 'none', width: '405px' }
        const sideStart = (windowWidth < 550) ? 'right' : 'left'
        const sideStartValue = (windowWidth < 550) ? 10 : left
        if (type === 'profile') return { top: top + height + posYAddition, right: '10px', border: 'none' }

        return { top: top + height + posYAddition, [sideStart]: sideStartValue + posXAddition + 'px', border: 'none' }
        return { top: top + height + posYAddition, left: left + posXAddition }
    }
    if (!event) return <></>
    return (
        <section className='dynamic-action-modal' style={getModalPositionStyle()}>
            {getContentForDisplay()}
        </section>
    )
}