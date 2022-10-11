import { queryUser } from "../../servicios/database.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
        const form = this.shadowRoot.querySelector("my-formulario");
        form.addEventListener("formulario-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    alert("Info incorrecta");
                }
            });
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="">
            
            <section>
                <h1>Este es el Login<h1>
                <my-formulario></my-formulario>
            </section>
            
        `;
        }
    }
}
customElements.define("my-login", Login);
