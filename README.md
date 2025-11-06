# Restroflow — Modern Restaurant Web App

[![Build Status](https://img.shields.io/badge/build-pending-lightgrey)](https://github.com/sonamjha123/restroflow/actions)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Made with React](https://img.shields.io/badge/react-%5E18.0.0-blue?logo=react)](https://reactjs.org)
[![Tailwind](https://img.shields.io/badge/tailwind-%5E3.0.0-teal?logo=tailwindcss)](https://tailwindcss.com)

> A scalable, responsive restaurant browsing and food discovery platform built with React, Redux Toolkit, and Tailwind CSS. Focused on component-driven architecture, performance, and a production-ready developer experience.

---

## Table of contents

- [Overview](#overview)
- [Demo / Screenshots](#demo--screenshots)
- [Key Features](#key-features)
- [Tech stack](#tech-stack)
- [Architecture & folder structure](#architecture--folder-structure)
- [Getting started (local development)](#getting-started-local-development)
- [Docker & production build](#docker--production-build)
- [Contact](#contact)

---

## Overview

Restroflow is a single-page application that helps users discover restaurants, view menus and dish information, and explore restaurants by cuisine, rating and delivery time. The project demonstrates:

- component-driven UI construction,
- centralized state management with Redux Toolkit,
- responsive layout and progressive enhancement,
- an emphasis on developer experience (linting, scripts, and reproducible builds).

This repository is intended as a portfolio-quality project that can be extended into a production-ready service with a backend, CI/CD, monitoring and secure secrets management.

---

## Demo / Screenshots

- Live demo: peppy-sable-30a921.netlify.app/

---

## Key Features

- Dynamic search with instant filtering
- Restaurant cards showing name, image, cuisines, rating, and delivery time
- Responsive layout optimized for desktop, tablet and mobile
- Modular and reusable UI components (Header, Footer, Card, Filters)
- Performance optimizations: lazy-loading of images/components and efficient Redux usage
- Opinionated dev scripts for install, lint, test and build

---

## Tech stack

- Frontend: React.js (functional components + hooks)
- State: Redux Toolkit (+ Context API for cross-cutting concerns)
- Styling: Tailwind CSS, CSS Modules for scoped styles
- Build: Parcel (can be switched to Vite / Webpack)
- Dev tooling: ESLint, Prettier, Husky (recommended)
- Version control: GitHub

---

## Architecture & folder structure

A simple, opinionated layout to keep components discoverable and testable:

- src/
  - components/        # Reusable UI components (Header, Card, Button...)
  - features/          # Feature slices (restaurants/listing, search)
  - app/               # App bootstrap, routes, store configuration
  - pages/             # Route-level pages (Home, Restaurant, About)
  - services/          # API clients and adapters
  - hooks/             # Reusable hooks
  - styles/            # Global styles & tailwind config
  - utils/             # Helper utilities
- public/               # Static assets, screenshots, demo data

Document any non-obvious patterns in docs/architecture.md (sequence diagrams, rationale for state decisions, caching strategy).

---

## Getting started (local development)

Prerequisites
- Node.js 18+ (recommended)
- npm 8+ or yarn 1/2

Install
```bash
git clone https://github.com/sonamjha123/restroflow.git
cd restroflow
npm ci
```

Run development server
```bash
npm run dev
# or if using parcel: npm run start
```

Open http://localhost:1234 (or the port shown in console).

Build for production
```bash
npm run build
# produced assets are in /dist or /build depending on config
```

---

## Docker & production build

A Dockerfile and docker-compose can be added to provide reproducible builds and local stacks with a backend and DB. Example high-level steps:

- Build container: docker build -t restroflow:latest .
- Run container: docker run -p 80:80 restroflow:latest

(If you'd like, I can provide a ready-to-commit Dockerfile and a docker-compose.yml that runs the frontend together with a mock JSON API + Postgres for development.)

---

## Todo- Production considerations & next steps 

To elevate this repo from a portfolio app to production-grade,
- Add a backend (Express, NestJS, or serverless functions) with a persistent DB (Postgres / Mongo) and migrations (Prisma / TypeORM).
- Use managed storage / CDN for images/media (S3 + CloudFront, Cloudinary, or Mux for video).
- Add authentication (JWT + refresh tokens or OAuth) and an admin interface for managing restaurants.
- Observability: Sentry for errors, structured logs, and metrics.
- Security: dependency scanning, automated secret detection, secure cookie/configuration, CSP and rate limiting.
- Scalability: caching strategy (CDN + Redis), DB indexes and paging, paginated APIs and backend rate limiters.
- Accessibility (a11y) and performance budgets validated with Lighthouse.
- TypeScript migration for stronger typing and clearer contracts.


---

