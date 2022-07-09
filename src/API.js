export  function getCharacters () {
    return fetch(`https://chess-tournament-api.devtest.ge/api/grandmasters`)
    .then((response) => response.json())

} 

// export function register(formData) {
//     return fetch()
// }


