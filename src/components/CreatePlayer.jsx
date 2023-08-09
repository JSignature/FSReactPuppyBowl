import { useState } from 'react'
import { createPlayer } from '../API/routes'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'

const CreatePlayer = () => {
  const [puppyName, setPuppyName] = useState('')
  const [breed, setBreed] = useState('')
  const [puppyImg, setPuppyImg] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const data = { name: puppyName, breed: breed, imageUrl: puppyImg }
    await createPlayer(data)
    navigate(`/`)
  }

  return (
    <>
      <h1>Work in progress, MVP ONLY</h1>
      <NavBar />
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={e => setPuppyName(e.target.value)}
          />
        </label>

        <label>
          Breed:
          <input
            type="text"
            name="breed"
            onChange={e => setBreed(e.target.value)}
          />
        </label>
        <label>
          ImageUrl:
          <input
            type="text"
            name="image"
            onChange={e => setPuppyImg(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default CreatePlayer
