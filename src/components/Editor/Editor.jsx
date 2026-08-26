import React from 'react'
import './Editor.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePen, faMaximize } from '@fortawesome/free-solid-svg-icons'

const Editor = () => {
  return (
    <div className="editor-wrap">
      <div className="editor">
        <div className="toolbar">
          <div className="toolbar-left">
            <FontAwesomeIcon icon={faFilePen} />
            <span>Editor</span>
          </div>
          <div className="toolbar-right">
            <FontAwesomeIcon icon={faMaximize} />
          </div>
        </div>
        <textarea id="editor" type="text"></textarea>
      </div>
    </div>
  )
}

export default Editor
