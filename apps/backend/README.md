# todo app backend

rest api with nestjs + postgresql

## requirements

- node.js 18+
- pnpm
- postgresql

## install

```bash
cd apps/backend
pnpm install
```

## setup

create `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/taskdb"
JWT_SECRET="your-super-secret-jwt-key"
PORT=3001
```

## database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

## run

```bash
# dev
pnpm dev

# prod
pnpm build
pnpm start
```

api at `http://localhost:3001`

## endpoints

### auth

- `POST /auth/sign-up` - register
- `POST /auth/sign-in` - login

### tasks (needs jwt)

- `GET /tasks` - get all
- `GET /tasks/:id` - get one
- `POST /tasks` - create
- `PATCH /tasks/:id` - update
- `DELETE /tasks/:id` - delete

### query params

- `?status=TODO|IN_PROGRESS|DONE` - filter
- `?sortBy=deadline|createdAt` - sort

## stack

nestjs • prisma • postgresql • jwt • bcrypt
