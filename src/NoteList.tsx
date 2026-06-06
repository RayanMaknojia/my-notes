import { useState } from 'react'
import type { Note } from './types'

interface Props {
  notes: Note[]
  onDelete: (id: string) => void
}

function NoteList({ notes, onDelete }: Props) {
  const [selected, setSelected] = useState<Note | null>(null)

  return (
    <div>
      <h2>My Notes ({notes.length})</h2>
      {notes.length === 0 && <p>No notes yet. Create one above!</p>}
      {notes.map(note => (
        <div key={note.id} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '0.5rem' }}>
          <h3 style={{ cursor: 'pointer' }} onClick={() => setSelected(note)}>{note.title}</h3>
          <p style={{ fontSize: '0.8rem', color: '#888' }}>{new Date(note.createdAt).toLocaleString()}</p>
          <button onClick={() => onDelete(note.id)} style={{ color: 'red' }}>Delete</button>
        </div>
      ))}

      {selected && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '500px', width: '100%' }}>
            <h2 style={{ color: '#000000' }}>{selected.title}</h2>
            <p>{selected.body}</p>
            <p style={{ fontSize: '0.8rem', color: '#888' }}>{new Date(selected.createdAt).toLocaleString()}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NoteList