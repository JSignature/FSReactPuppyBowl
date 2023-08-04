const baseAPI = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A';

const getAllPlayers = async () => {
  try {
    const resp = await fetch(`${baseAPI}/players`);
    const result = await resp.json();

    return result.data.players;
  } catch (error) {
    console.log(error);
  }
};

const getSinglePlayer = async (id) => {
  try {
    const resp = await fetch(`${baseAPI}/players/${id}`);
    const result = await resp.json();
    // return result.data.players;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { getAllPlayers };
