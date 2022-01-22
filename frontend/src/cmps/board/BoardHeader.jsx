export function BoardHeader({board}) {
  return (
    <header className="board-header ">
      <nav className="main-nav flex align-center justify-space-between">
        <div className="nav-left flex">
          <h1 className="header-title flex align-center justify-center">Board Title</h1>
          <div className="nav-left-actions flex">
            <div className="nav-btn fav">
              <button>⭐</button>
            </div>
            <div className="nav-members">👤👤👤</div>
            <div className="nav-btn add-member">
              <button>➕</button>
            </div>
          </div>
        </div>
        <div className="nav-right flex">
          <button className="nav-btn">Dashbaord</button>
          <button className="nav-btn">*** Show Menu</button>
        </div>
      </nav>
    </header>
  );
}
