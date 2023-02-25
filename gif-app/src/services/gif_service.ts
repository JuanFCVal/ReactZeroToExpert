import { IGifphyResponse } from "../interfaces/gifs-response"

export   const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Z3uN4AYCeLjx7bBfgTQ1gYOAyfODylt2&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map( (data: IGifphyResponse) => {
        const { id, title, images } = data
        const { url } = images.downsized_medium
        return { id, title, url }
    })
    console.log(gifs)
  }  