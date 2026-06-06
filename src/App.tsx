import { useState, useEffect } from 'react'
import NoteEditor from './NoteEditor'
import NoteList from './NoteList'
import type { Note } from './types'

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem('notes')
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (title: string, body: string) => {
    const newNote: Note = {
      id: Date.now().toString() + Math.random().toString(36).slice(2),
      title,
      body,
      createdAt: new Date().toISOString()
    }
    setNotes(prev => [newNote, ...prev])
  }

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id))
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>📝 My Notes</h1>
      <NoteEditor onSave={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  )
}

export default App