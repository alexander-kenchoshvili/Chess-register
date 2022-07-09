export  function getCharacters () {
    return fetch(`https://chess-tournament-api.devtest.ge/api/grandmasters`)
    .then((response) => response.json())
} 

export function register(formData) {
    return fetch("https://chess-tournament-api.devtest.ge/api/register", {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
            throw new Error('something went wrong')
        }
    })
     
}


