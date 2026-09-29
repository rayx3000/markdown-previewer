import { useState } from 'react'
import { marked } from 'marked'
import './Previewer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons'

marked.setOptions({ gfm: true, breaks: true })

const Previewer = ({ markdown }) => {
  const [expanded, setExpanded] = useState(false)
  const previewHtml = marked.parse(markdown ?? '', { async: false, gfm: true, breaks: true })

  return (
    <section className={`previewer${expanded ? ' expanded' : ''}`} aria-labelledby="previewer-title">
      <div className="toolbar">
        <div className="toolbar-left">
          <FontAwesomeIcon icon={faFile} aria-hidden="true" />
          <span id="previewer-title">Previewer</span>
        </div>
        <div className="toolbar-right">
          <button
            className="maximize"
            type="button"
            aria-label={expanded ? 'Restore preview size' : 'Expand preview'}
            aria-pressed={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            <FontAwesomeIcon icon={expanded ? faMinimize : faMaximize} aria-hidden="true" />
          </button>
        </div>
      </div>
      <article
        id="preview"
        className="previewer-body markdown-body"
        dangerouslySetInnerHTML={{ __html: previewHtml }}
      />
    </section>
  )
}

export default Previewer
