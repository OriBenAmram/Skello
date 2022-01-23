import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GrClose } from "react-icons/gr";
import { utilService } from '../../services/util.service.js';
import { addFile } from '../../store/board/board.action.js'


export function AttachmentModalContent({ board, group, task, toggleModal }) {

    const [attachData, setAttachData] = useState({ link: null, linkTxt: '' });
    const dispatch = useDispatch();



    const onAttachLink = (ev) => {
        ev.preventDefault();
        const { linkTxt } = attachData;
        if (!linkTxt) return;
        console.log('linkTxt:', linkTxt);

        const isValid = utilService.isValidUrl(linkTxt)
        if (isValid) onAddFile(linkTxt)
    }

    // const onFileUpload = (fileUrl) => {
    //     addFile(fileUrl)
    // }

    const onAddFile = (fileUrl) => {
        console.log('adding');
        dispatch(addFile(board, group.id, task.id, fileUrl))
    }


    return (
        <section className='attachment-modal-content'>
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Attach from...
            </section>

            <div className="upload-pc-container flex align-center">
                <label htmlFor="upload-file-pc">Computer</label>
                <input type="file" accept="img/*" id="upload-file-pc"></input>
            </div>
            <div className="upload-url-container ">
                <label htmlFor="upload-file-url">Attach a link</label>
                <input type="text" accept="img/*" id="upload-file-url" onChange={(ev) => setAttachData({ ...attachData, linkTxt: ev.target.value })} placeholder="paste img link here"></input>
            </div>
            <button className="primary-btn" onClick={(ev) => onAttachLink(ev)}>Attach</button>
        </section>
    )

}