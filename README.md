# Stream Club

A responsive dashboard prototype for organising shared streaming subscriptions in one clear interface.

[View the live demo](https://ventus652.github.io/stream-club/)

> Portfolio demo: all accounts and dates shown in the interface are fictional. No password or private credential is stored in this repository.

## What it demonstrates

- Responsive, mobile-first interface
- Reusable React components with typed props
- Clipboard interactions and clear user feedback
- Accessible labels and disabled states
- Open Graph and social sharing metadata
- Static GitHub Pages build alongside the application source
- Deployment-ready configuration for Vite, Vinext and Cloudflare Workers

## Tech stack

- Next.js 16
- React 19
- TypeScript
- CSS
- Vite / Vinext
- Cloudflare Workers
- GitHub Pages

## Run locally

Requirements: Node.js 22.13 or newer.

~~~bash
git clone https://github.com/Ventus652/stream-club.git
cd stream-club
npm ci
npm run dev
~~~

Then open the local URL printed in the terminal.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project structure

~~~text
app/       Next.js application
public/    Public assets
docs/      Static GitHub Pages version
.openai/   Hosting configuration
~~~

## Design decisions

The interface uses strong visual hierarchy, service-specific accents and reusable cards to make information easy to scan. Sensitive fields are intentionally absent: this repository is a UI demonstration, not a credential manager.

## Author

Built by [Ventus652](https://github.com/Ventus652) as a frontend portfolio project.

