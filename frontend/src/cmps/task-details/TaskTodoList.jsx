import { TaskTodoPreview } from './TaskTodoPreview.jsx'

export function TaskTodoList({ checklist, onToggleTodo, onRemoveTodo, onSaveTodo }) {

    const elTodos = () => {
        return checklist.todos.map((todo, index) =>
            <TaskTodoPreview
                key={index}
                todo={todo}
                onSaveTodo={onSaveTodo}
                onToggleTodo={onToggleTodo}
                onRemoveTodo={onRemoveTodo}
            />)

    }

    return (
        <section className="todo-list">
            {elTodos()}
        </section>
    )
}