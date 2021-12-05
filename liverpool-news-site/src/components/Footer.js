import { Link } from 'react-router-dom'

export function Footer() {

  return (
    <footer className="site-footer clearfix" >
      <div className="text-center">
        <Link to="/">Liverpool Fan Site</Link> &copy; 2021<br />
      </div>
    </footer>
  )
}