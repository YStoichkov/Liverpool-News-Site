export function Footer() {

  const footerStyle = {
    backgroundColor: 'red',
    position: 'absolute',
    marginTop: '100vh',
    display: 'block',
    width: '100 %'
  }

  return (
    <footer className="site-footer clearfix">
      <a href="#top" id="back-to-top" className="back-top"></a>
      <div className="text-center">
        <a href="index.html">Liverpool Fan Site</a> &copy; 2021<br />
      </div>
    </footer>
  )
}