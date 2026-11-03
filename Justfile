# Containers

set dotenv-load

dev-up:
    docker compose up -d --build --wait

dev-down:
    docker compose down

dev-reset:
    docker compose down -v && docker compose up -d --build

dev-restart:
    docker compose restart

dev-destroy:
    docker compose down -v

# Database

[no-cd]
pgcli database="":
    #!/usr/bin/env bash
    database="{{ database }}"
    if [[ -z "$database" ]]; then
      database="$POSTGRES_DB"
    fi

    PGPASSWORD="$POSTGRES_PASSWORD" pgcli \
      -h 127.0.0.1 \
      -p "${POSTGRES_PORT:-5432}" \
      -U "$POSTGRES_USER" \
      "$database"
