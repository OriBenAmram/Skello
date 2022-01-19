
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
                    <AiOutlineCreditCard className='header-icon'/>
                    <textarea>app header bla bla</textarea>
                    <div className="header-sub-title">
                        <span>by Ori Ben Amram</span>
                    </div>
                </section>

                <section className='main-content'>
                    {/* Main-Col */}
                    <section className='main-col'>
                        {/* Description */}
                        <div className='description'>
                            <span>app description ma ma</span>
                        </div>
                        {/* Activities */}
                        <div className='activities'>

                        </div>
                    </section>

                    {/* Side-Bar */}
                    <section className='side-bar'>
                        <section className='suggested'>

                        </section>
                        <section className='add-to-card'>

                        </section>
                        <section className='actions'>
                        </section>
                    </section>

                </section>

            </div>
        </section>
    )
}