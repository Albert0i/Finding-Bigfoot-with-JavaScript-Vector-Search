import 'dotenv/config'

export const EXPRESS_PORT = Number(process.env.EXPRESS_PORT ?? 80)
export const EXPRESS_BASE_URL = process.env.EXPRESS_BASE_URL ?? '/'

export const REDIS_HOST = process.env.REDIS_HOST ?? 'redis'
export const REDIS_PORT = Number(process.env.REDIS_PORT ?? 6379)
export const REDIS_USERNAME = process.env.REDIS_USERNAME ?? 'default'
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD ?? ''

export const BIGFOOT_PREFIX = process.env.BIGFOOT_PREFIX ?? 'bigfoot:sighting'
export const BIGFOOT_INDEX = process.env.BIGFOOT_INDEX ?? `${BIGFOOT_PREFIX}:index`
export const BIGFOOT_STREAM = process.env.BIGFOOT_STREAM ?? `${BIGFOOT_PREFIX}:reported`
