import Header from '../components/Header';

export default ({ children }) => (
  <React.Fragment>
    <style jsx global>{`
      body{
        margin: 0;
      }
    `}</style>

    <Header/>

    { children }
  </React.Fragment>
);