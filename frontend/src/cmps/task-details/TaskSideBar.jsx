import { AiOutlineTags, AiOutlineCheckSquare, AiOutlineFieldTime, AiOutlineCopy } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BsPersonPlus, BsArrowRight, BsArchive } from "react-icons/bs";

export function TaskSideBar() {
    return (
        <section className='side-bar'>
            <section className='add-to-card'>
                <h3>suggested</h3>
                <button className="button-link"> <IoPersonOutline /> Join</button>
            </section>

            <section className='add-to-card'>
                <h3>Add to card</h3>
                <button className="button-link"> <BsPersonPlus /> Members</button>
                <button className="button-link"> <AiOutlineTags /> Labels</button>
                <button className="button-link"> <AiOutlineCheckSquare />  Checklist</button>
                <button className="button-link"> <AiOutlineFieldTime /> Dates</button>
                {/* <button className="button-link"> <MdOutlineAttachment /> Attachment</button> */}
            </section>
            <section className='actions'>
                <h3>Actions</h3>
                <button className="button-link"> <BsArrowRight /> Move</button>
                <button className="button-link"> <AiOutlineCopy />Copy</button>
                <button className="button-link"> <BsArchive /> Archive</button>
            </section>
        </section>
    );
}
