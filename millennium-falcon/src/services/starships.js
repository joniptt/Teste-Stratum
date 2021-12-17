import axios from "axios"

const starships = axios.create({
  baseURL: "https://swapi.dev/api/starships/",
})
export default starships
