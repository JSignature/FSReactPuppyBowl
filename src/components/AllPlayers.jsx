import { getAllPlayers } from '../API/routes'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AllPlayers = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await getAllPlayers()
      console.log(data)
      setPlayers(data)
    }
    fetchData()
  }, [])

  const [players, setPlayers] = useState([])
  const navigate = useNavigate()
  function handleClick(id) {
    navigate(`/players/${id}`)
    console.log(id)
  }

  return (
    <>
      <NavBar />
      <div>
        {players.map(player => (
          <div key={player.id}>
            <img src={player.imageUrl} />
            <p>
              {player.id}
              {player.name}
            </p>
            <button onClick={() => handleClick(player.id)}>Details</button>
          </div>
        ))}{' '}
      </div>
    </>
  )
}

export default AllPlayers
