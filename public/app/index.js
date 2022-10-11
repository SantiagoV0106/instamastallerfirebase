import "./components/index.js";
import data from "./data.js";
import data2 from "./data2.js";
import { Attribute2 } from "./components/BarraLateral/BarraT.js";
import { Attribute } from "./components/Post/Post.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["registro"] = 1] = "registro";
    Screens[Screens["home"] = 2] = "home";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.login = [];
        this.registro = [];
        this.screen = Screens.login;
        this.posts = [];
        this.barra = [];
        this.story = [];
        this.barrat = [];
        this.attachShadow({ mode: "open" });
        const pantallaRegistro = this.ownerDocument.createElement("my-registro");
        this.registro.push(pantallaRegistro);
        const pantallaLogin = this.ownerDocument.createElement("my-login");
        this.login.push(pantallaLogin);
        data.forEach((user) => {
            const instaPost = this.ownerDocument.createElement("my-post");
            instaPost.setAttribute(Attribute.post, user.post);
            instaPost.setAttribute(Attribute.fotoperfil, user.fotoperfil);
            instaPost.setAttribute(Attribute.username, user.username);
            instaPost.setAttribute(Attribute.desc, user.desc);
            instaPost.setAttribute(Attribute.comment, user.comments);
            instaPost.setAttribute(Attribute.date, user.fecha);
            this.posts.push(instaPost);
        });
        data2.forEach((user2) => {
            const barraT = this.ownerDocument.createElement("my-barrat");
            barraT.setAttribute(Attribute2.fotop, user2.fotop);
            this.barrat.push(barraT);
        });
        const barraUp = this.ownerDocument.createElement("my-barra");
        this.barra.push(barraUp);
        const barraStory = this.ownerDocument.createElement("my-story");
        this.story.push(barraStory);
    }
    connectedCallback() {
        var _a;
        this.render();
        const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("my-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
            this.screen = Screens.home;
            this.render();
        });
    }
    render() {
        if (this.shadowRoot) {
            switch (this.screen) {
                case Screens.home:
                    this.shadowRoot.innerHTML = "<app-home></app-home>";
                    break;
                case Screens.login:
                    this.shadowRoot.innerHTML = "<my-login></my-login>";
                    break;
                case Screens.registro:
                    this.shadowRoot.innerHTML = "<my-registro></my-registro>";
                    break;
                default:
                    break;
            }
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/sugerencias/stylesSugerencias.css">
            <section class="fondoTitulosSugerencias">
                <h1 id="tituloSugerencias">Sugerencias para ti</h1>
                <h1 id="verTodo">Ver Todo</h1>
            </section>
        `;
            this.login.forEach((doLogin) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(doLogin);
            });
            this.registro.forEach((doRegistro) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(doRegistro);
            });
            this.barra.forEach((barra) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(barra);
            });
            this.story.forEach((story) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(story);
            });
            this.barrat.forEach((barrat) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(barrat);
            });
            this.posts.forEach((posts) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(posts);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
