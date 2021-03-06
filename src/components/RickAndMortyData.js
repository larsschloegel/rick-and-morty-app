export default function RickAndMortyData() {
    const getRequest = () => {
        return fetch("https://rickandmortyapi.com/api/character")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw `error ${response.status}`
            })
            .catch((error) => console.error(error))
    }
    //console.log(getRequest().then((data) => data.results))
}