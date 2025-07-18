﻿# Biblioteca API

API REST de gerenciamento de biblioteca.

## Tecnologias
- Node.js + Express
- MongoDB + Mongoose

## Instalação

1. Clone o repositório:

```
git clone <repo-url>
cd biblioteca-api
```

2. Instale dependências:

```
npm install
```

3. Configure variáveis de ambiente:

```
cp .env.example .env
# Edite .env conforme necessário
```

4. Rode em modo desenvolvimento:

```
npm run dev
```

## Endpoints

### Alunos
- `GET /api/alunos`
- `GET /api/alunos/:id`
- `POST /api/alunos`
- `PUT /api/alunos/:id`
- `DELETE /api/alunos/:id`

### Livros
- `GET /api/livros`
- `GET /api/livros/:id`
- `POST /api/livros`
- `PUT /api/livros/:id`
- `DELETE /api/livros/:id`

### Empréstimos
- `GET /api/emprestimos`
- `GET /api/emprestimos/:id`
- `POST /api/emprestimos`
- `PATCH /api/emprestimos/:id/devolver`
- `DELETE /api/emprestimos/:id`
