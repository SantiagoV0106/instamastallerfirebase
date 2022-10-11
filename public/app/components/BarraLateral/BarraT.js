export var Attribute2;
(function (Attribute2) {
    Attribute2["fotop"] = "fotop";
    Attribute2["name"] = "name";
    Attribute2["stat"] = "stat";
})(Attribute2 || (Attribute2 = {}));
class MyBarrat extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            fotop: null,
            name: null,
            stat: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/BarraLateral/style.css">
            <section>
            <image class="fotop"src="${this.fotop}"></image>
            <h1 class= "name">La_socia_53</h1>
            <h1 class= "stat">Te sigue</h1>
            <image class="user" src="./Images/BarraUp/user.png"></image>
            <h1 class= "username">User.anonimus</h1>
            <h1 class= "username2">Santiago Velasco</h1>
            <h1 class= "cuenta">Cambiar</h1>
            <h1 class= "sug">Sugerencias para ti</h1>
            <h1 class= "vt">Ver todo</h1>
            <h1 class= "seguir">seguir</h1>
            
            </section>
            `;
        }
    }
}
customElements.define("my-barrat", MyBarrat);
export default MyBarrat;
