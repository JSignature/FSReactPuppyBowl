import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/createPlayer">Create Player</Link>
    </>
  )
}

export default NavBar
