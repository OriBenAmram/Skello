import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai';

// Services
import { socketService } from '../services/socket.service.js';

// Actions
import { onSaveBoard, loadBoards, setBoard } from '../store/board/board.action';

// Cmps
import { BoardList } from '../cmps/workspace/BoardList.jsx';
import { DynamicActionModal } from '../cmps/dynamic-actions/DynamicActionModal';

export function Workspace() {
    const dispatch = useDispatch();
    const boards = useSelector(state => state.boardModule.boards);
    const [modal, setModal] = useState({ isModalOpen: false, type: null });

    useEffect(() => {
        socketService.setup();
        socketService.emit('join-workspace', 'workspace');
        socketService.off('updated-board');
        socketService.on('updated-board', async updatedBoard => {
            await dispatch(setBoard(updatedBoard));
            onLoadBoards()
        });

        return () => {
            socketService.off('updated-board');
            socketService.terminate();
        }
    }, []);


    const onLoadBoards = async () => {
        await dispatch(loadBoards());
    }

    const getStarredBoards = () => {
        return boards?.filter(board => board.isStarred);
    };

    const onToggleStarred = (ev, boardId) => {
        ev.preventDefault();
        const board = boards.find(board => board._id === boardId);
        board.isStarred = !board.isStarred;
        dispatch(onSaveBoard(board));
    };

    const toggleModal = ({ event, type, isDetails }) => {
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false });
            return;
        }

        setModal({ isModalOpen: true, type, event, isDetails });
    };

    return (
        <section className="workspace-page">
            <section className="all-boards">
                <div className="content-all-boards">
                    <section className="stared-boards-section">
                        <div className="title-header">
                            <div className="title-header-icon-container">
                                <AiOutlineStar className="header-icon star-icon" />
                            </div>
                            <h3>Starred boards</h3>
                        </div>
                        <div className="primary-boards-container-section">
                            <BoardList boards={getStarredBoards()} onToggleStarred={onToggleStarred} isStarred />
                        </div>
                    </section>
                    <section className="recent-boards-section">
                        <div className="title-header">
                            <div className="title-header-icon-container">
                                <AiOutlineClockCircle className="header-icon star-icon" />
                            </div>
                            <h3>Recently viewed</h3>
                        </div>
                        <div className="primary-boards-container-section">

                            <BoardList boards={boards} onToggleStarred={onToggleStarred} toggleModal={toggleModal} />
                        </div>
                    </section>
                </div>
            </section>
            {modal.isModalOpen && (
                <DynamicActionModal toggleModal={toggleModal} type={modal.type} event={modal.event} isDetails={true} posXAddition={150} />
            )}
        </section>
    );
}
