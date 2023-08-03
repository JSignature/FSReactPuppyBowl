const baseAPI = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A'

const getAllPlayers = async () => {
  try {
    const resp = await fetch(`${baseAPI}/players`)
    const result = await resp.json()

    return result.data.players
  } catch (error) {
    console.log(error)
  }
}

export { getAllPlayers }
