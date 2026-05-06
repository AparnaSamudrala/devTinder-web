# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- Create a vite + react application
  -npm create vite@latest devTinder-web -- --template react
- npm install
- npm run dev
- remove unnecessary files and git init and create a repo on github and link it
- first commit and we are ready to start our prj

---

# settingup tailwind css

📖 Based on Tailwind CSS v3 PostCSS installation guide.
https://v3.tailwindcss.com/docs/installation/using-postcss?

follow these steps for installation and import settings

daisyUI component library for Tailwind
https://daisyui.com/docs/install/

Install daisyUI as a Node package:

# npm i -D daisyui@v4

Add daisyUI to tailwind.config.js:
plugins: [
daisyui,
]

we can explore more components here in https://v4.daisyui.com/components/

Add NavBar component to App.jsx as NavBar.jsx

for routing npm install react-router-dom

create BrowserRouter -> Routes -> Route = /Body > RouteChildren/

meaning Route body has navbar, login , profile ,footer etc.. will have children components like login , profile
so all my child components inside Body wil hav navbar automatically
-> Create an outlet in Body Component to make child components inside route body to recognize its child compoennts inside Body comp
-> Create a footer component
