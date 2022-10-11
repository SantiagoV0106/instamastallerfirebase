import { addUser } from "../../servicios/database.js";

export class Registro extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();

        const form = this.shadowRoot.querySelector("my-formulario");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;
            addUser({email,password});

           
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            
        `;
        }
        
    }
}

customElements.define("my-registro", Registro);
