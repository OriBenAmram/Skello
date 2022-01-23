import React from "react"

export function AttachmentPreview({ attachment }) {


    return (
        <React.Fragment>
            <div className="attachment-preview" style={{ backgroundImage: `url(${attachment.url})` }}>
                <p className="attachment-details">
                    {/* <span className="attachment-name">trello_rvna.jpg</span> */}
                </p>
            </div>
        </React.Fragment>
    )
}