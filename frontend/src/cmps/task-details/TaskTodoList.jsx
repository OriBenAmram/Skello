import { TaskTodoPreview } from './TaskTodoPreview.jsx'


export function TaskTodoList({ task }) {


    const elTodos = () => {
        return checklistData.todos.map(todo => <TaskTodoPreview key={todo.id} todo={todo} />)

    }


    return (
        <section className="todo-list">
            {elTodos}
        </section>
    )
}