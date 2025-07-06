# 📸 Photo Feed App

A modern and responsive Photo Feed application built with **Next.js**, showcasing a collection of photos using dynamic routing, modals, and image optimization.

## 🚀 Features

- 📷 Fetch and display photos from an API
- 🧭 Client-side navigation with dynamic routes
- 💬 Modal view for individual photo display
- ⚡ Fast image loading with Next.js `Image` component
- 🔙 Modal closes with `router.back()` for a smooth UX
- 🔎 Fully responsive layout
- ✨ Tailwind CSS for styling

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Unsplash API ](https://unsplash.com/developers)
- [Next.js Image Optimization](https://nextjs.org/docs/api-reference/next/image)

## 🖼️ Modal Behavior

- Modal opens automatically when routed to `/photos/:id`
- Uses native `<dialog>` with React Portal
- Closes on:
  - Clicking the close (×) icon
  - Clicking backdrop (outside the modal)
  - Pressing `Esc`
- Returns to previous page via `router.back()`

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/photo-feed-app.git
cd photo-feed-app

2. Install dependencies
npm install

4. Run the development server
npm run dev

Open http://localhost:3000 in your browser.


```
