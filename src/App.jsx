import React from 'react'
import './App.scss';
import Form from './components/Form';

function App() {
  const footerTxt = '© Stworzone przez Krystian Heluszka dla Urząd Miejski w Wołowie';

  return (
    <>
      <header className="App-header">
        <div className="left-side">
          <img className='image-herb' src="/assets/images/herb.png" alt="Herb" />
        </div>
        <div className="center">
          <h1 className='title'>Generator kodu stopki mailingowej</h1>
        </div>
        <div className="right-side">
          <img className='image-herb' src="/assets/images/herb.png" alt="Herb" />
        </div>
      </header>

      <section>
        <Form />
      </section>

      <footer>
        <div className="footer">
          {footerTxt}
        </div>
      </footer>
    </>
  );
}

export default App;
