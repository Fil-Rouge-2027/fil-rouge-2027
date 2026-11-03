# Fil Rouge 2027

## Getting Started

The following tools are required to run this project:

- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- [NodeJS 26.13.0](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/)

### Development

Copy and complete the `.env` file:

```bash
cp .env.example .env
```

Start the containers:

```bash
docker compose up -d --build --wait
```

Open the app in your browser <http://localhost:3000>.

## Documentation

- [Guide](/docs/guide.md)
- [Technical](/docs/technical.md)
- [User](/docs/user.md)
- [Deployment](/docs/deployment.md)

## Conventions

### Branch and Commit

Use these categories for branch names and commit messages:

| Category   | Purpose                                                 |
| ---------- | ------------------------------------------------------- |
| `feat`     | Add a feature                                           |
| `fix`      | Fix a bug                                               |
| `docs`     | Update documentation                                    |
| `style`    | Change formatting without changing behavior             |
| `refactor` | Restructure code without adding features or fixing bugs |
| `perf`     | Improve performance                                     |
| `test`     | Add or update tests                                     |
| `build`    | Change build tooling or dependencies                    |
| `ci`       | Change continuous integration workflows                 |
| `chore`    | Other maintenance tasks                                 |

#### Branch names

Syntax: `<category>/<short-description>`.

```text
feat/user-login
fix/login-validation
docs/setup-guide
```

#### Commit messages

Syntax: `<category>(<scope>): <description>`. The scope is optional and identifies the affected area, such as `auth` or `api`. Use a short and imperative description (for example "add" rather than "added").

```commit
feat(auth): add user login
fix(auth): validate email before login
docs: explain local setup
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting. The following scripts are available:

```bash
pnpm run lint
pnpm run format
pnpm run check
```
