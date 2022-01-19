import { Link } from 'react-router-dom'

// SERVICES
export function GroupPreview({ group }) {
    return (
        <Link to={`/group/${group._id}`}>
            <article className="group-preview">
                <h1>Preview</h1>
            </article>
        </Link>
    )
}