import { useState } from 'react'
import './App.scss'

function PlaylistBlock({ data, onChange }) {
  const handleUrlChange = (e) => {
    onChange({ url: e.target.value })
  }

  const handleAmountChange = (e) => {
    onChange({ amount: Number(e.target.value) })
  }

  return (
    <>
      <div className='playlist-block'>
        <input type="text" placeholder='Spotify URL' onChange={handleUrlChange} ></input>
        <input type="number" placeholder='Number of songs' onChange={handleAmountChange} ></input>
      </div>
    </>
  )
}

export default PlaylistBlock
