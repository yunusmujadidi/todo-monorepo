# task management system

simple todo app with auth

## description

web app for managing tasks. users can sign up, login, and manage their own tasks. built with next.js and nestjs.

## how to run

### prerequisites

- node.js 18+
- pnpm
- postgresql

### install

```bash
git clone <your-repo-url>
cd todo-monorepo
pnpm install
```

### backend setup

```bash
cd apps/backend

# create .env file
DATABASE_URL="postgresql://user:password@localhost:5432/taskdb"
JWT_SECRET="your-secret-key"
PORT=3001

# setup database
npx prisma generate
npx prisma migrate dev --name init

# run
pnpm dev
```

backend runs at: http://localhost:3001

### frontend setup

```bash
cd apps/frontend

# create .env.local file
NEXT_PUBLIC_API_URL="http://localhost:3001"

# run
pnpm dev
```

frontend runs at: http://localhost:3000

### or run both from root

```bash
pnpm dev
```

## tech stack

**frontend**: next.js 16, react 19, typescript, tailwind 4, shadcn/ui, zustand

**backend**: nestjs 11, prisma 7, postgresql, jwt, bcrypt

**monorepo**: turborepo, pnpm

## demo login

```
email: yunusmujadidi@gmail.com
password: 12345678
```

## features

- user auth (signup/login) with jwt
- crud tasks
- filter by status
- sort by deadline/date
- search tasks
- update status via dropdown
- delete confirmation
- toast notifications
- dark/light mode
- pagination & sorting
- responsive design

## screenshots

### login page

![Login](./screenshots/login.png)

### dashboard

![Dashboard](./screenshots/dashboard.png)

### create task

![Create Task](./screenshots/create.png)

### update task

![Update Task](./screenshots/update.png)

## api endpoints

### auth

- `POST /auth/sign-up` - register
- `POST /auth/sign-in` - login

### tasks (protected)

- `GET /tasks` - get all tasks
- `GET /tasks?status=TODO` - filter by status
- `GET /tasks?sortBy=deadline` - sort by deadline
- `GET /tasks/:id` - get single task
- `POST /tasks` - create task
- `PATCH /tasks/:id` - update task
- `DELETE /tasks/:id` - delete task

## project structure

```
todo-monorepo/
├── apps/
│   ├── backend/         # nestjs api
│   └── frontend/        # next.js app
├── packages/            # shared configs
├── screenshots/         # app screenshots
├── db.sql              # database schema
├── postman_collection.json
└── README.md
```
