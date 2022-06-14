### Rotas

- Registrar a compra **OK**
- Registrar a venda **OK**
- Registrar os ingredientes **OK**
- Registrar os produtos **OK**
- Registrar a producao diaria **OK**
- Listagem de ingredientes
- Listagem de produtos
- Listar compra e venda semanalmente
  - `http://localhost:3333/api/financial?begin='2021-02-02'&end='2021-02-03'`

### JOBS

Executa todo dia verificando quando foi produzido no dia atual - o que foi vendido o que sobrar deve ser cadastrado no desperdicio

Realiza predição da produção no dia seguinte, deve ser feito diariamente