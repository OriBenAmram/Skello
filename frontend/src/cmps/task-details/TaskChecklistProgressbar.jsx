export function TaskChecklistProgressbar({ checklist }) {

    const getTodosProgressData = () => {
        const { todos } = checklist
        const doneTodosAmount = todos.filter(todo => todo.isDone).length;
        const progress = (!doneTodosAmount) ? 0 : doneTodosAmount / todos.length * 100;
        return Math.floor(progress);
    }



    return (
        <section className="checklist-progress">
            <div className="checklist-progress-bar">
                <div className={`checklist-progress-bar-current
                 ${(getTodosProgressData() === 100) ? 'done' : ''}`}
                    style={{ width: getTodosProgressData() + '%' }} >
                </div>
            </div>
            <span className="checklist-progress-percentage">
                {getTodosProgressData() + '%'}
            </span>
        </section>
    )
}




