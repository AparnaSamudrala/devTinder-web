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
-> To resolve cors error when making a /login or /proile on front end we need to install cors package on backend workspace
on devTinder workspace npm install cors and add a require('cors') and app.use(cors()) this acts a middleware for all api requests
Since we need to save our tokens on cookie since we are working locally on localhost not on https we need to set cors options on backend like origin and credentials
app.use(
cors({
origin: "http://localhost:5173",
credentials: true,
}),
);
also we need to set withCredentials true on frontend when making axios calls
await axios.post(
"http://localhost:7777/login",
{
emailId,
password,
},
{ withCredentials: true },
);
now open chrom dev tools refresh the page and make a login request with proper credentials now you will see the cookie set in Application ->Storage -> cookies => our url click that u will seee the token set successfully

https://redux-toolkit.js.org/introduction/getting-started
npm install @reduxjs/toolkit react-redux
install these two packages on devtinderweb
create a store in utils -> appStore.js
configureStore and add provider in App.jsx with that store, create a userSlice.js in utils folder
and add that reducer slice in appStore
Add redux dev tools extension to chrome
Login and see if data is coming properly coming in the store.
Navbar should update as soon as user logs in

-Refactor our code to ass constants file in utils folder for base-url
then moving custom components into components folder
-You should not be able to access other routes without login
-If token is not present redirect to login page
-Logout
-Get the feed and add the feed in the store
-build the user card on feed

- Edit Profile Feature
- show toast successfully
-
