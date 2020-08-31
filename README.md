# graffiti

This project is to develop an application that enables a user to see a live drawing in another browser window.

Important URLS: 
* Main app `http://localhost:1234/index.html`
* Preview url `http://localhost:1234/preview.html`

I've added 
* TailwindCSS
* Color and Opacity configurations
* PropTypes
* Clear functionality
* Download functionality
  
I've used
* Redux with Hooks & with HOCs
* React Hooks
* Parcel for bundling

![demo of main page](https://github.com/emilyseibert/graffiti/blob/main/demo.gif)

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
open "http://localhost:1234/index.html"
```

To create a production build:

```sh
npm run build-prod
```
