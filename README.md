\# CuyoTech University — Student Services Information System (SSIS)



Final Project — 1st Semester 2026–2027



\## Architecture



| Layer | Tech | Owner |

|-------|------|-------|

| Front End | React 19 + Vite + Tailwind CSS v4 | Student 4 — UI/UX Designer |

| Back End | Laravel + Sanctum | Student 3 — Developer |

| Deployment | Vercel (FE) + Render (BE) | Shared |



\## Repository Layout



```

ssis/

├── frontend/     React SPA

├── backend/      Laravel API

└── docs/         API contract and wireframes

```



\## Quick Start



\### Front End

```bash

cd frontend

cp .env.example .env

npm install

npm run dev

```

Opens at http://localhost:5173



\### Back End (once added by teammate)

```bash

cd backend

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate --seed

php artisan serve

```



\## Demo Credentials



| Role | Username | Password |

|------|----------|----------|

| Student | student1 | pass |

| Registrar | registrar1 | pass |

| Cashier | cashier1 | pass |

| Department | department1 | pass |

| Admin | admin | pass |



\## Documentation



\- \[API Contract](./docs/API.md)



\## Team



| Name | Role |

|------|------|

| Student 1 | Product Owner / Team Leader |

| Student 2 | Scrum Master |

| Student 3 | Developer / System Designer |

| Student 4 | Developer / UI/UX Designer |

| Student 5 | QA / Software Tester |

