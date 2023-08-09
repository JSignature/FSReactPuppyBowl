import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import CreatePlayer from './components/CreatePlayer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/createPlayer" element={<CreatePlayer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
