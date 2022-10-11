class MyBarra extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/BarraUp/style.css">
            <section>
            <nav class="barra">
            <div class="barraacomode">
            <image class="logo" src="./Images/BarraUp/Instagram.png"></image>
            <div class="nav-items">
            <image class="iconos" src="./Images/BarraUp/Home.png"></image>
            <image class="iconos" src="./Images/BarraUp/chat.png"></image>
            <image class="iconos" src="./Images/BarraUp/New.png"></image>
            <image class="iconos" src="./Images/BarraUp/Explore.png"></image>
            <image class="iconos" src="./Images/BarraUp/Like.png"></image>
            <image class="iconos" src="./Images/BarraUp/user.png"></image>
            
            </div>
            </div>
            
            </nav>
            
            </section>
            `;
        }
    }

}

customElements.define("my-barra", MyBarra);
export default MyBarra;