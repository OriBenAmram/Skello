// export function ExtraMembersModalContent({ toggleModal }) {




//     return (
//         <section className="users-modal-content">
//             <section className="modal-header">
//                 <button
//                     className="simple-close-btn"
//                     onClick={event => {
//                         onToggleModal({ event, type: 'addMemberToBoard' });
//                     }}>
//                     <GrClose className="btn-content" />
//                 </button>
//                 Invite to board
//             </section>
//             <section className="modal-content">
//                 <div className="modal-title">
//                     <input
//                         placeholder={`Search users`}
//                         type="text"
//                         className="modal-main-input"
//                         onChange={ev => {
//                             setFilterBy(ev.target.value);
//                         }}
//                         autoFocus
//                     />
//                     <h4>Board Members</h4>
//                     <section className="users-list">
//                         {getMembersForDisplay().map((member, index) => {
//                             return (
//                                 <div
//                                     key={index}
//                                     className="user-preview"
//                                     onClick={event => {
//                                         onAddMemberToBoard(event, member);
//                                     }}>
//                                     <div
//                                         className={`member-avatar ${member.imgUrl ? 'with-image' : ''}`}
//                                         style={getAvatarBackground(member)}></div>
//                                     <p>{member.fullname}</p>
//                                 </div>
//                             );
//                         })}
//                     </section>
//                 </div>
//             </section>
//         </section>
//     );
// }