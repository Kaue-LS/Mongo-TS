import express from "express";
// Processa os corpos das requisições
import bodyParser from "body-parser";
// Criar o servidor http
import { Server } from "http";
import router from "./routes";

export class SetupApplication {
  // Encapsulamento dos membros da classe, colocando como private ou public
  // o private restringe o membro pra ser usado somente nessa classe, nao pode ser usado fora e nem em subclasses
  // o public o torna livre para ser usados em todos os lugares do codigo

  // criando uma propriedade privada
  // armazenara instancias do servidor
  private Server?: Server;

  //    Define o construtor da classe, que recebe um parâmetro opcional
  //   port (valor padrão 3000) e um parâmetro opcional app (valor padrão um novo aplicativo Express).
  constructor(private port = 3000, public app = express()) {}

  //void pois nao retornam nenhum valor
  public init(): void {
    this.setupExpress();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.use(router);
  }

  //   Configura a configação do express
  private setupExpress(): void {
    // Adiciona a config do corpo da requisição
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  //   classe pra iniciar o server
  public start(): void {
    this.Server = this.app.listen(this.port, () => {
      console.log("Server running on port" + this.port);
    });
  }
}
