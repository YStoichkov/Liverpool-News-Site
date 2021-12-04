import { useState, useEffect } from 'react';
import * as newsService from '../services/newsService.js';
import { LatestNews } from '../components/news/LatestNews.js'

export function Home() {
  const [latestNews, setNews] = useState([]);
  const headerStyle = {
    backgroundImage: 'url(/img/background-image.jpg)',
    width: '100%',
  };

  useEffect(() => {
    newsService.latestNews()
      .then(latest => {
        setNews(latest)
      })
  }, []);

  return (
    <>
      <header className="main-header " style={headerStyle}>
        <main>
          <div className="shell">
            <div className="container">
            <h1 className="text center">Latest News</h1>
              <div className="row">
                {latestNews.map(x => <LatestNews latestNews={x} key={x._id} />)}
              </div>
            </div>
          </div>
        </main>
      </header>
    </>
  )
}