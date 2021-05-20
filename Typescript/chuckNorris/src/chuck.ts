import fetch from "node-fetch";


interface IChuck{
    id:string,
    created_at:string,
    value:string,
    icon_url:string,
    updated_at:string,
    url:string
}

function chuckNorrisFetcher():Promise<IChuck>{
    return fetch("https://api.chucknorris.io/jokes/random")
      .then((res: { json: () => any; }) => res.json())
      .then((data: any) => data )
  }
  
  async function chuckNorrisTester() {
    let joke = await chuckNorrisFetcher()
    console.log(joke.value)
  }
  console.log(chuckNorrisTester());
  