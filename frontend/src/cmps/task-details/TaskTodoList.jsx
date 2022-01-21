import { TaskTodoPreview } from './TaskTodoPreview.jsx'


export function TaskTodoList({ checklist, onToggleTodo, onRemoveTodo }) {


    const elTodos = () => {
        return checklist.todos.map(todo =>
            <TaskTodoPreview
                key={todo.id}
                todo={todo}
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