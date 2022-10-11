export var Attribute;
(function (Attribute) {
    Attribute["username"] = "username";
    Attribute["fotoperfil"] = "fotoperfil";
    Attribute["post"] = "post";
    Attribute["desc"] = "desc";
    Attribute["date"] = "date";
    Attribute["comment"] = "comment";
})(Attribute || (Attribute = {}));
class MyPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            username: null,
            fotoperfil: null,
            post: null,
            desc: null,
            date: null,
            comment: null,
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
        <link rel="stylesheet" href="./app/components/Post/styles.css">
        <section class="frame">
        <image class="mipost"src="${this.post}"></image>
        <image class="perfil"src="${this.fotoperfil}"></image>        
        <h1 class= "desc"> ${this.desc}</h1>
        <h1 class= "comments"> ${this.comment}</h1>
        <h1 class= "date"> ${this.date}</h1>
        <h1 class= "username"> ${this.username}</h1>        
        <image class="like" src="./images/Post/Like.png"></image>
        <image class="Cicon" src="./images/Post/Commenticon.png"></image>
        <image class="share" src="./images/Post/Share.png"></image>
        <image class="save" src="./images/Post/save2.jpeg"></image>
        <image class="parriba" src="./images/Post/puntosarriba.jpeg"></image>
        <image class="puntitos" src="./images/Post/puntitos.jpeg"></image>        
        </section>        
            `;
        }
    }
}
customElements.define("my-post", MyPost);
export default MyPost;
