
import { TaskChecklistPreview } from './TaskChecklistPreview.jsx'


export function TaskChecklists({ task }) {



    if (!task.checklists?.length) return <></>

    return task.checklists.map(checklist => {
        // return <TaskChecklistPreview key={checklist.id} checklist={checklist} />
    })

}