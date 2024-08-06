# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

[Link to Live Site](https://threadedneat-3wxn0xqsx-avocado955s-projects.vercel.app/)

## MVP

At a minimum your e-shop website should have two pages:

- Home Page
  - This will contain:
    - A Grid of products
    - Carousel of featured products
      - You **can** import something but I **strongly** recommend building it yourself
    - Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
- All products should be stored in Firestore:
  - You should store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application0
    - favourited or not (boolean)

## Planned Updates

- Favourite button updating the favourited status of the product
- Cart system

## Possible Future Features

- Different images when hovering on the item cards
- fake payment using Stripe
- See if the carousel can swipe across to the next item instead of just jump to it
