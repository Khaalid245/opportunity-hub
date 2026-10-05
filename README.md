# Verified Job & Career Opportunities Platform

> **Phase 1 — Minimum Viable Product (MVP)**  
> An administrator-controlled platform for curating, publishing, and discovering verified career opportunities (Jobs, Remote Roles, Internships, Fellowships, Scholarships, Training, and Volunteer programs).

---

## 1. System Overview

The **Verified Job & Career Opportunities Platform** provides a trusted directory for job seekers to find legitimate opportunities with direct links to official application portals. 

In Phase 1, only authorized administrators can create and publish listings after verifying the source, company, and application link. Public visitors can search, multi-filter, view role breakdowns, and share opportunities without requiring an account.

### Key Capabilities (Phase 1 MVP)
- **Public Opportunity Discovery:** Keyword search and multi-filtering by Category, Location, Job Type, Experience Level, and Deadline.
- **Dedicated Opportunity View:** Structured job description, responsibilities, requirements, benefits, 5-channel social sharing, and external application redirect.
- **Admin Management Portal:** Secure JWT authentication, real-time dashboard metrics, full opportunity CRUD with organization logo upload, and category taxonomy management.
- **Automated Expiry & Verification Engine:** Enforces `verified = True` before publishing and automatically marks listings expired after their deadline.

---

## 2. Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React 18, TypeScript, Vite | Client-side user interface and admin dashboard |
| **Styling** | Tailwind CSS, PostCSS | Responsive design system and layout utilities |
| **State & API Client** | TanStack Query v5, Axios | Async server-state caching and JWT interceptors |
| **Icons** | Lucide React | Clean, accessible SVG iconography |
| **Backend** | Python 3.12, Django 5.x, Django REST Framework | Business logic, serialization, and REST APIs |
| **Authentication** | SimpleJWT (JSON Web Tokens) | Token-based authentication with refresh rotation |
| **Database** | PostgreSQL 16 | Relational data persistence with performance indexes |
| **File Storage** | AWS S3 (Local media in dev) | Organization logo storage |
| **DevOps & Containers**| Docker, Docker Compose | Multi-container local orchestration and CI/CD |
| **Code Quality** | Ruff (Backend), ESLint + Prettier (Frontend) | Automated linting, typing, and formatting |

---

## 3. Project Structure

```text
opportunity-hub/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI pipeline (backend & frontend checks)
├── docs/                        # Formal specifications & project tracking
│   ├── software-requirements-and-technical-specification.md # Approved Working SRS
│   ├── technical-decisions.md  # Architectural rationale & library decisions
│   ├── PROGRESS.md             # 10-stage execution & verification log
│   └── changelog.md            # Requirements & version changelog
├── backend/                     # Django 5 REST API service
│   ├── Dockerfile              # Python 3.12-slim container definition
│   ├── pyproject.toml          # Ruff linter & formatter configuration
│   ├── requirements.txt        # Production & development dependencies
│   └── apps/                   # Modular Django applications
│       ├── authentication/     # User models, JWT auth & permissions
│       ├── categories/         # Category taxonomy management
│       ├── opportunities/      # Opportunity CRUD & expiry engine
│       └── analytics/          # Dashboard metrics
├── frontend/                    # React + TypeScript client application
│   ├── Dockerfile              # Node 20-alpine container definition
│   ├── package.json            # Scripts, React, Tailwind & dependencies
│   ├── vite.config.ts          # Vite configuration with '@/*' alias
│   ├── tailwind.config.js      # Design tokens (brand teal & navy)
│   ├── .eslintrc.cjs           # ESLint TypeScript configuration
│   ├── .prettierrc             # Prettier code formatting rules
│   └── src/                    # Application source code
├── docker-compose.yml           # Multi-container orchestration (db, backend, frontend)
├── .env.example                 # Safe environment configuration template
└── README.md                    # This document
```

---

## 4. Quickstart Guide (Local Development)

### Prerequisites
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.
- (Optional for non-Docker local dev) Python 3.12+ and Node.js 20+.

### Step 1: Clone the Repository
```bash
git clone https://github.com/Khaalid245/opportunity-hub.git
cd opportunity-hub
```

### Step 2: Configure Environment Variables
Copy the template configuration file:
```bash
cp .env.example .env
```

### Step 3: Start Services via Docker Compose
```bash
docker compose up --build
```

### Step 4: Access Services
- **Frontend Application:** [http://localhost:5173](http://localhost:5173)
- **Backend REST API:** [http://localhost:8000/api/](http://localhost:8000/api/)
- **PostgreSQL Database:** `localhost:5432` (`opportunity_db`)

---

## 5. Code Quality & Linting Commands

### Backend (Python / Django)
```bash
cd backend
# Run Ruff lint checks
ruff check .
# Run Ruff formatter
ruff format .
```

### Frontend (React / TypeScript)
```bash
cd frontend
# Run ESLint
npm run lint
# Run Prettier code formatting
npm run format
# Run TypeScript compilation & build check
npm run build
```

---

## 6. Development Stages & Roadmap

Development follows the supervisor-approved 10-stage timeline (Section 28A):
1. **Stage 1:** Planning, Repository Setup, Docker Compose & CI Foundation ✅
2. **Stage 2:** UI/UX Wireframing & Component Design System *(Active)*
3. **Stage 3:** Database Foundation, PostgreSQL Schema & JWT Authentication
4. **Stage 4:** Backend REST API (CRUD, Search, Filters, Expiry)
5. **Stage 5:** Public Discovery Portal (Homepage, Directory, Details, Sharing)
6. **Stage 6:** Admin Dashboard Portal (Metrics, Forms, Categories)
7. **Stage 7:** SEO, Open Graph & Performance Optimization
8. **Stage 8:** End-to-End Testing & Security Audits
9. **Stage 9:** Cloud Deployment & Hosting Setup
10. **Stage 10:** Final Documentation, Handover & Supervisor Sign-off