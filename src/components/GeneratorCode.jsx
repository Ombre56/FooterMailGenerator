import React from 'react'
import './GeneratorCode.scss';

function GeneratorCode({sendDate}) {
  return (
    <div className='code-box'>
      <code>
          {sendDate}
      </code>
    </div>
  )
}

export default GeneratorCode