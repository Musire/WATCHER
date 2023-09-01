export const accountAPI = {
    method: 'POST',
    url: process.env.REACT_APP_API_ENDPOINT,
    baseurl: process.env.REACT_APP_API_URL
}

export const recordAPI = {
    method: 'POST',
    url: '/api/fetch/single/record',
    baseurl: 'http://localhost:5273'
}

export const goalAPI = {
    method: 'POST',
    url: '/api/fetch/single/goal',
    baseurl: 'http://localhost:5273'
}