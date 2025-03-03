### Notes from [Finding Bigfoot with JavaScript + vector search](https://youtu.be/KxuZEApLRPU)

> "to trench on certain matters which, on a superficial view, might seem foreign to the case, but actually were highly relevant.<br />--- The Stranger by Albert Camus"

[![alt Dylan Sitts - Hey Pal](img/Dylan%20Sitts%20-%20Hey%20Pal.png)](https://youtu.be/b1P5CsG9wpo)


#### Prologue
Previously, there was [Redis Stack Workshop: Redis Stack OM Library for Node.js](https://youtu.be/KUfufrwpBkM). Everytime I look into codes written by Guy, I learn something new... This repo is a simplified version of the original and is in favor of [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) rather then [Docker](https://en.wikipedia.org/wiki/Docker_(software)) environment. 

- All you need is [NodeJS](https://nodejs.org/en) and a [Redis Free Account](https://redis.io/try-free/). 

- The original [README.md](./README.Guy.md) written by Guy. 


#### I. Setting up backend end API 
To begin with, augment `.env` under `api` folder.  

.env
```
REDIS_HOST=r<your redis host>
REDIS_PORT=<your redis port>
REDIS_USERNAME=<your redis username>
REDIS_PASSWORD=<your redis password>

EXPRESS_PORT=3000
EXPRESS_BASE_URL=/api
```

And run `npm install` and `npm start`. 

![alt API](img/api.JPG)

easy-peasy! Right? 


#### II. Loading the data 


#### III. Creating embeddings 


#### IV. Running the front end


#### V. Summary


#### VI. Bibliography
1. [Live coding with Guy: Finding Bigfoot with JavaScript + Vector Search](https://youtu.be/KxuZEApLRPU)
2. [Live coding with Guy: Finding Bigfoot with JavaScript + Vector Search](https://youtu.be/R1IXYnoSd5U)
3. [Finding Bigfoot with JavaScript + vector search](https://github.com/redis-developer/finding-bigfoot-with-semantic-search/tree/main?tab=readme-ov-file#start-services)
4. [Hugging Face](https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/blob/main/mistral-7b-instruct-v0.2.Q4_K_M.gguf)
5. [Transformers.js](https://github.com/huggingface/transformers.js?tab=readme-ov-file#readme)
6. [The Stranger by Albert Camus](https://www.macobo.com/essays/epdf/CAMUS,%20Albert%20-%20The%20Stranger.pdf)


#### Epilogue


### EOF (2025/03/15)