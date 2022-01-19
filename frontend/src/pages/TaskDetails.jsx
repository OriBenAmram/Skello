
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
export function TaskDetails() {


    return (
        <section className='task-details-page'>


            <div className="task-details-modal">
                {/* Cover */}
                <section className='details-cover'>

                </section>
                {/* Details-header */}
                <section className='details-header'>
                    <AiOutlineCreditCard className='header-icon' />
                    <textarea>app header bla bla</textarea>
                    <div className="header-sub-title">
                        <span>by Ori Ben Amram</span>
                    </div>
                </section>

                <section className='main-content'>
                    {/* Main-Col */}
                    <section className='main-col'>
                        {/* Description */}
                        <div className='description-container'>
                            <div className="description-title-container">
                                <h3>Description</h3>
                            </div>
                            <textarea placeholder="Add a more detailed description..." className="description-text-area"></textarea>
                            <div className="description-edit-container">
                                <div>
                                    <button className="save-btn">Save</button>
                                    <button className="primary-close-btn">X</button>
                                </div>
                                <button>Formatting help</button>
                            </div>
                        </div>
                        {/* Activities */}
                        <div className='activities'>
                            Activities
                        </div>
                    </section>

                    {/* Side-Bar */}
                    <section className='side-bar'>
                        <section className='suggested'>
                            suggested
                        </section>
                        <section className='add-to-card'>
                            add to card
                        </section>
                        <section className='actions'>
                            actions
                        </section>
                    </section>

                </section>

            </div>
        </section>
    )
}