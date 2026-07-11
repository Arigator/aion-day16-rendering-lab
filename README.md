# aion-rendering-lab

## What is this repo
BelajarCepat is a fictional online course platform that helps users accelerate their learning. This repository serves as a hands-on rendering-strategy lab for a training module on modern web rendering strategies (SSG, SSR, CSR, ISR).

## Quick start

### Option A: Open in GitHub Codespaces
You can launch this sandbox in a single click in GitHub Codespaces:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new)

*Zero local configuration or installation is required.*

### Option B: Local Development
To run this project locally, execute the following commands in your terminal:
```bash
npm install
npm run dev
```
Once the dev server starts, open [http://localhost:3000](http://localhost:3000) in your web browser.

## Page map

| Route | Current rendering strategy | File to edit |
| :--- | :--- | :--- |
| `/` | SSG (Static) | `app/page.tsx` |
| `/blog` | SSG (Static) | `app/blog/page.tsx` |
| `/blog/[slug]` | SSG (Static with static params) | `app/blog/[slug]/page.tsx` |
| `/instructor/[username]` | SSR (Server-Side Rendered) | `app/instructor/[username]/page.tsx` |
| `/dashboard` | CSR (Client-Side Rendered) | `app/dashboard/page.tsx` |

## How to verify each rendering strategy

### 1. Build Route Table Output
Run the Next.js production build command:
```bash
npm run build
```
Once the build completes, Next.js displays a route table detailing the rendering strategy of each route:
*   **`○` (Static / SSG)**: A hollow circle indicates the route was prerendered as static HTML. The landing page (`/`) and blog index (`/blog`) should display this symbol.
*   **`●` (SSG with Static Params)**: A filled circle indicates the route was prerendered with dynamic paths compiled at build time. The blog post dynamic route (`/blog/[slug]`) should display this symbol.
*   **`ƒ` (Dynamic / SSR)**: A function symbol indicates the route is server-rendered on-demand. The instructor profile dynamic route (`/instructor/[username]`) should show this symbol due to `export const dynamic = 'force-dynamic'`.

### 2. Verify SSG (Static Site Generation)
Run the following curl command against the blog index page:
```bash
curl -s http://localhost:3000/blog
```
**Observation**: The returned HTML contains the full post titles and contents (e.g. `Why modern rendering strategies matter`) directly in the source markup. This proves the page was generated prior to the request.

### 3. Verify CSR (Client-Side Rendering)
Run the following curl command against the learner dashboard:
```bash
curl -s http://localhost:3000/dashboard
```
**Observation**: The returned HTML is almost entirely empty (a shell with basic layout/navigation elements but no dashboard courses or student progress data). The dashboard content (e.g., `42%`) will only appear in a real web browser once JavaScript loads and executes on the client.

## Toggling exercise
The worksheet and instructions for the toggling exercise (e.g., changing rendering strategies between SSG, SSR, and ISR) are delivered separately by the course instructor. Refer to your learning materials for the step-by-step instructions.
