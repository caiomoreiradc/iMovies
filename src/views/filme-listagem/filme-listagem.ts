import "bootstrap";
import "./filme-listagem.css";
import { API_KEY } from "../../../secret";
import { v4 as uuidv4 } from 'uuid';
import { ListagemFilme } from "../../models/listagem-filme";
import { FilmeService } from "../../services/filmes.services";

console.log(uuidv4());

export class VisualizarListagemFilmes {
  FilmeService: FilmeService;
  pnlPrincipal: HTMLDivElement;

  constructor() {
    this.FilmeService = new FilmeService();
    this.registrarElementos();
    this.FilmeService.selecionarFilmePorPopularidade()
    .then(filmes => this.filtrarPorPopularidade(filmes));
    this.FilmeService.selecionarFilmeLancamento()
    .then(filmes => this.exibirLancamentos(filmes));
    this.FilmeService.selecionarFilmeEmBreve()
    .then(filmes => this.exibirEmBreve(filmes));
  }

  registrarElementos(){
    this.pnlPrincipal = document.getElementById("pnlPrincipal") as HTMLDivElement;
  }


  private filtrarPorPopularidade(filmes: ListagemFilme[]): void{
    const lblTitulo = document.createElement("h2");
    lblTitulo.textContent = "Filmes Em Alta";
    lblTitulo.classList.add("fs-1", "text-light");

    const linhaCards = document.createElement("div");
    linhaCards.classList.add("row", "g-3");

    linhaCards.appendChild(lblTitulo);

    for(let filme of filmes){
      const coluna = document.createElement("div");

      coluna.classList.add(
        "app-coluna-poster",
        "col-6",
        "col-md-4",
        "col-lg-2"
        );

        coluna.classList.add("text-center");

        coluna.addEventListener("click", () => {
          window.location.href = filme.urlDetalhes;
        });

        const card = document.createElement("div");
        card.classList.add("d-grid", "gap-2");

        const imgFilme = document.createElement("img");
        imgFilme.classList.add("img-fluid", "rounded-3");
        imgFilme.src = filme.urlPoster;

        const lblTituloFilme = document.createElement("a");
        lblTituloFilme.classList.add(
          "fs-5",
          "link-light",
          "text-decoration-none"
        );
        lblTituloFilme.textContent = filme.titulo;
        lblTituloFilme.href = filme.urlDetalhes;

        card.appendChild(imgFilme);
        card.appendChild(lblTituloFilme);
        coluna.appendChild(card);
        linhaCards.appendChild(coluna);
    }

    this.pnlPrincipal.appendChild(linhaCards);
  }

  private exibirLancamentos(filmes: ListagemFilme[]): void{
    const lblTitulo = document.createElement("h2");
    lblTitulo.textContent = "Lançamentos";
    lblTitulo.classList.add("fs-1", "text-white");

    const linhaCards = document.createElement("div");
    linhaCards.classList.add("row", "g-3");

    linhaCards.appendChild(lblTitulo);

    for(let filme of filmes){
      const coluna = document.createElement("div");

      coluna.classList.add(
        "app-coluna-poster",
        "col-6",
        "col-md-4",
        "col-lg-2"
        );

        coluna.classList.add("text-center");

        coluna.addEventListener("click", () => {
          window.location.href = filme.urlDetalhes;
        });

        const card = document.createElement("div");
        card.classList.add("d-grid", "gap-2");

        const imgFilme = document.createElement("img");
        imgFilme.classList.add("img-fluid", "rounded-3");
        imgFilme.src = filme.urlPoster;

        const lblTituloFilme = document.createElement("a");
        lblTituloFilme.classList.add(
          "fs-5",
          "link-light",
          "text-decoration-none"
        );
        lblTituloFilme.textContent = filme.titulo;
        lblTituloFilme.href = filme.urlDetalhes;

        card.appendChild(imgFilme);
        card.appendChild(lblTituloFilme);
        coluna.appendChild(card);
        linhaCards.appendChild(coluna);
    }

    this.pnlPrincipal.appendChild(linhaCards);
  }

  private exibirEmBreve(filmes: ListagemFilme[]): void{
    const lblTitulo = document.createElement("h2");
    lblTitulo.textContent = "Em Breve";
    lblTitulo.classList.add("fs-1", "text-warning");

    const linhaCards = document.createElement("div");
    linhaCards.classList.add("row", "g-3");

    linhaCards.appendChild(lblTitulo);

    for(let filme of filmes){
      const coluna = document.createElement("div");

      coluna.classList.add(
        "app-coluna-poster",
        "col-6",
        "col-md-4",
        "col-lg-2"
        );

        coluna.classList.add("text-center");

        coluna.addEventListener("click", () => {
          window.location.href = filme.urlDetalhes;
        });

        const card = document.createElement("div");
        card.classList.add("d-grid", "gap-2");

        const imgFilme = document.createElement("img");
        imgFilme.classList.add("img-fluid", "rounded-3");
        imgFilme.src = filme.urlPoster;

        const lblTituloFilme = document.createElement("a");
        lblTituloFilme.classList.add(
          "fs-5",
          "link-light",
          "text-decoration-none"
        );
        lblTituloFilme.textContent = filme.titulo;
        lblTituloFilme.href = filme.urlDetalhes;

        card.appendChild(imgFilme);
        card.appendChild(lblTituloFilme);
        coluna.appendChild(card);
        linhaCards.appendChild(coluna);
    }

    this.pnlPrincipal.appendChild(linhaCards);
  }
}


window.addEventListener('load', () => new VisualizarListagemFilmes());