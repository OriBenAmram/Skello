import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

export function BoardList({ boards, onToggleStarred, toggleModal, isStarred = false }) {
  if (!boards?.length) return <></>;

  return (
    <div className="board-list">
      {!isStarred && <div
        className="add-board-preview board-preview flex align-center justify-center"
        style={{ padding: '0' }}
        onClick={event => {
          console.log('baba');
          toggleModal({ event, type: 'createBoard', isDetails: true });
        }}>
        <span>Create new board</span>
      </div>}
      {boards.map(board => {
        return (
          <Link key={board._id} className="clean-link" to={`/board/${board._id}`}>
            <div
              className="board-preview "
              style={{ background: `${board.style.background} center center / cover` }}>
              <div className="board-preview-details">
                <h3>{board.title.length > 15 ? board.title.substring(0, 15) + '...' : board.title}</h3>
                <div className="starred-container">
                  <AiFillStar
                    className={`star-icon ${board.isStarred ? 'starred' : ''}`}
                    onClick={ev => onToggleStarred(ev, board._id)}
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
