export class Formulario extends HTMLElement {

    email = "";
    password = "";

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", () => {
            const event: CustomEvent<{ email: string, password: string }> =
                new CustomEvent("formulario-fullfiled", {
                    detail: { email: this.email, password: this.password },
                    composed: true
                });

            this.dispatchEvent(event);
        });

        const emailInput = this.shadowRoot?.querySelector("input[type=\"email\"]");
        const passwordInput = this.shadowRoot?.querySelector("input[type=\"password\"]");

        emailInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.email = value;
        });

        passwordInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.password = value;
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `    


            
        `;
        }

    }
}

customElements.define("my-formulario", Formulario);