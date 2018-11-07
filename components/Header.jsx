import Link from 'next/link';

export default () => (
  <header>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700');

      header{
        padding: 2.3em 2em;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        text-transform: uppercase;
      }

      h1{
        display: inline;
        margin: 0;
        font-size: 26px;
        color: #f0a202;
      }

      nav{
        margin-left: auto;
        position: relative;
      }

      ul{
        margin: 0 auto;
        padding: 0;
        display: flex;
        justify-content: flex-end;
      }

      li{
        list-style: none;
        padding: 0;
        margin: 0;
        margin-left: 2em;
      }

      a{
        text-decoration: none;
        color: inherit;
        font-size: 26px;
        color: #222;
        transition: color 0.1s ease-in-out;
      }

      a:hover{
        color: #59cd90;
      }
    `}</style>
    
    <h1>Western Reperfusion</h1>

    <nav>
      <ul>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/work"><a>Our Work</a></Link></li>
        <li><Link href="/locations"><a>Locations</a></Link></li>
        <li><Link href="/volunteer"><a>Volunteer</a></Link></li>
        <li><Link href="/donate"><a>Donate</a></Link></li>
      </ul>
    </nav>
  </header>
);