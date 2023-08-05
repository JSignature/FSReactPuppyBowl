import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { getSinglePlayer } from '../API/routes'
import { useParams } from 'react-router-dom'

const SinglePlayer = () => {
  const params = useParams()
  console.log(params)

  const [player, setPlayer] = useState({})

  useEffect(() => {
    async function fetchData() {
      const data = await getSinglePlayer(params.id)
      setPlayer(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <NavBar />

      <div>
        <p>{player.name}</p>
      </div>
    </>
  )
}

export default SinglePlayer
