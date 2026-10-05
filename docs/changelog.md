# Changelog

All changes to requirements, design, architecture, or tech stack decisions are documented here.

---

## [Stage 1: Baseline & CI/CD Infrastructure] - 2026-10-05
- **Repository Baseline:** Clean repository setup with `.gitignore`, environment configuration template, and modular directory layout.
- **CI Pipeline:** Added GitHub Actions workflow (`.github/workflows/ci.yml`) for automated backend Ruff linting and frontend TypeScript/production builds.
- **Code Quality Tooling:** Configured `pyproject.toml` (Ruff) for Django backend and `.eslintrc.cjs` / `.prettierrc` for React frontend.
- **Architectural Documentation:** Added `technical-decisions.md` documenting rationale for TanStack Query, Axios, Lucide React, Tailwind tokens, and PostgreSQL data model.
- **Taxonomy Verification:** Confirmed `Remote Jobs` as an independent category (omitted from locations) and `Internships` consolidating graduate and career opportunities (Section 35).

---

## [Tech Stack Finalization] - 2026-10-01
- **Frontend Stack:** React.js + TypeScript (Vite) + Tailwind CSS + Lucide Icons + TanStack Query + Axios + React Router v6.
- **Backend Stack:** Python 3.12+ + Django 5.x + Django REST Framework (DRF) + SimpleJWT + `django-cors-headers` + `drf-spectacular` (Swagger UI).
- **Database:** PostgreSQL (`psycopg3`).
- **DevOps & Hosting:** Docker & Docker Compose + GitHub Actions CI/CD + AWS (EC2/ECS, RDS PostgreSQL, S3 Bucket for organization logos, Nginx + Gunicorn).

---

## [Initial Requirements Baseline] - 2026-10-01
- Extracted initial requirements from the 35-page project description document.
- Scope locked to Phase 1 (Admin-curated discovery platform with public browsing, search/filter, and external application links).

