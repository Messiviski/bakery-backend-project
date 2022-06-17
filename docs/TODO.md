## A FAZER
### JOBS

Executa todo dia verificando quando foi produzido no dia atual - o que foi vendido o que sobrar deve ser cadastrado no desperdicio

Realiza predição da produção no dia seguinte, deve ser feito diariamente

### ROTAS
- Produto (Messias)
  - Rota para cadastrar um novo produto **WIP**
  - Rota de listagem **WIP**
    - Precisa da rota de *venda* e *producao diaria*
- Venda (Messias e Erick)
  - Rota para cadastrar uma nova venda **DONE**
  - Rota de listagem de todas as vendas em um dia **TODO**
- Producao Diaria (Joao Pedro)
  - Rota para registrar a producao **TODO**
    - Rota da rota de *produto*
  - Rota de listagem de todas as producoes em um dia **TODO**
- Compra (Vidal)
  - Rota para cadastrar uma nova compra **TODO**
    - Precisa da rota de *ingrediente*
  - Rota de listagem de todas as compras em um dia**TODO**
- Ingrediente (Erick)
  - Rota para cadastrar um novo produto **WIP**
  - Rota de listagem **TODO**
- Outras
  - Rota responsavel por listar todos os ingredientes que sao utilizados na fabricao de um produto com as respectivas quantidades **TODO**
  - Rota responsavel por listar todos os desperdicios em uma data **TODO**
    - Precisa das rotas de *producao diaria* e *vendas*
  - Rota responsavel por listar a previsao **TODO**
    - Precisa das rotas de *producao diaria*, *vendas* e *desperdicio*