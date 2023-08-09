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

const getSinglePlayer = async id => {
  try {
    // const resp = await fetch(`${baseAPI}/players/${id}`)
    const resp = await fetch(`${baseAPI}/players/${id}`)
    const result = await resp.json()

    console.log(result)
    return result.data.player
  } catch (error) {
    console.log(error)
  }
}

const deletePlayer = async id => {
  try {
    const resp = await fetch(`${baseAPI}/players/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.log(error)
  }
}

const createPlayer = async data => {
  try {
    const req = await fetch(`${baseAPI}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(req)
  } catch (error) {
    console.log(error)
  }
}

export { getAllPlayers, getSinglePlayer, deletePlayer, createPlayer }
