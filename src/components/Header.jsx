import React from 'react';
import classNames from 'classnames';
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
    if((top < 0) !== this.state.opaque){
      this.setState({opaque: top < 0});
    }
  }

  render = () => (
    <header className={classNames({opaque: this.state.opaque})}>    
      <h1>Western Reperfusion</h1>
  
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/work">Our Work</a></li>
          <li><a href="/locations">Locations</a></li>
          <li><a href="/volunteer">Volunteer</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>
      </nav>
    </header>
  );

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
}