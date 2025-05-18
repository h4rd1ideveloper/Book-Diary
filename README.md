# Diário de Livros - Back-end (NestJS)

## Descrição

API RESTful para gerenciamento de livros (CRUD), autenticação JWT e PostgreSQL.

## Tecnologias

* NestJS (v11+)
* TypeScript
* TypeORM
* PostgreSQL
* Passport.js + JWT
* Docker & Docker Compose

## Requisitos

* Docker e Docker Compose instalados
* Node.js (para desenvolvimento sem Docker)

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz com:

```dotenv
# PostgreSQL
# PostgreSQL
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=diario_de_livros
DB_HOST=db
DB_PORT=5432

# Nest
PORT=3000

JWT_SECRET=h4rd1iM
```

## Scripts

```bash
# Build de produção (local)
npm run build

# Iniciar em dev (watch + TS)
npm run start:dev

# Iniciar em produção (após build)
npm run start:prod

# Testes
npm run test        # unitários
npm run test:e2e    # end-to-end (Supertest)
```

## Docker

```bash
# Build e sobe containers
docker compose up --build

# Apenas sobe sem rebuild
docker compose up

# Para todos os containers
docker compose down
```

A API ficará disponível em `http://localhost:3000`.

---
