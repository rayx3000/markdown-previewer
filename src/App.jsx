import Editor from "../src/components/Editor/Editor.jsx"
import Previewer from "../src/components/Previewer/Previewer.jsx"
import './App.scss'

function App() {

  return (
    <>
      <div className="app">
        <Editor />
        <Previewer />
      </div>
    </>
  )
}

export default App
