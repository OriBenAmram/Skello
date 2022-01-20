import { Link } from 'react-router-dom';
import { AiOutlineStar } from "react-icons/ai";

export function BoardList({ boards, onToggleFavorite }) {
    if (!boards?.length) return <></>
    return (
        <div className="board-list">
            {boards.map(board => {
                return (
                    <Link key={board._id} className="clean-link" to={`/board/${board._id}`}>
                        <div className="board-preview"
                            style={{ background: `${board.style.background} center center / cover` }}>

                            <div className="board-preview-details">
                                <h3>{board.title.length > 15 ? board.title.substring(0, 15) + '...' : board.title}</h3>
                                <AiOutlineStar className={`star-icon ${(board.isFavorite) ? 'favorite' : ''}`}
                                    onClick={(ev) => onToggleFavorite(ev, board._id)}
                                />
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

