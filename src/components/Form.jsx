import React, { useState } from 'react'
import GeneratorCode from './GeneratorCode'

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const handleReset = () => {
    setName('');
    setSurname('');
    setDepartment('');
    setPosition('');
    setTelephone('');
    setEmail('');
  };

  const sendDate = () => {
    setName(name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReset();
    console.log(name, surname, department, position, telephone, email)
  };

  return (
    <div className='generator-footer'>
      <div className="left-side">
        <div className="form-input">
          <form onSubmit={handleSubmit}>
            <div className="form-cotainer">
              <div className="input-name">
                <label htmlFor="name" className='form-input-title'>Imię</label><br />
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="form-name"
                  required={true}
                  placeholder='Wprowadź imie...'
                />
              </div>

              <div className="input-surname">
                <label htmlFor="surname" className='form-input-title'>Nazwisko</label><br />
                <input
                  type="text"
                  name="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  id="form-surname"
                  required={true}
                  placeholder='Wprowadź nazwisko...'
                />
              </div>

              <div className="input-department">
                <label htmlFor="department" className='form-input-title'>Wydział</label><br />
                <input
                  type="text"
                  name="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  id="form-department"
                  required={true}
                  placeholder='Wprowadź wydział...'
                />
              </div>

              <div className="input-position">
                <label htmlFor="position" className='form-input-title'>Stanowisko</label><br />
                <input
                  type="text"
                  name="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  id="form-position"
                  required={true}
                  placeholder='Wprowadź stanowisko...'
                />
              </div>

              <div className="input-telephone">
                <label htmlFor="telephone" className='form-input-title'>Telefon</label><br />
                <input
                  type="text"
                  name="telephone"
                  minLength={9}
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  id="form-telephone"
                  required={true}
                  placeholder='Wprowadź numer telefonu...'
                />
              </div>

              <div className="input-email">           
                <label htmlFor="email" className='form-input-title'>E-mail</label><br />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="form-email"
                  required={true}
                  placeholder='Wprowadź adres mail...'
                />
              </div>
            </div>

            <button type="reset" className='form-reset' onClick={handleReset}>Reset</button>
            <button type="submit" className='form-submit' onClick={() => sendDate()}>OK</button>
          </form>
        </div>
      </div>
      <div className="right-side">
        <GeneratorCode sendDate={name}/>
      </div>
    </div>
  )
}

export default Form