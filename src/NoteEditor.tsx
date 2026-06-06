import { useState } from 'react'

interface Props {
  onSave: (title: string, body: string) => void
}

function NoteEditor({ onSave }: Props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSave = () => {
    if (!title.trim() || !body.trim()) return
    onSave(title, body)
    setTitle('')
    setBody('')
  }

  return (
    <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>New Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', boxSizing: 'border-box' }}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
        rows={4}
        style={{ display: 'block', width: '100%', marginBottom: '0.5rem', padding: '0.5rem', boxSizing: 'border-box' }}
      />
      <button onClick={handleSave}>Save Note</button>
    </div>
  )
}

export default NoteEditor