import { getRequests, deleteRequest, getPlumbers, saveCompletion, amendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { 
                requestId: +requestId,
                plumberId: +plumberId,
                dateCreated: new Date().toLocaleDateString('en-US')
            }
            
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

            saveCompletion(completion)

            amendRequest(requestId)

        }
    }
)

export const Requests = () => {
    const requests = getRequests()
    const plumbers = getPlumbers()

    const listUnfinishedRequests = (request) => {

        if (request.isComplete === false) {

            return `
                <li class="isComplete--${request.isComplete}">
                    <div class="li--left">
                        <img class="img--wrench" src="./img/wrench_tiny.png" alt="crossed wrench and pipe wrenched" />
                        ${request.description}
                    </div>
                    <div class="li--right">
                        <select class="plumbers" id="plumbers">
                        <option value="">Select a plumber</option>
                            ${plumbers.map(plumber => {
                                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                            }).join("")
                        }
                        </select>
                        <button class="button--delete btn shadow" id="request--${request.id}">
                            Delete
                        </button>
                    </div>
                </li>
            `
        }
    }

    const listCompletedRequests = (request) => {

        if (request.isComplete === true) {

            return `
                <li class="isComplete--${request.isComplete}">
                    <div class="li--left">
                        <img class="img--wrench" src="./img/wrench_tiny.png" alt="crossed wrench and pipe wrenched" />
                        ${request.description}
                    </div>
                    <div class="li--right">
                        <button class="button--delete btn shadow" id="request--${request.id}">
                            Delete
                        </button>
                    </div>
                </li>
            `
        }
    }

    let html = `
        <ul class="ul--service-requests">
            <li class="li-title">
                <div class="li--left">
                    Description
                </div>
                <div class="li--right">
                    Completed By
                </div>
            </li>
            <ul class="ul--unfinished-requests" >
                ${
                    requests.map(listUnfinishedRequests).join("")
                }
            </ul>
            <ul class="ul--completed-requests" >
                ${
                    requests.map(listCompletedRequests).join("")
                }
            </ul>
        </ul>
    `

    return html
}