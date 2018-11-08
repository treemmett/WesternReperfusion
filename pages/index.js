import Page from '../layouts/main';
import { Parallax } from 'react-parallax';
import './index.scss';

export default () => (
  <Page>
    <div className="hero">
      <div className="tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <Parallax
      bgImage="/static/images/hero1.jpg"
      strength={150}
      blur={0.1}
    />
    </div>
    <section>
      <p>
        Sed at viverra turpis.
        Quisque rhoncus, tellus non facilisis interdum, libero tortor consectetur mauris, vel volutpat orci arcu vel leo.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Donec ultricies porttitor feugiat.
        Nam egestas nibh.
      </p>
    </section>
    <div className="hero">
      <Parallax
      bgImage="/static/images/hero2.jpg"
      strength={150}
      blur={0.1}/>
    </div>
    <section>
      <p>
        Aenean dignissim auctor nisi, non faucibus risus vehicula ut.
        Sed imperdiet maximus dui et auctor.
        Fusce dictum mi odio, non facilisis elit posuere sit amet.
        Nullam erat justo, interdum non sagittis eu, venenatis sed leo.
        Fusce eget sem magna.
        Praesent laoreet rhoncus risus, ac lobortis diam condimentum vel.
        Sed et augue commodo, scelerisque nisl ut, varius.
      </p>
    </section>
    <div className="hero">
      <Parallax
        bgImage="/static/images/hero3.jpg"
        strength={150}
        blur={0.1}/>
    </div>
  </Page>
);