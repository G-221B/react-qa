const proBaseURL = 'http://8.136.1.227:3001'
const devBaseURL = 'http://8.136.1.227:3001'

export const baseURL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const timeout = 5000
