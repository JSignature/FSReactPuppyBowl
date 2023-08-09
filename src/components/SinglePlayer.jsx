import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { getSinglePlayer, deletePlayer } from '../API/routes'
import { useParams, useNavigate } from 'react-router-dom'

const SinglePlayer = () => {
  const params = useParams()
  const navigate = useNavigate()
  console.log(params)

  const [player, setPlayer] = useState({})

  useEffect(() => {
    async function fetchData() {
      const data = await getSinglePlayer(params.id)
      setPlayer(data)
    }
    fetchData()
  }, [])

  function handleDelete(id) {
    deletePlayer(id)
    navigate(`/ `)
  }

  return (
    <>
      <h1>Work in progress, MVP ONLY</h1>
      <NavBar />

      <div>
        <p>{player.name}</p>
        <button onClick={() => handleDelete(player.id)}>Delete</button>
      </div>
    </>
  )
}

export default SinglePlayer
