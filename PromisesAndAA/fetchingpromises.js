//Enter this URL in your browser: https://swapi.dev/api/people/1/
const fetch = require("node-fetch");


function getPlanetforFirstSpeciesInFirstMovieForPerson(id){
    let url ="https://swapi.dev/api/people/"+id+"/?format=json"
            //first get name
    fetch(url)
    .then(res=>res.json())
        .then(data=>(console.log("Name: "+data.name),
            //fetch from second url
            fetch(data.films[0]))
            .then(res=>res.json())
            .then(data=>(console.log("First Film: "+data.title),
                //third
                fetch(data.species[0]))
            .then(res=>res.json())
            .then(data=> (console.log("First species: "+data.name),
                //fourth
                fetch(data.homeworld))
            .then(res=>res.json())
            .then(data=>console.log("HomeWorld for specie: "+data.name),
            )))
            )
            
        .catch(error=>console.log("Error"))
    }
    //getPlanetforFirstSpeciesInFirstMovieForPerson(1);

    async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id){
        let url ="https://swapi.dev/api/people/"+id+"/?format=json"
        const n = await fetch(url).then(res=>res.json());
        const f = await fetch(n.films[0]).then(res=>res.json());
        const s = await fetch(f.species[0]).then(res=>res.json());
        const p = await fetch(s.homeworld).then(res=>res.json());
        console.log(n.name,"\n",f.title,"\n",s.name,"\n",p.name);
    }
getPlanetforFirstSpeciesInFirstMovieForPersonAsync(2);

