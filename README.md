# Tandoor Indian Cuisine — Restaurant Website

A modern restaurant website for **Saaral South Indian Kitchen** (Tandoor Indian Cuisine) in Provo, Utah. Built with TanStack Start, React, and Tailwind CSS.

## Features

- **Home** — Hero section, signature dishes, offers, and call-to-action
- **About** — Restaurant story, values, and culinary approach
- **Menu** — Full South Indian menu with categories and pricing
- **Blog** — Articles on tandoor cooking, filter coffee, and sadhya traditions
- **Contact** — Address, hours, contact form, and map
- **Order Online** — Links to online ordering and phone orders
- **Offers** — Daily specials, thali lunch, and catering
- **Reserve** — Table reservation form

## Tech Stack

- [React 19](https://react.dev/)
- [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router) (file-based routing)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vite 8](https://vite.dev/)
- [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) components
- TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ (or [Bun](https://bun.sh/))
- npm, yarn, pnpm, or bun

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint & format

```bash
npm run lint
npm run format
```

## Project Structure

```
src/
├── assets/          # Images (hero, dishes, etc.)
├── components/      # Site header, footer, UI components
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── routes/          # File-based pages (TanStack Router)
│   ├── index.tsx    # Home (/)
│   ├── about.tsx    # About (/about)
│   ├── menu.tsx     # Menu (/menu)
│   ├── blog.tsx     # Blog (/blog)
│   ├── contact.tsx  # Contact (/contact)
│   ├── order.tsx    # Order Online (/order)
│   ├── offers.tsx   # Offers (/offers)
│   └── reserve.tsx  # Reservations (/reserve)
├── router.tsx       # Router configuration
└── styles.css       # Global styles & Tailwind
```

## Restaurant Info

| | |
|---|---|
| **Address** | 1600 N Freedom Blvd, Provo, UT 84604 |
| **Phone** | [+1 801-960-9048](tel:+18019609048) |
| **Email** | saaralprovo@gmail.com |
| **Hours** | Mon – Sat: 11 AM – 10 PM · Sunday: 11 AM – 9 PM |

## Deployment

This project is configured for deployment via [Lovable](https://lovable.dev). It can also be built and deployed to any platform that supports Node.js or static hosting with SSR (Vite/Nitro).

```bash
npm run build
```

## License

Private project. All rights reserved.
