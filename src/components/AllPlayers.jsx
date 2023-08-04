import { getAllPlayers } from '../API/routes';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllPlayers = () => {
  useEffect(() => {
    async function fetchData() {
      const data = await getAllPlayers();
      setPlayers(data);
    }
    fetchData();
  }, []);

  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  function handleClick() {
    navigate('/players/:id');
  }

  return (
    <>
      <NavBar />
      <div>
        {players.map((player) => (
          <>
            <img src={player.imgUrl} />
            <p key={player.id}>{player.name}</p>
            <button onClick={handleClick}>Details</button>
          </>
        ))}{' '}
      </div>
    </>
  );
};

export default AllPlayers;
