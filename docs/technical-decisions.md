# Technical Decisions & Architecture Rationale

This document formally records all architectural and technical decisions made for the **Verified Job & Career Opportunities Platform (Phase 1 — MVP)**.

---

## 1. Frontend Architecture & Supporting Libraries

### 1.1 Core Framework: React 18 + TypeScript + Vite
* **Rationale:** Fast development cycle with instant HMR (Hot Module Replacement), strict type safety matching the PostgreSQL data model, and clean component isolation.

### 1.2 Data Fetching & Server State: TanStack Query (React Query v5)
* **Rationale:**
  - Manages asynchronous server state (caching, background refetching, pagination cache, deduplication).
  - Eliminates boilerplate `useEffect` data-fetching loops and provides native `isLoading`, `isError`, and `data` states for job listings and filter updates.
  - Significantly improves mobile user perceived speed through optimistic caching.

### 1.3 HTTP Client: Axios
* **Rationale:**
  - Configures centralized request/response interceptors.
  - Automatically attaches JWT Bearer tokens to admin requests and handles transparent token refresh on `401 Unauthorized` responses.

### 1.4 Icons & Visual Assets: Lucide React
* **Rationale:**
  - Clean, modern, accessible SVG icon set (briefcase, search, filter, share, check-circle, map-pin, clock).
  - 100% tree-shakeable to keep frontend bundle sizes under 150KB.

### 1.5 Styling: Tailwind CSS & Design Tokens
* **Rationale:**
  - Mobile-first responsive utilities enabling fast UI implementation without CSS conflicts.
  - *Note on Color Palette:* The current `brand` (teal) and `navy` color variables serve as the technical baseline tokens and will be adapted to match the approved Stage 2 Figma UI/UX designs.

---

## 2. Backend Architecture & Tooling

### 2.1 Web Framework: Django 5 + Django REST Framework (DRF)
* **Rationale:** Built-in ORM security, robust validation layer, native password hashing (PBKDF2/Argon2), and clean REST API serialization.

### 2.2 Python Linting & Formatting: Ruff
* **Rationale:** Replaces Black, Flake8, and isort with a unified linter that runs 100x faster in CI pipelines while enforcing strict PEP8 and import order conventions.

### 2.3 Frontend Linting & Formatting: ESLint + Prettier
* **Rationale:** Enforces strict TypeScript rules (`no-unused-vars`, strict null checks) and consistent formatting across all components.

---

## 3. Database Taxonomy & Business Rules (Supervisor Approved)

### 3.1 Opportunity Categories (Section 35)
1. `Jobs`
2. `Remote Jobs` (Independent category; removed from location filter)
3. `Internships` (Consolidates Graduate and Career Development opportunities)
4. `Fellowships`
5. `Scholarships`
6. `Training`
7. `Volunteer`
8. `Other`

### 3.2 Job Locations
* Approved options: `Nigeria`, `Africa`, `International`, `Kaduna`, `Abuja`.
* *Note:* `Remote` is exclusively a category, never a physical location option.

### 3.3 Verification & Expiry Rules
* `verified`: Defaults to `False`. Listings must be verified before status can be changed to `published`.
* `deadline`: Mandatory timestamp. Listings whose deadline has passed are automatically marked `expired` and disable the "APPLY NOW" button.
