import { useState } from 'react'
import './App.scss'
import './PlaylistBlock'
import PlaylistBlock from './PlaylistBlock'

function App() {
  const [playlists, setPlaylists] = useState([])

  const addPlaylist = () => {
    setPlaylists([...playlists, { id: Date.now(), url: '', amount: 0 }])
  }

  const updatePlaylist = (id, newData) => {
    setPlaylists(
      playlists.map(p => (p.id === id ? { ...p, ...newData } : p))
    )
  }

  const createPlaylist = () => {
    console.log('All playlists:', playlists)
  }

  return (
    <>
      <div className='container'>
        <h1>Playlist Randomizer</h1>
        
        <input type='text' placeholder="API Key"></input>
      
        <div className='playlist-field'>
          {playlists.map((playlist) => (
            <PlaylistBlock
              key={playlist.id}
              data={playlist}
              onChange={(newData) => updatePlaylist(playlist.id, newData)}
            />
          ))}
        </div>
        
        <button onClick={addPlaylist}> Add playlist + </button>
        <button onClick={createPlaylist}> Create Playlist</button>
      </div>
    </>
  )
}

export default App
