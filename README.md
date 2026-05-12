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
- show toast successfully on save profile
- New page -> see all my connections
- New page -> see all my requests
- feature - accept or reject connection requests
  -> send/ignore user card from feed

  -> signup new user
  -> E2E testing
  -> AWS instance for deploying our code on cloud
  -> manual deployment
  -> create an AWS account signup asks for gpay autosetup 6 months
  ->In the AWS console home search for EC2 virtual servers in the cloud
  -> Goto EC2 dashboard page
  -> on dashboard check for launch instance
  ->Amazon EC2 allows you to create virtual machines, or instances, that run on the AWS Cloud.
  -> Name of the instance -> DevTinder
  -> Application and OS Images (Amazon Machine Image)  
   ->Select Ubuntu
  instance type by default t3.micro auto selected for free tier
  -> create a new key pair for accessing this instance in future
  -> key pair name :devTinder-secret
  it downloads a .pem file for you with the keypairname.pem
  in our case devTinder-secret.pem file downloads
  -> let others remain as is and hit launch instance btn
  ->Success
  Successfully initiated launch of instance (i-02aa6ba2384282aed)
  click on that instance
  and wait for the instance state to change to running and it launches nstance summary for i-02aa6ba2384282aed (DevTinder)
  Info page
  -> Now click on connect it shows multiple ways to connect
  -> choose SSH client
  -> In gitbash (bcz these are linux/unix cmds these cannot be run on cmd worls on gitbash) goto folder where the pem file got downloaded and do the below cmd
  -chmod 400<secret>.pem
  (- chmod 400 file.pem → sets the file’s permissions so that only the owner can read it (required by SSH when using .pem keys).
  )
  then run the next cmd prompted by it
  ssh -i "devTinder-secret.pem" ubuntu@ec2-15-207-51-110.ap-south-1.compute.amazonaws.com
  this cmd takes us to ubuntu systems cmd prompt terminal
  since this is unbuntu is not a windows machine
  we need to install node here goto node js install on officialdoc and select mac with nvm and copy the curl cmd and hit enter
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

  so to install the node version using nvm we need to check the prj we built now node version
  D:\devTinder-web> node -v
  v22.17.1
  so this version only we need to install the same node version on ubuntu machine too for compatbility
  since we reently instlled node we need to relaunch the terminal(type exit) once u reopen the gitbash again move to downloads folder where our downloaded pem file exist
  and give the ssh command we gave earlier

  and then install the node version
  nvm install 22.17.1
  recheck if it was installed correclty using node -v
  now clone our devtinderweb and devtinder both front end and backend prjs from our github here on ubuntu machine
  git clone https://github.com/AparnaSamudrala/devTinder-web.git clone https://github.com/AparnaSamudrala/devTinder.git
  once cloning is done check if those folders created using
  ls comand
  ubuntu@ip-172-31-42-191:~$ ls
  devTinder devTinder-web
  now lets first deploy our front end code on AWS machine
  on aws machine goto
  $ cd devTinder-web/
  $ npm install (this installs all used packages)
  $ npm run build (creates a dist folder that is prod ready)
  to check if build is done check by ls and see if dist folder exist or not
  $ sudo apt update
  $ sudo apt install nginx
  $ sudo systemctl start nginx
  $ sudo systemctl enable nginx
  -> copy code from dist(build files) to /var/www/html

$ sudo scp -r dist/\* /var/www/html/
check if our dist folder files are copied properly
goto /var/www/html/ and see list of foles by ls
$cd /var/www/html/
$ls
assets index.html index.nginx-debian.html

- enable port :80 of your instance.
  on AWS console goto security groups create an inbound rule
  click on edit Inbound rules
  add rule under port range add 80 and add 0.0.0.0/0 to access from anywhere
  after saving rules check on port 80 for default
  we are done deploying our front end application
  copy Public IPv4 address http://15.207.51.110/
  done our frontend layer is ready :)
  ===============
  Backend Deployment
  ================
  dowloads $ ssh key
  $ cd devTinder
  $ npm install
  goto mongoDB database and netwrok access and select IP access list
  copy public IP v4 address of aws instance
  and add this to atlas IP access list and wait for the status to turn into active from pending
  devtinder $ npm run start
  you should see this

Connected to MongoDB successfully!
Server is successfully listeing on prt 7777...
now on AWS console to accept our port 7777 we need to add inbound rule
goto
EC2 ->
Security Groups ->
sg-03155994c877b457a - launch-wizard-1 ->
Edit inbound rules
here custom TCP 7777 0.0.0.0/0 add and save rule
pm2 package keeps our terminal always running in background
$ npm install pm2 -g
$ pm2 start npm -- start (instead of manual npm start which looses its use once we close the terminal or when we logout pof pc)
u can check the logs with
-$ pm2 logs
-> clear logs with cmd
pm2 flush npm
-> pm2 list
-> pm2 stop npm
-> pm2 delete npm
custom name for our pm2 instead of npm
-> pm2 start npm --name "devtinder-backend" -- start
ubuntu@ip-172-31-42-191:~$
sudo nano /etc/nginx/sites-available/default

scroll down to
default server configuration
here edit the server-name to public IPV4 address of AWS instance
below the servername add these trainling / after api and 7777 is mandate.

location /api/ {
proxy_pass http://localhost:7777/;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}

ctrl X it asks for save say Y and enter
now restart our nginx
sudo systemctl restart nginx
In devTinder-web update the constants.js BASE_URL to /api
