
# API Todo List  (CRUD)

API criada com o objetivo de praticar conceitos do back-end, especialmente conexão com banco de dados e realização de CRUD.




## Funcionalidades

- Cadastra uma nova tarefa
- Atualiza uma tarefa existente
- Deleta uma tarefa existente
- Acessa todas as tarefas existentes
- Acessa apenas uma tarefa existente


## Stack utilizada

**Back-end:** Node, Express, Typescript

**Banco de dados:** PostgreSQL

**Bibliotecas:** Ts-Node, Nodemon, Pg, CORS, dotEnv


## Uso
É necessário a criação de uma base de dados local usando o SGBD **PostgreSQL** com o nome: **db_todo** e em seguida uma tabela com o nome **todos** com os campos: id, title, description e created_at, como no exemplo abaixo.

```postgres
CREATE DATABASE db_todo;

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar criar e adicionar as seguintes variáveis de ambiente no seu arquivo .env

`DB_HOST`

`DB_PORT`

`DB_NAME`

`DB_USER`

`DB_PASSWORD`

## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install ou yarn
```

Inicie o servidor

```bash
  npm run dev ou yarn dev
```


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/todos
```
#### Retorna apenas um item

```http
  GET /api/todos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer |

#### Cadastra um item

```http
  POST /api/todos
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O nome da tarefa |
| `description`      | `string` | **Obrigatório**. A descrição da tarefa |

Estes parâmetros serão passados no body da requisição.

#### Atualiza um item

```http
  PUT /api/todos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer |
| `title`      | `string` | **Obrigatório**. O nome da tarefa |
| `description`      | `string` | **Obrigatório**. A descrição da tarefa |

Os parâmetros title e description serão passados no body da requisição.

#### Deleta um item

```http
  DELETE /api/todos/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer |



## Autores

- [@wllysses](https://www.github.com/wllysses)

