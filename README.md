# Docker Boilerplate

## Starting with Docker Compose

```
docker compose up --build
```

## Starting without Docker

### Start Backend

```
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### Start Frontend

If you don't have `pnpm` installed, install it. You don't need to install it, but it will change your life for the better.

```
cd frontend
pnpm install
pnp run dev
```

## Visit the Web interface

http://localhost:5173/