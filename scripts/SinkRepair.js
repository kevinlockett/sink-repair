import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"
import { Footer } from "./Footer.js"

export const SinkRepair = () => {
    return `
        <header class='header'>
            <img class="img" src="./img/maude-and-merle.png" alt="owners Maude & Merle Baumgarner" />
            <h1>Maude and Merle's Sink Repair</h1>  
        </header>
        <main class="main-content">
            <section class="service-form">
                ${ServiceForm()}
            </section>
            <section class="service-requests">
                <h2>Service Requests</h2>
                ${Requests()}
            </section>
        </main>
        <footer class="footer">
            ${Footer()}
        </footer>
    `
}

