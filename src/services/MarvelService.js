class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/characters'
  _apiKey = 'apikey=96cc815918c112988302a53d75179083'

  generateService = async (url) => {
    let res = await fetch(url)
    if(!res) {
      throw new Error(`Could new error with url: ${url}, status: ${res}`)
    }
    return await res.json()
  }

  getAllCharacters = async () => {
    const res = await this.generateService(`${this._apiBase}?limit=9&offset=230&${this._apiKey}`)
    return res.data.results.map(this._transformCharacter)
  }

  getCharacter = async (id) => {
    const res = await this.generateService(`${this._apiBase}/${id}?${this._apiKey}`)
    return this._transformCharacter(res.data.results[0])
  }

  descriptionModified = (desc) => {
    if (desc.length) {
      return desc.length > 10 ? desc.substr(0, 210) + '...' : desc
    }
    return 'There is no description for this Hero.'
    
  }

  _transformCharacter = (char) => {
    const description = this.descriptionModified(char.description)
    return {
      name: char.name,
      description: description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url
    }
    
  }
}

export default MarvelService;