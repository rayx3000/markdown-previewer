import React from 'react'
import './Previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faMaximize } from '@fortawesome/free-solid-svg-icons'

const Previewer = () => {
  return (
    <div className='previewer'>
      <div className="toolbar">
          <div className="toolbar-left">
            <FontAwesomeIcon icon={faFile} />
            <span>Previewer</span>
          </div>
          <div className="toolbar-right">
            <FontAwesomeIcon icon={faMaximize} />
          </div>
      </div>
      <div className="previewer-body"></div>
    </div>
  )
}

export default Previewer