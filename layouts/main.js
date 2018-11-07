import Header from '../components/Header';

export default ({ children }) => (
  <React.Fragment>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700');

      body{
        margin: 0;
        font-family: 'Montserrat', sans-serif;
      }
    `}</style>

    <Header/>

    { children }
  </React.Fragment>
);