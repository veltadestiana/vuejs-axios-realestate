import axios from 'axios'

// Fetch API from McMakler
const baseUrl = `https://api.mcmakler.de/v1/advertisements/`

export let HTTP = axios.create({
  baseURL: baseUrl
})
