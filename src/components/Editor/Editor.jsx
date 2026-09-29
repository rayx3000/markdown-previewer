import { useState } from 'react'
import './Editor.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePen, faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'

const Editor = ({ setMarkdown, markdown }) => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (event) => {
    setMarkdown(event.target.value)
  }

  return (
    <section className={`editor-wrap${expanded ? ' expanded' : ''}`} aria-labelledby="editor-title">
      <div className="editor">
        <div className="toolbar">
          <div className="toolbar-left">
            <FontAwesomeIcon icon={faFilePen} aria-hidden="true" />
            <span id="editor-title">Editor</span>
          </div>
          <div className="toolbar-right">
            <button
              className="maximize"
              type="button"
              aria-label={expanded ? 'Restore editor size' : 'Expand editor'}
              aria-pressed={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              <FontAwesomeIcon icon={expanded ? faMinimize : faMaximize} aria-hidden="true" />
            </button>
          </div>
        </div>
        <textarea
          id="editor"
          aria-label="Markdown editor"
          value={markdown}
          onChange={handleChange}
          spellCheck="false"
        />
      </div>
    </section>
  )
}

export default Editor
