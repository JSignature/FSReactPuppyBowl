import { getAllPlayers } from '../API/routes'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'

const AllPlayers = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await getAllPlayers()
      setPlayers(data)
    }
    fetchData()
  }, [])

  const [players, setPlayers] = useState([])

  return (
    <>
      <NavBar />
      <div>
        {players.map(player => (
          <p key={player.id}>{player.name}</p>
        ))}
      </div>
    </>
  )
}

export default AllPlayers
