import Link from 'next/link';

export default ({ children }) => (
  <React.Fragment>
    <style jsx global>{`
      body{
        margin: 0;
      }

      nav{
        padding: 1em 0;
      }

      nav ul{
        margin: 0 auto;
        padding: 0;
        display: flex;
        max-width: 50em;
        justify-content: space-around;
      }

      nav li{
        list-style: none;
        padding: 0;
        margin: 0;
      }

      nav a{
        text-decoration: none;
        color: inherit;
      }
    `}</style>

    <header>
      <nav>
        <ul>
          <li><Link><a href="/about">About</a></Link></li>
          <li><Link><a href="/work">Our Work</a></Link></li>
          <li><Link><a href="/locations">Locations</a></Link></li>
          <li><Link><a href="/volunteer">Volunteer</a></Link></li>
          <li><Link><a href="/donate">Donate</a></Link></li>
        </ul>
      </nav>
    </header>

    { children }
  </React.Fragment>
);