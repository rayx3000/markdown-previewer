import { useState } from 'react'
import Editor from './components/Editor/Editor.jsx'
import Previewer from './components/Previewer/Previewer.jsx'
import './App.scss'

const initialMarkdown = `# Welcome to the Markdown Previewer!

Type in the editor and see your Markdown render here.

## Formatting

You can write **bold text**, *italic text*, and [links](https://www.marked.js.org/).

> Blockquotes work too.

- Create lists
- With multiple items

\`\`\`js
const greeting = 'Hello, Markdown!'
console.log(greeting)
\`\`\`

| Feature | Status |
| --- | --- |
| Live preview | Ready |
| Markdown | Ready |
`

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown)

  return (
    <main className="app">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer markdown={markdown} />
    </main>
  )
}

export default App
