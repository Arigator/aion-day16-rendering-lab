# aion-rendering-lab

## What is this repo
BelajarCepat is a fictional online course platform that helps users accelerate their learning. This repository serves as a hands-on rendering-strategy lab for a training module on modern web rendering strategies (SSG, SSR, CSR, ISR).

## Quick start

### ⚠️ Important: use production mode
This lab demonstrates rendering strategies. They only behave correctly in a
production build. Always run:

```bash
npm install
npm run build
npm run start
```

Then open [http://localhost:3000](http://localhost:3000)

### Do NOT use `npm run dev` for the exercises
In dev mode, Next.js re-renders every page on every request. SSG pages will
appear to behave like SSR, and the timestamps on the cards will be misleading.
Use dev mode only when you are editing code, then rebuild to observe results.

If you see a red **"⚠️ DEV MODE"** banner at the top of every page, you are
running the dev server — the rendering signals on the cards are not accurate.
The banner disappears automatically in a production build.

### Live demo
https://aion-day16-rendering-lab.vercel.app

## Page map

| Route | Current rendering strategy | File to edit |
| :--- | :--- | :--- |
| `/` | SSG (Static) | `app/page.tsx` |
| `/blog` | SSG (Static) | `app/blog/page.tsx` |
| `/blog/[slug]` | SSG (Static with static params) | `app/blog/[slug]/page.tsx` |
| `/instructor/[username]` | SSR (Server-Side Rendered) | `app/instructor/[username]/page.tsx` |
| `/dashboard` | CSR (Client-Side Rendered) | `app/dashboard/page.tsx` |
| `/how` | SSG (Static) — reference page comparing all strategies | `app/how/page.tsx` |

## Reading the build output

When `npm run build` finishes, Next.js prints a route table. Each symbol tells
you how that route is rendered:

*   **`○` (Static)** — prerendered at build time (SSG). The landing page (`/`) and blog index (`/blog`) should display this symbol.
*   **`●` (SSG)** — prerendered via `generateStaticParams`. The blog post dynamic route (`/blog/[slug]`) should display this symbol.
*   **`ƒ` (Dynamic)** — server-rendered on every request (SSR). The instructor profile dynamic route (`/instructor/[username]`) should show this symbol due to `export const dynamic = 'force-dynamic'`.

Note: ISR would appear differently — you will add it yourself in the exercise.

## How to verify each rendering strategy

### 1. Verify SSG (Static Site Generation)
Run the following curl command against the blog index page:
```bash
curl -s http://localhost:3000/blog
```
**Observation**: The returned HTML contains the full post titles and contents (e.g. `Why modern rendering strategies matter`) directly in the source markup. This proves the page was generated prior to the request.

### 2. Verify SSR (Server-Side Rendering)
Request the instructor profile page twice:
```bash
curl -s http://localhost:3000/instructor/sinta | grep -o '[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}T[0-9:.]*Z' | head -n 1
curl -s http://localhost:3000/instructor/sinta | grep -o '[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}T[0-9:.]*Z' | head -n 1
```
**Observation**: The two responses contain **different** server timestamps — the page is rebuilt on every request. Compare this with `/blog`, whose "Built" timestamp stays frozen no matter how many times you request it. This is the same experiment the signal card on `/blog` asks you to perform in the browser.

### 3. Verify CSR (Client-Side Rendering)
Run the following curl command against the learner dashboard:
```bash
curl -s http://localhost:3000/dashboard
```
**Observation**: The returned HTML is almost entirely empty (a shell with basic layout/navigation elements but no dashboard courses or student progress data). The dashboard content (e.g., `42%`) will only appear in a real web browser once JavaScript loads and executes on the client.

## Toggling exercise
The worksheet and instructions for the toggling exercise (e.g., changing rendering strategies between SSG, SSR, and ISR) are delivered separately by the course instructor. Refer to your learning materials for the step-by-step instructions.
