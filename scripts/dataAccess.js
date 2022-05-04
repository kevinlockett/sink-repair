const mainContainer = document.querySelector("#container")
const API = "http://localhost:8088"

const applicationState = {
    requests: []
}

//Copies of data
export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}

//Fetch
export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}