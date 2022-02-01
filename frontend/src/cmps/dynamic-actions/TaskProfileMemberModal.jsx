import { useDispatch, useSelector } from 'react-redux';

// Actions
import { updateTask } from '../../store/board/board.action.js';

export function TaskProfileMemberModal({ onToggleModal, member, task, groupId }) {
    const dispatch = useDispatch();
    const board = useSelector(state => state.boardModule.board);

    const getAvatarByUser = () => {
        return { background: `url(${member.imgUrl}) center center / cover` };
    };

    const onRemoveMember = (event, member) => {
        console.log('removing from task..')
        console.log('task', task)
        console.log('groupId', groupId)
        const memberIdx = task.members.findIndex(currMember => currMember._id === member._id)
        if (memberIdx >= 0) {
            const taskToUpdate = { ...task };
            taskToUpdate.members.splice(memberIdx, 1);
            dispatch(updateTask(board._id, groupId, task.id, taskToUpdate));
            onToggleModal({ event, type: 'taskProfileMemberModal' });
        }
    };

    return (
        <section className="other-member-modal-content">
            <button
                className="simple-close-btn"
                onClick={event => {
                    onToggleModal({ event, type: 'taskProfileMemberModal' });
                }}>
                x
      </button>
            <div className="upper-section">
                <div style={getAvatarByUser()} className="other-member-expended-avatar"></div>
                <div className="user-unfo">
                    <h2>{member.fullname}</h2>
                    <p>{member.username}</p>
                </div>
            </div>
            <div className="lower-section">
                <button
                    onClick={event => {
                        onRemoveMember(event, member);
                    }}>
                    Remove from task
        </button>
            </div>
        </section>
    );
}
