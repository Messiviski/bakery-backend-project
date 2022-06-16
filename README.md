# Projeto BD 1

### Iniciando o projeto
Antes de tudo é necessário ter o **yarn** instalado na máquina;

Para instalar todas as dependências é necessário executar o seguinte comando:
- `yarn install`
  
Caso seja necessário adicionar alguma dependência execute o seguinte comando:
- `yarn add nome-do-pacote`

### Comandos Prisma
Sempre que alguma alteração for feita no schema do prisma esses dois comandos precisam ser executados
- `yarn prisma format`
  - Formata o arquivo e deixa de acordo com o padrão do prisma
- `yarn prisma migrate dev`
  - Faz a migration das alterações
  - **OBS**
    - Será requisitado um nome para a migration, sempre coloque algo que descreva a alteração
    - Exemplo:
      - *ingredient_name_type_changed*