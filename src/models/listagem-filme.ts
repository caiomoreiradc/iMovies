export class ListagemFilme 
{
    id: number;
    titulo: string;
    resumo: string;
    urlSlide: string;
    urlPoster: string;
    readonly urlDetalhes: string;
  
    constructor(
      id: number,
      titulo: string,
      resumo: string,
      linkPoster: string,
      linkSlide: string
    ) 
    {
      this.id = id;
      this.titulo = titulo;
      this.resumo = resumo;
      this.urlPoster = "https://image.tmdb.org/t/p/original" + linkPoster;
      this.urlSlide = "https://image.tmdb.org/t/p/original" + linkSlide;
      this.urlDetalhes = `detalhes.html?id=${id}`;
    }
  }