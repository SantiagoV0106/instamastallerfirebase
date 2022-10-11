class MyStory extends HTMLElement{

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
            <link rel="stylesheet" href="./app/components/BarraStory/style.css">
            <section class = "barra">
            <image class = "story" src="./images/Stories/Stories.png"></image>

            
            
            </section>
            `;
        }
    }

}

customElements.define("my-story", MyStory);
export default MyStory;