import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export const SinkRepair = () => {
    return `
    <section class="header">
        <img src="../img/maude-and-merle.png" alt="owners Maude and Merle" class="header--img" />
        <h1>Maude and Merle's Sink Repair</h1>
    </section>
    <section class="main">
    <div class="serviceForm">
        ${ServiceForm()}
    </div>

    <div class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </div>
    </section>
    `
}

