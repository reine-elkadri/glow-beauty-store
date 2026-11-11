# Glow — Beauty & Skincare Store

A responsive React e-commerce frontend demonstration for a skincare and beauty store.

## Features
- Home, About, Shop, Product Details, Favorites, Cart, and Contact pages
- Product search, category/brand/skin-concern filters, and sorting
- Add/remove favorites with persistent `localStorage` storage
- Add to bag, update quantities, remove items, and calculate totals
- Demo checkout (no real payment processing)
- Responsive layout for desktop, tablet, and mobile

## Run locally
1. Install Node.js (LTS).
2. Extract the ZIP and open the `glow-beauty-store` folder in VS Code.
3. Open a terminal in that folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for deployment
```bash
npm run build
```
The production files will be generated in the `dist` folder.

## Notes
- Product images are loaded from Unsplash, so an internet connection is needed to display them.
- Product catalog and checkout are sample/demo data. No real orders or payments are processed.
- Favorites and cart are saved in the browser's localStorage.
- This project is an original student-project starter. Customize the content, design, and implementation and cite any external assets you use.
