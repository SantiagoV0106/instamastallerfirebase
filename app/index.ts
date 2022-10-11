import "./components/index.js";
import data from "./data.js";
import data2 from "./data2.js"
import MyBarra from "./components/BarraUp/BarraUp.js";
import MyStory from "./components/BarraStory/BarraStory.js";
import MyBarraT, { Attribute2 } from "./components/BarraLateral/BarraT.js";
import MyPost, { Attribute } from "./components/Post/Post.js";

import { addUser, queryUser } from "./servicios/database.js";
import { Login } from "./components/Login/Login.js";
import { Registro } from "./components/Registro/registro.js";


enum Screens {
    login,
    registro,
    home
}

class AppContainer extends HTMLElement {
    login: Login[] = [];
    registro: Registro[] = [];

    screen: Screens = Screens.login;

    posts: MyPost[] = [];
    barra: MyBarra[] = [];
    story: MyStory[] = [];
    barrat: MyBarraT[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const pantallaRegistro = this.ownerDocument.createElement("my-registro") as Registro;
        this.registro.push(pantallaRegistro);


        const pantallaLogin = this.ownerDocument.createElement("my-login") as Login;
        this.login.push(pantallaLogin);



        data.forEach((user) => {
            const instaPost = this.ownerDocument.createElement("my-post") as MyPost;
            instaPost.setAttribute(Attribute.post, user.post);
            instaPost.setAttribute(Attribute.fotoperfil, user.fotoperfil);
            instaPost.setAttribute(Attribute.username, user.username);
            instaPost.setAttribute(Attribute.desc, user.desc);
            instaPost.setAttribute(Attribute.comment, user.comments);
            instaPost.setAttribute(Attribute.date, user.fecha);
            this.posts.push(instaPost);
        });

        data2.forEach((user2) => {

            const barraT = this.ownerDocument.createElement("my-barrat") as MyBarraT;
            barraT.setAttribute(Attribute2.fotop, user2.fotop);

            this.barrat.push(barraT);

        });


        const barraUp = this.ownerDocument.createElement("my-barra") as MyBarra;
        this.barra.push(barraUp);

        const barraStory = this.ownerDocument.createElement("my-story") as MyStory;
        this.story.push(barraStory);

    }

    connectedCallback() {
        this.render();
        const login = this.shadowRoot?.querySelector("my-login");
        login?.addEventListener("login-success", () => {
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
                this.shadowRoot?.appendChild(doLogin);
            });

            this.registro.forEach((doRegistro) => {
                this.shadowRoot?.appendChild(doRegistro);
            });            
                
                this.barra.forEach((barra) => {
                    this.shadowRoot?.appendChild(barra);
                });
                this.story.forEach((story) => {
                    this.shadowRoot?.appendChild(story);
                });
                this.barrat.forEach((barrat) => {
                    this.shadowRoot?.appendChild(barrat);
                });
                this.posts.forEach((posts) => {
                    this.shadowRoot?.appendChild(posts);
                });


            }
        }
    }
    

        customElements.define("app-container", AppContainer);