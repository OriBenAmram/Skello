
import { Link } from 'react-router-dom'
export function BoardList({ boards, onSetBoard }) {
    return (
        <div className="board-list">
            {boards.map(board => {
                return <Link key={board._id} className="clean-link" to={`/board/${board._id}`}>
                    <div className="board-preview"
                        onClick={() => onSetBoard(board._id)}
                        style={{ background: `${board.style.background} center center / cover` }}>
                        <div className="board-preview-details">
                            <h3>{board.title.length > 15 ? board.title.substring(0, 15) + '...' : board.title}</h3>
                        </div>
                    </div>
                </Link >
            })}
        </div >
    )
}

// ${board.style.background}