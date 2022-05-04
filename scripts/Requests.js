import { getRequests } from "./dataAccess.js"

const convertRequestToListElement = request => {

    return `
        <li id="request--$request.id} class="requestList">
            <div>${request.description}</div>
        </li>
    `
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement)
            }
        </ul>
    `

    return html
}