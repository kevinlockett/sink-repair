import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: parseFloat(userBudget),
            neededBy: userDate,
            isComplete: false
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const ServiceForm = () => {
    let html = `
        <h2>
            Enter your information below and press <em>SUBMIT REQUEST</em>
        </h2>
        <div class="field">
            <label class="label" for="serviceDescription">Description</label>
            <input type="text" name="serviceDescription" class="input" placeholder="Enter a description of your problem or need" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" placeholder="Enter your address, city, and state" />
        </div>
        <div class="field">
            <label class="label" for="serviceBudget">Budget</label>
            <input type="float" name="serviceBudget" class="input" placeholder="Enter your spending limit for this project" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input date" />
        </div>
        <button class="button btn button--submit shadow" id="submitRequest">Submit Request</button>
    `

    return html
}