# VUEjs Project Setup Instructions

Initialize a vue3 app - npm init vue@3
cd into new project working directory
Execute npm install to download NPM dependencies.

Start the VUEjs server - Execute npm run dev to launch the Vue app in your browser.

"@" is aliased to /src
you can reference anything in src as follows, ie: "@/App.vue"

Components are re-useable pieces of ui related code

### Close server with Ctrl + C

# Tailwind Setup Instructions

npm install --save-dev tailwindcss postcss autoprefixer

postcss(renders tailwind css into regular css for the broswer to run), autoprefixer(ensures all broswers are able to use tailwindcss styling)

npx tailwindcss init -p

Creates the config files for tailwindcss and postcss(-p flag)
