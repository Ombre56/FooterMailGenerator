import React from 'react'
import './App.scss';
import Form from './components/Form';
import img from './assets/image/herb.png';

function App() {
  const footerTxt = 'Copyright © 2022 by Krystian Heluszka <a href="https://www.ombre.tech">www.ombre.tech</a>. Wszelkie prawa zastrzeżone.';

  return (
    <>
      <header>
        <div className="left-side">
          <img className='image-herb' src={img} alt="Herb" />
        </div>
        <div className="center">
          <h1 className='title'>Generator kodu stopki</h1>
        </div>
        <div className="right-side">
          <img className='image-herb' src={img} alt="Herb" />
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
