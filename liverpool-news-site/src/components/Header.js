export function Header() {
  const headerStyle = {
    backgroundImage: 'url(/img/intro.png)',
  };


  return (
    <header className="main-header " style={headerStyle}>
      <div className="vertical">
        <div className="main-header-content inner">
          <h1 className="page-title">You'll Never Walk Alone</h1>
          <div className="entry-title-divider">
          </div>
          <h2 className="page-description">LIVERPOOL FC</h2>
        </div>
      </div>
      <a className="scroll-down icon-arrow-left" href="#content" data-offset="-45"><span className="hidden">Scroll Down</span></a>
    </header>
  )
}