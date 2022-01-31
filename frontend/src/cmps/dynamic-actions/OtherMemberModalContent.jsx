import { useDispatch, useSelector } from 'react-redux';

// Actions
import { onSaveBoard } from '../../store/board/board.action';

export function OtherMemberModalContent({ onToggleModal, member }) {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boardModule.board);

  const getAvatarByUser = () => {
    return { background: `url(${member.imgUrl}) center center / cover` };
  };

  const onRemoveMember = (event, member) => {
    const memberIdx = board.members.findIndex(memberToFind => memberToFind._id === member._id);
    if (memberIdx >= 0) {
      board.members.splice(memberIdx, 1);
      const newBoard = { ...board, members: [...board.members] };
      dispatch(onSaveBoard(newBoard));
      onToggleModal({ event, type: 'addMemberToBoard' });
    }
  };

  return (
    <section className="other-member-modal-content">
      <button
        className="simple-close-btn"
        onClick={event => {
          onToggleModal({ event, type: 'otherMemberModal' });
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
          Remove from board
        </button>
      </div>
    </section>
  );
}
