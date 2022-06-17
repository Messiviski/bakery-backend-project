# Projeto BD 1

**Antes de começar a trabalhar em uma nova funcionalidade, crie uma branch com a descrição da tarefa que será feita**
- Exemplo:
  - *feat/add-ingredients-route*
  - *feat/add-products-route*

### Iniciando o projeto
Antes de tudo é necessário ter o **yarn** e o **docker** instalado na máquina;

Para instalar todas as dependências é necessário executar o seguinte comando:
- `yarn install`
  
Caso seja necessário adicionar alguma dependência execute o seguinte comando:
- `yarn add nome-do-pacote`

Para que seja possível executar o projeto é necessário criar uma imagem do *postgres* na sua máquina, para fazer isso execute o seguinte comando e aguard finalizar o processo:
- `docker run --name postgres-db -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

Ao fim do processo de criação do container será possível executar o projeto através do comando:
- `yarn dev`
  - O projeto será iniciado na porta 3333 e é possível acessá-la através do *http://localhost:3333/*;
  - Para testar o funcionamento das rotas recomendo o uso do *Insomnia* ou *Postman*;

  
### Comandos Prisma
Para que os tipos dos campos que foram declarados no *schema.prisma* estejam disponíveis no TypeScript, é necessário executar o seguinte comando:
- `yarn prisma generate`

Sempre que alguma alteração for feita no schema do prisma esses dois comandos precisam ser executados
- `yarn prisma format`
  - Formata o arquivo e deixa de acordo com o padrão do prisma
- `yarn prisma migrate dev`
  - Faz a migration das alterações
  - **OBS**
    - Será requisitado um nome para a migration, sempre coloque algo que descreva a alteração
    - Exemplo:
      - *ingredient_name_type_changed*