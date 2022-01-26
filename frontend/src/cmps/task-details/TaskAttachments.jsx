import { ImAttachment } from "react-icons/im";

import { AttachmentPreview } from "./AttachmentPreview";


export function TaskAttachments({ task, group, board }) {

    const { attachments } = task;

    const elAttachments = attachments.map(attachment => <AttachmentPreview board={board} group={group} key={attachment.id} task={task} attachment={attachment} />)

    return (
        <div className="task-attachments-container">
            <div className="title-container">
                <ImAttachment className="attach-icon primary-icon" />
                <h3>Attachments</h3>
            </div>

            <div className="attachments-container">
                <div className="attachment-list">
                    {elAttachments}
                </div>
            </div>
        </div>
    )
}