export var Attribute;
(function (Attribute) {
    Attribute["imageprofile"] = "imageprofile";
    Attribute["nameuser"] = "nameuser";
    Attribute["location"] = "location";
    Attribute["imagecontent"] = "imagecontent";
    Attribute["likes"] = "likes";
    Attribute["comentuser1"] = "comentuser1";
    Attribute["comentuser2"] = "comentuser2";
    Attribute["viewcoments"] = "viewcoments";
    Attribute["days"] = "days";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            imageprofile: null,
            nameuser: null,
            location: null,
            imagecontent: null,
            likes: null,
            comentuser1: null,
            comentuser2: null,
            viewcoments: null,
            days: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            case Attribute.location:
                this.location = newValue ? String(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/src/components/profile/style.css"
            <section class="cartapost">
              <img class="borde"src="${this.imageprofile}" width="200", height="200"></img>
              <h1 class="nameuser">${this.nameuser}</h1>
              <h1 class="nameuser">${this.location}</h1>
              <image class="carro"src="${this.imagecontent}" width="200", height="200"></image> 
              <h1 class="like"><b>${this.likes} Likes</b></h1>
              <h1 class="comentuser"><b>${this.comentuser1}</b> ${this.comentuser2}</h1>
              <h1 class="views">${this.viewcoments}</h1>
              <h1 class="day">${this.days}</h1>
          </section>
            `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
