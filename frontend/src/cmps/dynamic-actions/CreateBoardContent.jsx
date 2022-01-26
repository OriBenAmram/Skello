import { GrClose } from "react-icons/gr";
import boardPreview from '../../assets/imgs/board-preview.svg';


export function CreateBoardContent({ toggleModal }) {

    const gColors = [
        // green
        '#61bd4f',
        //yellow
        '#f2d600',
        // orange
        '#ff9f1a',
        // red
        '#ed5a46',
        // pruple
        '#c377e0',
        // blue
        '#5BA4CF',
        // light blue
        '#00c2e0',
        // light green
        '#51e898',
        // pink
        '#ff78cb',
        // dark navy
        '#344563'
    ]

    const gImages = [
        { title: 'forest', url: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { title: 'bird', url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' },
        { title: 'kayak', url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' },
        { title: 'sunset', url: 'https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1408&q=80' },
        { title: 'bonfire', url: 'https://images.unsplash.com/photo-1619537903549-0981d6bca911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { title: 'jerusalem', url: 'https://images.unsplash.com/photo-1593019612399-86daa4d18cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }
    ]


    return (
        <section className="create-board-modal">
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Create Board
            </section>
            <section className="modal-details">
                <div className="board-preview" style={{ background: "#f2d600" }}>
                    <img src={boardPreview} alt="" />
                </div>
            </section>
        </section >
    )
}