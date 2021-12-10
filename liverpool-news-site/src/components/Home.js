import { useState, useEffect } from 'react';
import * as newsService from '../services/newsService.js';
import LatestNews from '../components/news/LatestNews.js'
import { LeagueTable } from './LeagueTable.js';

export function Home() {
  const [latestNews, setNews] = useState([]);
  const headerStyle = {
    backgroundImage: 'url(/img/background-image.jpg)',
    width: '100%',
  };

  useEffect(() => {
    newsService.latestNews()
      .then(latest => {
        latest.map(x => {
          let dateStringFormat = x.createdAt;
          let date = new Date(dateStringFormat);
          let result = date.toUTCString();
          x.createdAt = result;
        })
        setNews(latest)
      })
  }, []);

  return (
    <>
      <header className="main-header " style={headerStyle}>
        <main>
          <div className="center">
            <a href="https://www.liverpoolfc.com/hillsborough"><img src="https://d3j2s6hdd6a7rg.cloudfront.net/images/hillsborough/never-forgotten/never-forgotten-title-97.png" className="center" alt="hillsborough"/></a>
          </div>
          <h1 className="center" ><font face="Brush Script MT" size="+7">Latest News</font></h1>
          <div className="shell">
            <div className="container">
              <div className="row">
                {latestNews.map(x => <LatestNews latestNews={x} key={x._id} />)}
              </div>
            </div>
          </div>
        </main>
      </header>
      <div className="center">
        <h1 className="center"><font face="Brush Script MT" size="+7">Champions Wall: (1892-2021)</font></h1>
        <img src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/page_banner/0002/11/aa0024fde91a556201a3e18aced77ddcbcebaca9.jpeg" className="tablet" alt="banner" />
      </div>
      <br />
      <div>
        <img src='/img/premier-league.png' className='premLeagueBadge' alt="premLeagueBadge"/>
        <h1 className="text-black-50 text-center">Premier League Table 2021-2022</h1>
      </div>
      <LeagueTable />
      <h1 className="text-black-50 text-center">Main Club Sponsors</h1>
      <div id="shell" className="container" style={{ width: '100 %' }}>
        <div className="container" align="justify">
          <div className="row">
            <div className="column">
              <a href="http://www.standardchartered.com/home/en/index.html?camp_id=liverpool_source=liverpoolfctv_medium=4" title="Standard Chartered" target="_blank">
                <img src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/partnerlogo/0001/16/thumb_15152_partnerlogo_partner_footer.png" alt="Standard Chartered" />
              </a>
            </div>
            <div className="column">
              <a href="https://www.nike.com/gb/" title="Nike" target="_blank">
                <img src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/partnerlogo/0002/09/thumb_108617_partnerlogo_partner_footer.png" alt="Nike" />
              </a>
            </div>
            <div className="column">
              <a href="https://www.axa.com/?utm_source=liverpoolfc&amp;utm_medium=logo-partnership&amp;utm_campaign=lfc1819season" title="AXA" target="_blank" />
              <img src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/partnerlogo/0001/74/thumb_73714_partnerlogo_partner_footer.png" alt="AXA" />
            </div>
            <div className="column">
              <a href="https://www.expedia.co.uk/" title="Expedia" target="_blank">
                <img src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/partnerlogo/0002/21/thumb_120808_partnerlogo_partner_footer.png" alt="Expedia" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}