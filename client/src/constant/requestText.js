export const fetchCurrentTotal = {
    method: "POST",
    url: `/api/`,
    baseurl: "http://localhost:5273"
}

export const fetchLedgerData = {
    method: "POST",
    baseurl: "http://localhost:5273",
    url: '/api/fetch/record'
}

export const fetchAccountData = {
    method: "POST",
    baseurl: "http://localhost:5273",
    url: '/api/fetch/account'
}

export const fetchGoalData = {
    method: "POST",
    baseurl: "http://localhost:5273",
    url: '/api/fetch/goal'
}


export const createGoalData = {
    method: 'POST',
    url: '/api/create/goal',
    baseurl: 'http://localhost:5273'
}

export const initialGoalData = {
    category: '',
    area: '',
    amount: '',
};