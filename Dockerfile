FROM node:26-bookworm-slim

RUN npm install --global pnpm@10.34.9

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]
