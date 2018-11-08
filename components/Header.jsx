import classNames from 'classnames';
import Link from 'next/link';
import './Header.scss';

export default class extends React.Component{
  constructor(){
    super();

    this.state = {
      opaque: false
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    // call scroll handler on mount
    this.handleScroll();
  }

  handleScroll = () => {
    const { top } = document.body.getBoundingClientRect();
    
    // update opqueness of header
    if(top < 0 !== this.state.opaque){
      this.setState({opaque: top < 0});
    }
  }

  render = () => (
    <header className={classNames({opaque: this.state.opaque})}>    
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

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
}