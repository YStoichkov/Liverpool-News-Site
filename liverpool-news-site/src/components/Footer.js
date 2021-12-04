import { Link } from 'react-router-dom'

export function Footer() {

  return (
    <footer className="site-footer clearfix" >
      <a href="#top" id="back-to-top" className="back-top"></a>
      <div className="text-center">
        <Link to="/">Liverpool Fan Site</Link> &copy; 2021<br />
      </div>
    </footer>
  )
}