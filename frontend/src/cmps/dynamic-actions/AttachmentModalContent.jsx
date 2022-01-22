import { GrClose } from "react-icons/gr";

export function AttachmentModalContent({ board, group, task, toggleModal }) {


    return (
        <section className='attachment-modal-content'>
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Attach from...
            </section>

            <div className="upload-pc-container flex align-center">
                <label for="upload-file-pc">Computer</label>
                <input type="file" accept="img/*" id="upload-file-pc"></input>
            </div>
            <div className="upload-url-container ">
                <label for="upload-file-url">Attach a link</label>
                <input type="text" accept="img/*" id="upload-file-url" placeholder="paste img link here"></input>
            </div>
            <button class="primary-btn">Attach</button>
        </section>
    )

}