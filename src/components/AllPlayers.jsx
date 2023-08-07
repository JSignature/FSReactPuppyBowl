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
  const [searchValue, setSearchValue] = useState('')
  // console.log(searchValue)
  const navigate = useNavigate()
  function handleClick(id) {
    navigate(`/players/${id}`)
    console.log(id)
  }
  const filteredPlayers = players.filter(player =>
    player.name.includes(searchValue)
  )

  console.log(filteredPlayers)

  return (
    <>
      <NavBar />
      <div>
        <label for="site-search">Search puppies:</label>
        <input
          type="search"
          id="site-search"
          name="q"
          onChange={e => {
            setSearchValue(e.target.value)
          }}
        />
      </div>
      <div>
        {searchValue ? (
          <div>
            {filteredPlayers.map(player => (
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
        ) : (
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
        )}
      </div>
    </>
  )
}

export default AllPlayers
