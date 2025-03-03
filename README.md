### Notes from [Finding Bigfoot with JavaScript + vector search](https://youtu.be/KxuZEApLRPU)

> "to trench on certain matters which, on a superficial view, might seem foreign to the case, but actually were highly relevant.<br />--- The Stranger by Albert Camus"

[![alt Dylan Sitts - Hey Pal](img/Dylan%20Sitts%20-%20Hey%20Pal.png)](https://youtu.be/b1P5CsG9wpo)


#### Prologue
Previously, there was [Redis Stack Workshop: Redis Stack OM Library for Node.js](https://youtu.be/KUfufrwpBkM). Everytime I look into codes written by Guy, I learn something new... This repo is a simplified version of the original and is in favor of [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) rather then [Docker](https://en.wikipedia.org/wiki/Docker_(software)) environment. 

- All you need is [NodeJS](https://nodejs.org/en) and a [Redis Free Account](https://redis.io/try-free/). 

- The original [README.md](./README.Guy.md) written by Guy. 


#### I. Setting up backend end API 
To begin with, augment three files under `api` folder.  

.env
```
REDIS_HOST=r<your redis host>
REDIS_PORT=<your redis port>
REDIS_USERNAME=<your redis username>
REDIS_PASSWORD=<your redis password>
```

`src/config.js`
```
export const REDIS_HOST = process.env.REDIS_HOST ?? 'redis'
export const REDIS_PORT = Number(process.env.REDIS_PORT ?? 6379)
export const REDIS_USERNAME = process.env.REDIS_USERNAME ?? 'default'
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD ?? ''
```

`src/redis.js`
```
async function connectToRedis() {
  const redis = createClient({ socket: { 
                                        host: REDIS_HOST, 
                                        port: REDIS_PORT 
                                       },
                                username: REDIS_USERNAME, 
                                password: REDIS_PASSWORD})
  redis.on('error', (err) => console.log('Redis Client Error', err))
  await redis.connect()
  return redis
}
```

Run `npm install` and `npm start`. 

![alt API](img/api.JPG)

Three API endpoints are available on `POST` request: 

```
http://localhost:3000/api/load
http://localhost:3000/api/fetch
http://localhost:3000/api/search 
```

- load : Call `save` function in `main.js` to add a sighting record to Redis by `hSet` and `xAdd` for later processing; 
- fetch : Call `fetch` function in `main.js` to get a sighting record from Redis by `hGetAll`; 
- search : Call `search` function in `main.js` to search sighting records via *vector semantic search*; 

Our backend is done, easy-peasy! Right? 


#### II. Loading the data 
It is impossible to load all 4586 sightings into a Redis Free Account as it is confined to 30MB only! I significantly trimmed them down to 300 sightings. Each sighting data takes the form of: 

```
{
    "id": "8130",
    "timestamp": 1077753600,
    "title": "Tribal government employee photographs line of tracks in snow",
    "observed": "Foot prints where found in the bad lands of North Dakota near Mandaree.",
    "classification": "Class B",
    "county": "McKenzie",
    "state": "North Dakota",
    "latitude": 47.63297,
    "longitude": -102.7291,
    "latlng": "-102.7291,47.63297",
    "locationDetails": "The location was about 10 to 15 miles south of Mandaree ND.The landscape was the bad lands,steep clay hills,some brush and trees.",
    "dewPoint": 26.51,
    "humidity": 0.88,
    "cloudCover": 0.18,
    "moonPhase": 0.21,
    "pressure": 1010.4,
    "weatherSummary": "Partly cloudy starting in the evening.",
    "uvIndex": 2,
    "visibility": 7.19,
    "highTemp": 38.12,
    "midTemp": 35.03,
    "lowTemp": 31.94,
    "windBearing": 121,
    "windSpeed": 5.78
}
```

in [JSONL](https://jsonlines.org/) format. Leave the API running as it is and let's change to the `loader` folder and run `npm install` command. To show help with:
```
npm start -- --help
```

![alt loader help](img/loader-help.JPG)

To load data with: 
```
npm start -- ../data/bfro_reports_geocoded_300.jsonl
```

![alt loader](img/loader.JPG)

Check with [RedisInsight](https://redis.io/insight/): 

![alt sightings](img/sightings.JPG)


#### III. Creating embeddings 


#### IV. Running the front end


#### V. Summary


#### VI. Bibliography
1. [Live coding with Guy: Finding Bigfoot with JavaScript + Vector Search](https://youtu.be/KxuZEApLRPU)
2. [Live coding with Guy: Finding Bigfoot with JavaScript + Vector Search](https://youtu.be/R1IXYnoSd5U)
3. [Finding Bigfoot with JavaScript + vector search](https://github.com/redis-developer/finding-bigfoot-with-semantic-search/tree/main?tab=readme-ov-file#start-services)
4. [JSON Lines](https://jsonlines.org/)
5. [Hugging Face](https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/blob/main/mistral-7b-instruct-v0.2.Q4_K_M.gguf)
6. [Transformers.js](https://github.com/huggingface/transformers.js?tab=readme-ov-file#readme)
7. [The Stranger by Albert Camus](https://www.macobo.com/essays/epdf/CAMUS,%20Albert%20-%20The%20Stranger.pdf)


#### Epilogue


### EOF (2025/03/15)