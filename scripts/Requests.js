import { getRequests, deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("delete--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

const convertRequestToListElement = request => {

    return `
        <li id="request--${request.id} class="specific">
            ${request.description}
            <button class="request__delete" id="delete--${request.id}">
                Delete
            </button>
        </li>
    `
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul class="requestList">
            ${
                requests.map(convertRequestToListElement)
            }
        </ul>
    `

    return html
}