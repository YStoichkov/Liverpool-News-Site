export function SingleNews() {
    
    let mainHeaderStyle = {
        backgroundImage: 'url(/img/random.jpg)',
    }

    let authorImageStyle = {
        backgroundImage: 'url(/img/gravatar.jpg)',
    }

    return (
        <div className="site-wrapper">

            <header className="main-header post-head " style={mainHeaderStyle}>
                <div className="vertical">
                    <div className="main-header-content inner">
                        <h1 className="post-title">Once Upon a Time</h1>
                        <div className="entry-title-divider">
                            <span></span><span></span><span></span>
                        </div>
                        <section className="post-meta">
                            <time className="post-date" dateTime="2015-12-13">13 December 2016</time> | <a className="scrolltocomments" href="#disqus_thread">Comments</a>
                        </section>
                    </div>
                </div>
            </header>
            <main id="content" className="content" role="main">
                <div className="wraps">
                    <img src="/img/shadow.png" className="wrapshadow" />
                    <article className="post featured">
                        <section className="post-content">
                            <p>
                                One day my employer decided to send me as a spy to find out the prices of fish and fish food at a competitive fish shop.I tried to behave like a casual customer and walked coolly into the competitor’s shop and gradually began to ask the prices of fish and fish food.After I had found out what was needed I bought a pair of cheap Black Mollies from his shop just to show him that I was a genuine customer.From the information I got, we found Ashok’s to be comparatively cheaper than the competitor.
                            </p>
                            <p>
                                <em>During this period I improved my knowledge about aquarium fish tremendously.This was mainly due to two things.Firstly, I had spent a lot of time observing the fish at Ashok’s shop and getting practical experience from the places we visited.</em>
                            </p>
                            <p>
                                <strong>Secondly, I had been reading the fish books that my father bought for me as a gift for getting a distinction in my SSC exam.The books were quite expensive but well worth the cost.Being able to get theoretical knowledge and practical experience at the same time gave me a lot of confidence with regard to aquarium fish.</strong>
                            </p>
                            <p>
                                One of the important highlights of my experience at Ashok’s was learning to make fish tanks.Ashok told me that since we were going through a slack period, he would teach me how to make fish tanks.I had to start from basics which meant purchasing glass for six tanks, having the glass pieces cut to specifications and then having the pieces delivered at the shop without a scratch.
                            </p>
                        </section>
                        <footer className="post-footer">
                            <figure className="author-image">
                                <a className="img" href="author.html" style={authorImageStyle}><span className="hidden">David's Picture</span></a>
                            </figure>
                            <section className="author">
                                <h4><a href="/author/ghosty/">David</a></h4>
                                <p>
                                    The blog combining journalist David&#x27; s years of experience covering fashion and culture for among others.Read my blog and you will learn how to become a fashion editor
                                </p>
                                <div className="author-meta">
                                    <span className="author-location icon-location">Europe</span>
                                    <span className="author-link icon-link"><a href="https://www.wowthemes.net">https://www.wowthemes.net</a></span>
                                </div>
                            </section>
                        </footer>
                        <div id="disqus_thread">
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}