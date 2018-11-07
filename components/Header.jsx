import Link from 'next/link';
import './Header.scss';

export default () => (
  <header>    
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