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
  </footer>
);