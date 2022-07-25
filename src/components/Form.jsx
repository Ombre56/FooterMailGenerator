import React, { useState } from 'react'
import GeneratorCode from './GeneratorCode'

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    department: "",
    position: "",
    telephone: "",
    email: "",
  });

  const [visibleButton, setVisibleButton] = useState(false);

  const handleChange = (e) => {
    setFormData(oldValues => ({
      ...oldValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVisibleButton(!visibleButton);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      surname: '',
      department: '',
      position: '',
      telephone: '',
      email: '',
    });
    setVisibleButton(!visibleButton);
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
                  maxLength={10}
                  value={formData.name}
                  onChange={handleChange}
                  id="form-name"
                  required={true}
                  placeholder='Wprowadź imie'
                />
              </div>

              <div className="input-surname">
                <label htmlFor="surname" className='form-input-title'>Nazwisko</label><br />
                <input
                  type="text"
                  name="surname"
                  maxLength={10}
                  value={formData.surname}
                  onChange={handleChange}
                  id="form-surname"
                  required={true}
                  placeholder='Wprowadź nazwisko'
                />
              </div>

              <div className="input-department">
                <label htmlFor="department" className='form-input-title'>Wydział</label><br />
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  id="form-department"
                  required={true}
                  placeholder='Wprowadź wydział'
                />
              </div>

              <div className="input-position">
                <label htmlFor="position" className='form-input-title'>Stanowisko</label><br />
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  id="form-position"
                  required={true}
                  placeholder='Wprowadź stanowisko'
                />
              </div>

              <div className="input-telephone">
                <label htmlFor="telephone" className='form-input-title'>Telefon</label><br />
                <input
                  type="text"
                  name="telephone"
                  maxLength={9}
                  pattern="[0-9]{1,9}"
                  title='Możesz tu wprowadzić tylko cyfry i maksymalnie (9)'
                  value={formData.telephone}
                  onChange={handleChange}
                  id="form-telephone"
                  required={true}
                  placeholder='Wprowadź numer telefonu'
                />
              </div>

              <div className="input-email">           
                <label htmlFor="email" className='form-input-title'>E-mail</label><br />
                <input
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@wolow.pl"
                  title='Możesz tu wprowadzić tylko email z domeną (wolow.pl)'
                  value={formData.email}
                  onChange={handleChange}
                  id="form-email"
                  required={true}
                  placeholder='Wprowadź adres mail'
                />
              </div>
            </div>

            <button type="reset" className='form-reset' onClick={handleReset}>Reset</button>
            <button type="submit" className='form-submit'>Generuj</button>
          </form>
        </div>
      </div>
      <div className="right-side">
        <GeneratorCode
          userData={formData}
          handleReset={handleReset}
          visibleButton={visibleButton}
        />
      </div>
    </div>
  )
}

export default Form