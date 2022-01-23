import { ImAttachment } from "react-icons/im";
import { AttachmentPreview } from "./AttachmentPreview";


export function TaskAttachments({ task }) {

    const { attachments } = task;

    const elAttachments = attachments.map(attachment => <AttachmentPreview key={attachment.id} attachment={attachment} />)
    return (
        <div className="task-attachments-container">
            <div className="title-container">
                <ImAttachment className="attach-icon primary-icon" />
                <h3>Attachments</h3>
            </div>

            <div className="attachments-container">
                {/* <div> */}
                <div className="attachment-list">
                    {elAttachments}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}