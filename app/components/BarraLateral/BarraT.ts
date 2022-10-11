export enum Attribute2 {
    "fotop" = "fotop",
    "name" = "name",
    "stat"= "stat"
}

class MyBarrat extends HTMLElement{
    fotop?:string;
    name?:string;
    stat?:string;

    static get observedAttributes(){
        const attrs: Record<Attribute2,null> = {
            fotop: null,
            name: null,
            stat: null,
        };
        return Object.keys(attrs); 
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute2, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            switch (propName) {            
                default:
                    this[propName] = newValue;
                    break;
            }

            this.render();
    }

    render(){
        if(this.shadowRoot){
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