import React from 'react'
import './App.scss';
import Form from './components/Form';

function App() {
  const footerTxt = '© Stworzone przez Krystian Heluszka dla Urząd Miejski w Wołowie';

  return (
    <>
      <header>
        <div className="left-side">
          <img className='image-herb' src="/assets/images/herb.png" alt="Herb" />
        </div>
        <div className="center">
          <h1 className='title'>Generator kodu stopki</h1>
        </div>
        <div className="right-side">
          <img className='image-herb' src="/assets/images/herb.png" alt="Herb" />
        </div>
      </header>

      <section>
        <Form />
      </section>

      <footer>
        {footerTxt}
      </footer>
    </>
  );
}

export default App;
