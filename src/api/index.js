import axios from 'axios'
import cheerio from 'cheerio'

const url = 'https://coronavirus.palmas.to.gov.br/'

export const fetchData = async () => {
  try {
    //Why they dont share their fcking api
    await axios.get(url).then(response => {
      if (response.status === 200) {
        const html = response.data
        const data = cheerio.load(html)
        return data
      }
    })
  } catch (err) {}
}
