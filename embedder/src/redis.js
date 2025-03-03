import { createClient } from 'redis'

import { REDIS_HOST, REDIS_PORT, REDIS_USERNAME, REDIS_PASSWORD } from './config.js'


// connect to redis
export const redis = await connectToRedis()


/**
 * Connect to Redis
 */
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

/**
 * Wait for Redis to finish loading.
 */
export async function waitForRedis() {
  let loaded = false

  while (!loaded) {
    loaded = await isReady()
    if (!loaded) console.log("Redis is loading...")
  }

  console.log("Redis is ready!")
}

/**
 * Determine if Redis is done loading or not.
 */
export async function isReady() {
  const info = await redis.info('persistence')
  const lines = info.split('\r\n')
  const loadingLine = lines.find(line => line.startsWith('loading:'))
  const loadingValue = loadingLine.split(':')[1]
  return loadingValue === '0'
}
