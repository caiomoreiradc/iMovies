import { ListagemFilme} from "../models/listagem-filme";
import { API_KEY } from "../../secret";
import { CreditosFilme } from "../models/creditos-filme";
import { DetalhesFilme } from "../models/detalhes-filme";
import { TrailerFilme } from "../models/trailer-filme";



export class FilmeService {
  async selecionarFilmePorPopularidade(): Promise<ListagemFilme[]> {
    const url = `https://api.themoviedb.org/3/movie/popular`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return this.MapearFilmes(data);
      } else {
        throw new Error("Erro ao tentar obter dados requisitados");
      }
    } catch (error: any) {
      throw new Error(`Erro na solicitação: ${(error as Error).message}`);
    }
  }

  async selecionarFilmeLancamento(): Promise<ListagemFilme[]> {
    const url = `https://api.themoviedb.org/3/movie/now_playing`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return this.MapearFilmes(data);
      } else {
        throw new Error("Erro ao tentar obter dados requisitados");
      }
    } catch (error: any) {
      throw new Error(`Erro na solicitação: ${(error as Error).message}`);
    }
  }

  async selecionarFilmeEmBreve(): Promise<ListagemFilme[]> {
    const url = `https://api.themoviedb.org/3/movie/upcoming`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return this.MapearFilmes(data);
      } else {
        throw new Error("Erro ao tentar obter dados requisitados");
      }
    } catch (error: any) {
      throw new Error(`Erro na solicitação: ${(error as Error).message}`);
    }
  }

  public selecionarDetalhesFilmePorId(id: number): Promise<DetalhesFilme> {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR;`

    return fetch(url, this.obterHeaders())
      .then((res) => this.processarResposta(res))
      .then((obj) => this.mapearDetalhesFilme(obj));
  }

  public selecionarTrailersFilmePorId(id: number): Promise<TrailerFilme> {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos`;

    return fetch(url, this.obterHeaders())
      .then((res) => this.processarResposta(res))
      .then((obj) => this.mapearTrailersFilme(obj));
  }

  private processarResposta(res: Response): any {
    if (res.ok) return res.json();

    throw new Error("Erro ao tentar obter os dados requisitados.");
  }

  private obterHeaders() {
    return {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDJlZGY5NmU1MTI4YWM0ZjY1YjRjNDE0NWFhY2U4OCIsInN1YiI6IjY0ZmU2Zjk0ZmE0MDQ2MDBlMTdlYTgwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nN0HkG0RZoHyNhLxSvK6obVCgXNNFNkpDwLMdf8p_ig",
      },
    };
  }

  private mapearDetalhesFilme(obj: any): DetalhesFilme {
    return new DetalhesFilme(
      obj.id,
      obj.title,
      obj.overview,
      obj.release_date,
      obj.poster_path,
      obj.backdrop_path,
      obj.vote_average,
      obj.vote_count,
      obj.genres.map((genero: any) => genero.name),
    );
  }
  private mapearTrailersFilme(obj: any): TrailerFilme {
    console.log(obj);
    return new TrailerFilme(
      obj.id,
      `https://www.youtube.com/embed/${obj.results[0].key}`
    );
  }


  private MapearFilmes(objetos: any): ListagemFilme[] {
    return objetos.results.map((obj: any) => {
      return new ListagemFilme(
        obj.id,
        obj.title,
        obj.overview,
        obj.poster_path,
        obj.backdrop_path
      );
    });
  }
}