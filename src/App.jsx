import { useState } from "react"
import { HomePage } from "./pages/HomePage"
import "./styles/index.scss"


function App() {

  const [listNotes, setListNotes] = useState([])

  const addNote = (title, value, type) => {
    const id = crypto.randomUUID();

    const newNote = {title, value: parseFloat(value), type, id};
    setListNotes([...listNotes, newNote])

  }

  const removeNote = (id) => {
    const filteredList = listNotes.filter((note) => {
      if(note.id !== id) {
        return note
      }
    } )
    setListNotes(filteredList)
  }

  return (
    <>
      <HomePage listNotes={listNotes} addNote={addNote} removeNote={removeNote} />
    </>
  )
}

export default App
