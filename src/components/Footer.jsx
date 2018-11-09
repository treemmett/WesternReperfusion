import React from 'react';
import './Footer.scss';

export default () => (
  <footer>
    <div className="newsletter">
      <p>Stay up to date</p>
      <p>Join our newsletter</p>
      <form>
        <input type="email" name="email" placeholder="Email" aria-label="Email" required/>
        <input type="submit" value="Sign Up"/>
      </form>
    </div>

    <div className="social">
      {/* eslint-disable-next-line*/}
      <a href="https://twitter.com/WReperfusion" target="_blank" rel="noopener noreferrer" className="tw" aria-label="Twitter"/>
      {/* eslint-disable-next-line*/}
      <a href="https://www.youtube.com/channel/UCKTN8XmuSnfXU8inAeDm1hw" target="_blank" rel="noopener noreferrer" className="yt" aria-label="YouTube"/>
      {/* eslint-disable-next-line*/}
      <a href="https://www.instagram.com/wreperfusion/" target="_blank" rel="noopener noreferrer" className="ig" aria-label="Instagram"/>
      {/* eslint-disable-next-line*/}
      <a href="https://www.facebook.com/Western-Reperfusion-493696127803906" target="_blank" rel="noopener noreferrer" className="fb" aria-label="Facebook"/>
    </div>
  </footer>
);