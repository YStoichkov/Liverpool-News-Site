export function Home() {

  const headerStyle = {
    backgroundImage: 'url(/img/background-image.jpg)',
  };
  return (
    <>
      <header className="main-header " style={headerStyle}>
        <a className="scroll-down icon-arrow-left" href="#content" data-offset="-45"><span className="hidden">Scroll Down</span></a>
      </header>,
      <main id="content" className="content" role="main">
        <div className="wraps">
          <img src="/img/shadow.png" className="wrapshadow" />
          <div className="grid">
            <div className="grid-item">
              <article className="post">
                <div className="wrapgriditem">
                  <header className="post-header">
                    <h2 className="post-title"><a href="article.html">Retro &amp; New</a></h2>
                  </header>
                  <section className="post-excerpt">
                    <p>
                      The house of Dr. Marsh being fully occupied, we made our beds in a shed, a short distance from it.
                      Suspended from one of the poles <a className="read-more" href="/retro-is-the-new-modern/">&raquo;</a>
                    </p>
                  </section>
                  <footer className="post-meta">
                    <img className="author-thumb" src="/img/gravatar.jpg" alt="David" nopin="nopin" />
                    <a href="author.html">David</a>
                    <time className="post-date" dateTime="2016-12-18">18 December 2016</time>
                  </footer>
                </div>
              </article>
            </div>
          </div>
          <nav className="pagination" role="navigation">
            <span className="page-number">Page 1 of 2</span>
            <a className="older-posts" href="page2.html">Older Posts &rarr;</a>
          </nav>
        </div>
      </main>
    </>
  )
}